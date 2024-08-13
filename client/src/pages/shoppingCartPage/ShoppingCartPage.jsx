import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import { useCartItemsData } from "../../hooks/useCartItem"
import { useUpdateQty } from "../../hooks/useUpdateQty"
import { useRemoveCartItem } from "../../hooks/useDeleteItem"
import CartItem from "./CartItem"
import arrow from "/shoppingCart/breadcrumbArrow.png"
import "./ShoppingCartPage.scss"

const ShoppingCartPage = () => {
  const { mutate: removeCartItem } = useRemoveCartItem()
  const { data, error, isLoading } = useCartItemsData()
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
    // <div className="shoppingCart">
    //   <div className="itemList">
    //     {data.order_item.map((item) => {
    //       return (
    //         <Item
    //           itemId={item.order_item_id}
    //           key={item.order_item_id}
    //           roomType={item.room?.room_type}
    //           bedCount={item.room?.bed_count}
    //           checkInDate={item.check_in_date}
    //           checkOutDate={item.check_out_date}
    //           ticketType={item.ticket?.type}
    //           quantity={item.quantity}
    //           peopleCount={item.people_count}
    //           price={item.room?.price}
    //           ticketQuantity={ticketQuantity}
    //           setTicketQuantity={setTicketQuantity}
    //           handleDelete={handleDelete}
    //         />
    //       )
    //     })}
    //   </div>
    //   <TotalPrice cartItems={data.order_item} ticketQuantity={ticketQuantity} />
    // </div>

    <div class="shoppingCart">
      {data ? (
        <div class="itemList">
          {data.order_item.map((item) => {
            return <CartItem item={item} />
          })}

          {/* <div class="item">
        <div class="itemTop">
          <div class="itemContent">
            <div class="imgContainer ticketimgContainer">
              <img
                src="https://i.mj.run/u/6d8aa752-4375-4c2e-b46b-012f73974faf/578ae76eff4ac5a8e014647ede78abf64a83cce813d34b66d8ab8008b315541e_384_N.png"
                alt="VIP票券"
                class="ticketImg"
              />
            </div>
            <div class="shoppingCartItemInfo">
              <h5 class="itemTitle">VIP尊榮票券</h5>
              <p class="itemDate">入園日期：2024/12/25</p>
            </div>
          </div>
          <div class="btngroups">
            <div class="shoppingCartCounterBox">
              <div class="shoppingCartCounter">
                <div class="minusButton">
                  <span> - </span>
                </div>
                <span>0</span>
                <div class="plusButton">
                  <span> ＋ </span>
                </div>
              </div>
            </div>
            <div class="shoppingCartGarbageCan">
              <i class="bi bi-trash3-fill"></i>{" "}
            </div>
          </div>
        </div>
        <div class="itemBottom">
          <button class="changeButton">
            <i class="bi bi-pencil-square"></i>改變心意
          </button>
          <p class="itemPrice">NT$ 100,000</p>
         *+</div>
      </div> */}
        </div>
      ) : (
        <div>購物車上未有任何商品</div>
      )}
      <div class="right">
        <div class="totalPriceContainer">
          <div class="totalPrice">
            <span class="title">小計:</span>
            <span>
              NT$
              {data?.order_item && data.order_item.length > 0
                ? data.order_item.reduce((total, item) => {
                    const roomPrice = item.room?.price || 0
                    const ticketPrice = item.ticket?.price || 0
                    const itemTotal =
                      roomPrice * item.quantity + ticketPrice * item.quantity
                    return total + itemTotal
                  }, 0)
                : 0}
            </span>
          </div>
          {/* <div class="onSale">
            <span class="title">首購優惠:</span>
            <span>NT$1,800</span>
          </div> */}
          <Link to="checkout" class="buyNow">
            前往購買手續
            <img src={arrow} alt="箭頭" class="breadcrumbArrow" />
          </Link>
          <button class="continueShopping">繼續購物</button>
        </div>
        <div class="customerService">
          <div class="customerAlerm">
            <img class="customerAlermImg" src="./public/對話框.png" alt="" />
            <p>需要訂房嗎?</p>
          </div>
          <img
            class="customerImg"
            src="/shoppingCart/客服人員.png"
            alt="客服"
          />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartPage
