import { useEffect, useState } from "react"
import "./CheckOutPage.css"
import useCartStore from "../../zustand/cartStore"
import PriceItem from "./PriceItem"
import CheckTotal from "./CheckOutTotal"
import CheckOutTotal from "./CheckOutTotal"
import axios from "axios"
import { Form, useLocation, useNavigate } from "react-router-dom"

const CheckOutPage = () => {
  const [orderInfo, setOrderInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    address: "",
    zip: "",
  })

  const navigate = useNavigate()
  const { cartItems, loading, fetchCartData, setCartItems } = useCartStore()
  const location = useLocation()
  useEffect(() => {
    fetchCartData()
  }, [location.pathname])

  console.log(cartItems)

  const handlePayment = async () => {
    localStorage.setItem("order-info", {
      ...orderInfo,
      order_id: cartItems[0].order_id,
    })
    const res = await axios.post(
      "http://localhost:3001/cart/create-checkout-session",
      {
        cartItems,
      }
    )

    const paymentUrl = res.data.url
    window.location.href = paymentUrl
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setOrderInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="checkOutContainer">
      <div className="orderInfo">
        <div className="orderInfoTitle">訂購人資訊</div>
        <form className="form-container">
          <div className="form-group">
            <div>
              <label htmlFor="lastName">姓氏</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={orderInfo.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">名字</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={orderInfo.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="lastName">電話</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={orderInfo.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="lastName">國家</label>
              <input
                type="text"
                id="country"
                name="country"
                value={orderInfo.country}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">郵遞區號</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={orderInfo.zip}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="lastName">住址</label>
              <input
                type="text"
                id="address"
                name="address"
                value={orderInfo.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="priceContainer">
        {cartItems.map((item) => {
          return <PriceItem cartItems={item} />
        })}
        <CheckOutTotal cartItems={cartItems} />
        <button onClick={handlePayment}>前往付款頁面</button>
      </div>
    </div>
  )
}

export default CheckOutPage
