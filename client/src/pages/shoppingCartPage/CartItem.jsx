import { useRemoveCartItem } from "../../hooks/useDeleteItem"
import { useUpdateQty } from "../../hooks/useUpdateQty"
import { formatDate } from "../../utils/helpers"
import { FaTrashCan } from "react-icons/fa6"
import roomImg from "/shoppingCart/roomImg.png"
import { useAuthContext } from "../../context/AuthContext"

const CartItem = ({ item, cartData, setCartData }) => {
  const { member } = useAuthContext()
  const { ticket = null, room = null } = item
  const { roomType, type } = item
  const { mutate: removeCartItem } = useRemoveCartItem()
  const { mutate: updateQty, isLoading: qtyLoading, isError } = useUpdateQty()

  const handleUpdateQty = (newQty, onDelete, onUpdateQuantity) => {
    console.log(newQty)
    if (!member) {
      const updatedCart = cartData.map((i) =>
        i.id === item.id ? { ...i, quantity: newQty } : i
      )

      localStorage.setItem("cart", JSON.stringify(updatedCart))

      setCartData(updatedCart)

      return
    }

    updateQty(
      { id: item.order_item_id, quantity: newQty },
      {
        onSuccess: () => {
          console.log("Quantity updated successfully!")
        },
        onError: (error) => {
          console.error("Error updating quantity:", error)
        },
      }
    )
  }

  const handlePlus = () => {
    if (item.quantity < 10) {
      handleUpdateQty(item.quantity + 1)
    }
  }

  const handleMinus = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1
      handleUpdateQty(newQuantity)
    }
  }

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("確定要刪除這個商品嗎？")
    if (isConfirmed) {
      if (!member) {
        const updatedCart = cartData.filter((i) => i.id !== item.id)
        console.log(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        setCartData(updatedCart)
      }

      removeCartItem(id)
    }
  }
  console.log(item)
  return (
    <div className="item">
      <div className="itemTop">
        <div className="itemContent">
          <div className={`imgContainer ${ticket ? "ticketimgContainer" : ""}`}>
            <img
              src={
                ticket || item.type
                  ? "https://i.mj.run/u/6d8aa752-4375-4c2e-b46b-012f73974faf/578ae76eff4ac5a8e014647ede78abf64a83cce813d34b66d8ab8008b315541e_384_N.png"
                  : roomImg
              }
              alt={ticket ? "票券圖片" : "房間圖片"}
              className={ticket ? "ticketImg" : "roomImg"}
            />
          </div>
          <div className="shoppingCartItemInfo">
            <h5 className="itemTitle">
              {room?.room_type || ticket?.type || roomType || type}
            </h5>
            <p className="itemDate">
              {/* { item.id && "入園日期" } */}
              {ticket || type ? "入園日期 ： " : "入住日期："}
              {formatDate(
                item.check_in_date ||
                  (item.dateRange ? item.dateRange[0] : null) ||
                  item.booked_date
              ) || "未提供日期"}
              {(room || roomType) && (
                <>
                  {" - "}退房日期：
                  {formatDate(item.check_out_date || item.dateRange[1]) ||
                    "未提供日期"}
                </>
              )}
            </p>
            {(room || roomType) && (
              <>
                <p className="itemPeople">
                  間數 : {item.room_count || item.roomCount} 間
                </p>
                <p className="itemPeople">
                  人數 : {item.people_count || item.people} 位
                </p>
              </>
            )}
          </div>
        </div>
        <div className="btngroups">
          <div className="shoppingCartCounterBox">
            <div className="shoppingCartCounter">
              <div className="minusButton" onClick={handleMinus}>
                <span> - </span>
              </div>
              <span>{item.quantity}</span>
              <div className="plusButton" onClick={handlePlus}>
                <span> ＋ </span>
              </div>
            </div>
          </div>
          <div
            className="shoppingCartGarbageCan"
            onClick={() => handleDelete(item.order_item_id)}
          >
            <FaTrashCan />
          </div>
        </div>
      </div>
      <div className="itemBottom">
        <button className="changeButton">
          <i className="bi bi-pencil-square"></i>改變心意
        </button>
        <p className="itemPrice">
          NT${" "}
          {(item.room?.price || item.ticket?.price || item.price) *
            item.quantity}
        </p>
      </div>
    </div>
  )
}

export default CartItem
