import { useUpdateQty } from "../../hooks/useUpdateQty"
import { formatDate } from "../../utils/helpers"

const CartItem = ({ item }) => {
  const { mutate: updateQty, isLoading: qtyLoading, isError } = useUpdateQty()

  const handleUpdateQty = (newQty) => {
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
      const newQuantity = item.quantity + 1

      handleUpdateQty(newQuantity)
    }
  }

  const handleMinus = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1
      handleUpdateQty(newQuantity)
    }
  }

  return (
    <div class="item">
      <div class="itemTop">
        <div class="itemContent">
          <div class="imgContainer">
            <img src="public/roomImg.png" alt="房間圖片" class="roomImg" />
          </div>
          <div class="shoppingCartItemInfo">
            <h5 class="itemTitle">{item.room.room_type}</h5>
            <p class="itemDate">
              入住日期:{formatDate(item.check_in_date)} - 退房日期:
              {formatDate(item.check_out_date)}
            </p>
            <p class="itemBeds">床數 : {item.room.room_count}</p>
            <p class="itemPeople">人數 : {item.people_count}位</p>
          </div>
        </div>
        <div class="btngroups">
          <div class="shoppingCartCounterBox">
            <div class="shoppingCartCounter">
              <div class="minusButton" onClick={handleMinus}>
                <span> - </span>
              </div>
              <span>{item.quantity}</span>
              <div class="plusButton" onClick={handlePlus}>
                <span> ＋ </span>
              </div>
            </div>
          </div>
          <div class="shoppingCartGarbageCan">
            <i class="bi bi-trash3-fill"></i>
          </div>
        </div>
      </div>
      <div class="itemBottom">
        <button class="changeButton">
          <i class="bi bi-pencil-square"></i>改變心意
        </button>
        <p class="itemPrice">NT$ {item.room.price * item.quantity}</p>
      </div>
    </div>
  )
}

export default CartItem
