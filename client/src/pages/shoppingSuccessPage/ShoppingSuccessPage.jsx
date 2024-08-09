import { Link, useLocation, useParams } from "react-router-dom"
import "./ShoppingSuccessPage.css"
import { useEffect, useState } from "react"
import axios from "axios"
import useCartStore from "../../zustand/cartStore"
import { useNavigate } from "react-router-dom"
const ShoppingSuccessPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [status, setStatus] = useState("Checking payment status...")
  const { cartItems, loading, fetchCartData } = useCartStore()
  const params = new URLSearchParams(location.search)
  const sessionIdParam = params.get("session_id")

  // useEffect(() => {
  //   fetchCartData()
  // }, [fetchCartData])

  // useEffect(() => {
  //   const orderInfo = localStorage.getItem(
  //     "order-info",
  //     JSON.stringify(cartItems)
  //   )

  //   if (sessionIdParam) {
  //     axios
  //       .post("http://localhost:3001/cart/payment-status", {
  //         sessionIdParam,
  //       })
  //       .then((res) => {
  //         if (res.data.status === "complete") {
  //           console.log("Payment successful!")

  //           const method = res.data.payment_method_types[0]
  //           axios.post("http://localhost:3001/cart", {
  //             cartItems,
  //           })
  //           axios.post("http://localhost:3001/cart/order-info", {
  //             orderInfo,
  //             method,
  //           })
  //         } else {
  //           setStatus("Payment failed.")
  //         }
  //       })
  //   } else {
  //     navigate("/")
  //   }
  // }, [cartItems])

  return (
    <div className="successBox">
      <img
        className="big-ticket"
        src="/shoppingSuccess/bigger-ticket.png"
        alt="Big Ticket"
      />
      <p className="successTitle">謝謝您的購買</p>
      <p className="remind">
        訂購成功後，系統會發送「訂單明細」及「電子票券連結」至結帳時所留下的信箱與手機。
      </p>
      <div className="followUs">
        <p className="followUsText">追蹤我們</p>
        <img src="/shoppingSuccess/fb-icon.png" alt="Facebook Icon" />
        <img src="/shoppingSuccess/yt-icon.png" alt="YouTube Icon" />
        <img src="/shoppingSuccess/ig-icon.png" alt="Instagram Icon" />
      </div>
      <button className="btnOrder">查看訂單</button>
      <button className="btnOrder">
        <Link to="/cart">返回購物車</Link>
      </button>
    </div>
  )
}

export default ShoppingSuccessPage
