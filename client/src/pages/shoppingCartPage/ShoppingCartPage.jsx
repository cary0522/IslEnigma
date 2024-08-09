import "./ShoppingCartPage.css"
import { useEffect, useState } from "react"
import Item from "./Item"
import TotalPrice from "./TotalPrice"
import useCartStore from "../../zustand/cartStore"
import { useLocation } from "react-router-dom"
import axios from "axios"

import { fetchCartItem } from "../../hooks/useCartItem"
import { useCartItemsData } from "../../hooks/useCartItem"

const ShoppingCartPage = () => {
  const { data, error, isLoading } = useCartItemsData()

  // const { cartItems, loading, fetchCartData, setCartItems } = useCartStore()
  const [ticketQuantity, setTicketQuantity] = useState(1)

  const location = useLocation()
  const handleDelete = async (itemId) => {
    await axios.delete(`http://localhost:3001/cart/${itemId}`)
  }

  // useEffect(() => {
  //   fetchCartData()
  // }, [location.pathname, cartItems])

  // console.log(cartItems)
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="shoppingCart">
      <div className="itemList">
        {data.map((item) => {
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
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
      <TotalPrice cartItems={data} ticketQuantity={ticketQuantity} />
    </div>
  )
}

export default ShoppingCartPage
