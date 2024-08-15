import { useState } from "react"
import ProfileModal from "./ProfileModal"
import { useProfileOrders } from "../../hooks/useProfileOrders"

const Order = () => {
  const { data: orderData, isLoading, error } = useProfileOrders()
  const [orderPeople, setOrderPeople] = useState({})
  const [openModal, setOpenModal] = useState(false)

  const handleShowModal = (id) => {
    const targetOrder = orderData.find((order) => order.order_id === id)

    setOrderPeople(targetOrder.orderPeople)
    setOpenModal(true)
  }
  if (isLoading) return <div>isLoading..</div>
  console.log(orderData)
  return (
    <div id="orderContent" style={{ display: "flex" }}>
      {orderData.length === 0 ? (
        <div class="none-container">
          <img
            class="none-picture"
            src="/00logo/LOGO_Colorful_1.png"
            alt="PayMethod Image"
          />
          <p id="none-text">沒有任何訂單</p>
          <button class="submit-btn" id="addPayMethod">
            前往訂票
          </button>
        </div>
      ) : (
        <div class="order-tables-container">
          {orderData.map((data) => {
            return (
              <>
                <h2 class="order-table-title" key={data.id}>
                  {data.room_type ? "訂房資訊" : "訂票資訊"}
                </h2>
                <table class="order-table">
                  <thead>
                    <tr>
                      <th>訂單編號</th>
                      <th>{data.room_type ? "房型" : "票種"}</th>
                      <th>金額</th>
                      <th>{data.room_type ? "入住日期" : "入場日期"}</th>
                      <th>數量</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="訂單ID">{data.order_id}</td>
                      <td data-label="房型">
                        {data.room_type || data.ticket_type}
                      </td>
                      <td data-label="金額">{data.amount}</td>
                      <td class="date-cell" data-label="日期">
                        {data.room_type
                          ? `入住 : ${data.checkin_date}`
                          : data.checkin_date}
                        <br />
                        {data.room_type ? `退房 : ${data.checkout_date}` : ""}
                      </td>
                      <td data-label="數量">{data.quantity}</td>
                      <td data-label="操作">
                        <button
                          className="seeMore-btn"
                          onClick={() => {
                            handleShowModal(data.order_id)
                          }}
                        >
                          查看更多
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )
          })}
        </div>
      )}
      <ProfileModal
        data={orderPeople}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  )
}

export default Order
