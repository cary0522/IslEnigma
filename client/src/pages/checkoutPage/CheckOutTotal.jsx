import { useEffect, useState } from "react"

const CheckOutTotal = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(cartItems)
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => {
        const roomPrice = item.room?.price || 0
        const ticketPrice = item.ticket?.price || 0

        return acc + (roomPrice + ticketPrice) * item.quantity
      }, 0)
      setTotalPrice(total)
    } else {
    }
  }, [cartItems])

  console.log(totalPrice)
  return (
    <div className="priceItem">
      <div className="itemInfo total">
        <p>總價</p> <p>{totalPrice}</p>
      </div>
    </div>
  )
}

export default CheckOutTotal
