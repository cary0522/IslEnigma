import { useUpdateQty } from "../../hooks/useUpdateQty"

const Item = ({
  itemId,
  roomType,
  checkInDate,
  checkOutDate,
  bedCount,
  ticketType,
  quantity,
  peopleCount,
  ticketQuantity,
  setTicketQuantity,
  handleDelete,
}) => {
  const { mutate: updateQty, isLoading, isError } = useUpdateQty()

  const handleUpdateQty = (newQty) => {
    updateQty(
      { id: itemId, quantity: newQty },
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
    if (ticketQuantity < 10) {
      const newQuantity = ticketQuantity + 1
      setTicketQuantity(newQuantity)
      handleUpdateQty(newQuantity)
    }
  }

  const handleMinus = () => {
    if (ticketQuantity > 1) {
      const newQuantity = ticketQuantity - 1
      setTicketQuantity(newQuantity)
      handleUpdateQty(newQuantity)
    }
  }

  return (
    <div className="item">
      <div className="itemTop">
        <img
          className="roomImg"
          src="shoppingCart/roomImg.png"
          alt="Room Image"
        />

        <div className="shoppingCartItemInfo">
          <p className="shoppingCartItemTitle">
            {roomType ?? ticketType}
            <hr />
          </p>
          {checkInDate && <p>入住日期:{checkInDate}</p>}
          {checkOutDate && <p>退房日期:{checkOutDate}</p>}
          {peopleCount && <p>入住人數:{peopleCount}</p>}

          {bedCount ? <p>床數:{bedCount}</p> : <p>張數: {quantity}</p>}
        </div>
        <div className="shoppingCartCounterBox">
          {ticketType && (
            <div className="shoppingCartCounter">
              <div onClick={handleMinus}>
                <img src="shoppingCart/minus.png" alt="Minus Icon" />
              </div>
              <p>{quantity}</p>
              <div onClick={handlePlus}>
                <img src="shoppingCart/plus.png" alt="Plus Icon" />
              </div>
            </div>
          )}
        </div>
        <div className="shoppingCartGarbageCan">
          <img
            src="shoppingCart/garbageCan.png"
            alt="Garbage Can Icon"
            onClick={() => {
              handleDelete(itemId)
            }}
          />
        </div>
      </div>
      <hr />
      <div className="itemBottom"></div>
    </div>
  )
}

export default Item
