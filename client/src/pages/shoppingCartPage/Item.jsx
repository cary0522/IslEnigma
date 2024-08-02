import axios from "axios"
import { useEffect, useState } from "react"

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
}) => {
  useEffect(() => {
    setTicketQuantity(quantity)
  }, [])

  const updateQuantity = async (newQuantity) => {
    try {
      const res = await axios.put(`http://localhost:3001/cart/${itemId}`, {
        quantity: newQuantity,
      })

      const updatedItem = res.data
    } catch (error) {
      console.error("Failed to update quantity", error)
    }
  }

  const handlePlus = () => {
    console.log(123)
    if (ticketQuantity < 10) {
      const newQuantity = ticketQuantity + 1
      setTicketQuantity(newQuantity)

      updateQuantity(newQuantity)
    }
  }

  const handleMinus = () => {
    if (ticketQuantity > 1) {
      const newQuantity = ticketQuantity - 1
      setTicketQuantity(newQuantity)
      updateQuantity(newQuantity)
    }
  }

  const handleDelete = async () => {
    console.log(id)
    // await axios.delete(`http://localst:3000/cart/${id    }`)
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
          {checkInDate ? <p>入住日期:{checkInDate}</p> : ""}
          {checkOutDate ? <p>退房日期:{checkOutDate}</p> : ""}
          {peopleCount ? <p>入住人數:{peopleCount}</p> : ""}

          {bedCount ? <p>床數:{bedCount}</p> : <p>張數: {ticketQuantity}</p>}
        </div>
        <div className="shoppingCartCounterBox">
          {ticketType && (
            <div className="shoppingCartCounter">
              <div onClick={handleMinus}>
                <img src="shoppingCart/minus.png" alt="Minus Icon" />
              </div>
              <p>{ticketQuantity}</p>
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
            onClick={handleDelete}
          />
        </div>
      </div>
      <hr />
      <div className="itemBottom"></div>
    </div>
  )
}

export default Item
