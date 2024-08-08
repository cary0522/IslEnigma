import { useEffect, useState } from "react"
import "./CheckOutPage.css"
import useCartStore from "../../zustand/cartStore"
import PriceItem from "./PriceItem"
import CheckTotal from "./CheckOutTotal"
import CheckOutTotal from "./CheckOutTotal"
import axios from "axios"
import { Form, useLocation, useNavigate } from "react-router-dom"
import { useCartItemsData } from "../../hooks/useCartItem"

const CheckOutPage = () => {
  const [orderInfo, setOrderInfo] = useState({
    customer: "",
    phoneNumber: "",
    country: "",
    address: "",
  })

  const navigate = useNavigate()
  // const { cartItems, loading, fetchCartData, setCartItems } = useCartStore()
  const { data, error, isLoading } = useCartItemsData()

  const location = useLocation()
  // useEffect(() => {
  //   fetchCartData()
  // }, [location.pathname])
  if (isLoading) return <p>Loading...</p>

  console.log(data)

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
              <label htmlFor="customer">姓名</label>
              <input
                type="text"
                id="firstName"
                name="customer"
                value={orderInfo.customer}
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
        {data.map((item) => {
          return <PriceItem cartItems={item} />
        })}
        <CheckOutTotal cartItems={data} />
        <button onClick={handlePayment}>前往付款頁面</button>
      </div>
    </div>
  )
}

export default CheckOutPage
