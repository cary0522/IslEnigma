import axios, { toFormData } from "axios"
import "./ShoppingCartPage.css"
import { useEffect, useState } from "react"
import Item from "./Item"
import TotalPrice from "./TotalPrice"
import useCartStore from "../../zustand/cartStore"
import { useLocation } from "react-router-dom"
const ShoppingCartPage = () => {
  const { cartItems, loading, fetchCartData, setCartItems } = useCartStore()
  const [ticketQuantity, setTicketQuantity] = useState(1)

  const location = useLocation()
  useEffect(() => {
    fetchCartData()
  }, [location.pathname])

  if (loading) return <p>Loading...</p>
  return (
    <div className="shoppingCart">
      <div className="itemList">
        {cartItems.map((item) => {
          return (
            <Item
              itemId={item.order_item_id}
              key={item.order_item_id}
              roomType={item.room?.room_type}
              bedCount={item.room?.bed_count}
              checkInDate={item.check_in_date}
              checkOutDate={item.check_out_date}
              ticketType={item.ticket?.type}
              quantity={item.quantity}
              peopleCount={item.people_count}
              price={item.room?.price}
              ticketQuantity={ticketQuantity}
              setTicketQuantity={setTicketQuantity}
            />
          )
        })}
      </div>
      <TotalPrice cartItems={cartItems} ticketQuantity={ticketQuantity} />
    </div>
  )
}

export default ShoppingCartPage
