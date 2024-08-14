import { useEffect, useState } from "react"
// date range picker
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css"
import "react-calendar/dist/Calendar.css"
import DateRangePicker from "@wojtekmaj/react-daterange-picker"
import { useQueryRooms } from "../../hooks/useQueryRooms"
import { useNewCartItem } from "../../hooks/useNewCartItem"
import { useCartItemsData } from "../../hooks/useCartItem"

const ReservationModal = ({ setToggleReservation }) => {
  const {
    data: cartItems,
    error,
    isLoading: loadingCartItem,
  } = useCartItemsData()
  const { mutate: queryRooms, isLoading, data } = useQueryRooms()

  const {
    mutate: newCartItem,
    isLoading: addingItem,
    data: item,
  } = useNewCartItem()
  const [totalPrice, setTotalPrice] = useState(0)
  const [value, onChange] = useState([])
  const [queryData, setQueryData] = useState({
    dateRange: [],
    roomCount: 1,
    people: 1,
    roomType: "",
  })

  const formattedDate = (date) => {
    if (!date) return ""
    return date.toLocaleDateString({
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }
  const handleUpdate = (e) => {
    const { name, className } = e.target

    setQueryData((prev) => {
      let updatedValue = prev[name]

      switch (className) {
        case "increase":
          ++updatedValue
          break
        case "decrease":
          --updatedValue
          break
        default:
          break
      }
      if (updatedValue < 1) updatedValue = 1
      if (updatedValue > 5) updatedValue = 5

      return {
        ...prev,
        [name]: updatedValue,
      }
    })
  }
  const handleSearch = () => {
    setTotalPrice(0)
    queryRooms(queryData)
  }

  const validateSearch = () => {
    const { dateRange } = queryData
    return dateRange.length === 0
  }

  const handleSelect = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]
    const price = selectedOption.getAttribute("data-price")
    const roomType = selectedOption.getAttribute("data-name")
    const roomId = parseInt(selectedOption.value)

    setQueryData((prev) => ({
      ...prev,
      roomType,
      roomId,
    }))
    setTotalPrice(price)
  }
  const handleAddCart = () => {
    const orderId = cartItems.order_id

    const itemData = {
      ...queryData,
      order_id: orderId,
    }
    newCartItem(itemData)
  }

  useEffect(() => {
    if (value && value.length === 2) {
      setQueryData((prev) => ({
        ...prev,
        dateRange: value,
      }))
    }
  }, [value])
  // useEffect(() => {
  //   if (data) {
  //     setRoomOption(data)
  //   }
  // }, [data])

  return (
    <div id="quickReservationModal" className="quickModal">
      <div className="quickModalContent">
        <span
          className="closeQuickModal"
          onClick={() => {
            setToggleReservation(false)
          }}
        >
          &times;
        </span>
        <div className="modalLeft">
          <h2>
            露營訂房<i className="bi bi-calendar-week-fill"></i>
          </h2>
          <div>
            <DateRangePicker
              onChange={onChange}
              value={value}
              clearIcon={false}
              closeCalendar={false}
              disableCalendar={false}
              isOpen={true}
              shouldCloseCalendar={({ reason }) => reason !== "outsideAction"}
              locale="en-us"
            />
          </div>
          <a
            className="buttonSearch"
            onClick={handleSearch}
            disabled={validateSearch()}
          >
            搜索 <i className="bi bi-search"></i>
          </a>
        </div>
        <div className="modalRight">
          <div className="reservationForm">
            <div className="dateInputs">
              <div className="dateInput">
                <label htmlFor="checkInDate">入住日期</label>
                <input
                  type="text"
                  id="checkInDate"
                  readOnly
                  value={formattedDate(queryData.dateRange[0]) || ""} // 确保有值或空字符串
                />
              </div>
              <div className="dateInput">
                <label htmlFor="checkOutDate">退房日期</label>
                <input
                  type="text"
                  id="checkOutDate"
                  readOnly
                  value={formattedDate(queryData.dateRange[1]) || ""}
                />
              </div>
            </div>
            <div className="guestInputs">
              <div className="inputGroup">
                <label>間數</label>
                <div className="numberInput">
                  <button
                    className="decrease"
                    name="roomCount"
                    onClick={handleUpdate}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="roomCount"
                    value={queryData.roomCount || ""}
                    min="0"
                    max="4"
                    readOnly
                  />
                  <button
                    className="increase"
                    name="roomCount"
                    onClick={handleUpdate}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="inputGroup">
                <label>人數</label>
                <div className="numberInput">
                  <button
                    className="decrease"
                    name="people"
                    onClick={handleUpdate}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="guestCount"
                    value={queryData.people || ""}
                    min="0"
                    max="10"
                    readOnly
                  />
                  <button
                    className="increase"
                    name="people"
                    onClick={handleUpdate}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                {/* <a
                className="buttonSearch"
                onClick={handleSearch}
                disabled={validateSearch()}
              >
                搜索
              </a> */}
              </div>

              <div className="totalPrice">
                <span>NT$</span>
                <input
                  type="text"
                  id="totalPriceInput"
                  value={totalPrice}
                  readOnly
                />
              </div>
            </div>
            {data && (
              <div className="roomTypeSelectWrapper">
                <select
                  id="roomTypeSelect"
                  className="roomTypeSelect"
                  onChange={handleSelect}
                  value={queryData.roomId || ""}
                >
                  <option value="" disabled>
                    選擇房型
                  </option>
                  {data.map((room) => (
                    <option
                      key={room.room_id}
                      value={room.room_id}
                      data-price={room.price}
                      data-name={room.room_type}
                    >
                      {room.room_type}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              id="searchResults"
              onClick={handleAddCart}
              disabled={!queryData.roomId}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationModal
