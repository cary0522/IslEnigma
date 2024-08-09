import { useEffect, useState } from "react"
import "./CheckOutPage.css"
import PriceItem from "./PriceItem"
import CheckTotal from "./CheckOutTotal"
import CheckOutTotal from "./CheckOutTotal"
import axios from "axios"
import { Form, useLocation, useNavigate } from "react-router-dom"
import { useCartItemsData } from "../../hooks/useCartItem"
import { SERVER_URL } from "../../utils/helpers"

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
  console.log(data)
  const location = useLocation()
  // useEffect(() => {
  //   fetchCartData()
  // }, [location.pathname])
  if (isLoading) return <p>Loading...</p>

  const handlePayment = async () => {
    // localStorage 存儲的格式必須是字符串
    const infoData = {
      ...orderInfo,
      order_id: data[0].order_id,
    }
    localStorage.setItem("order-info", JSON.stringify(infoData))
    const res = await axios.post(
      `${SERVER_URL}/cart/create-checkout-session`,
      data
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
