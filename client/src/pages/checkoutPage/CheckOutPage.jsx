import { useEffect, useState } from "react"
// import "./CheckOutPage.css"
// import "./CheckOutPage.css"
import PriceItem from "./PriceItem"
import CheckTotal from "./CheckOutTotal"
import CheckOutTotal from "./CheckOutTotal"
import axios from "axios"
import { Form, useLocation, useNavigate } from "react-router-dom"
import { useCartItemsData } from "../../hooks/useCartItem"
import { formatDate, SERVER_URL } from "../../utils/helpers"

const CheckOutPage = () => {
  const { data, error, isLoading } = useCartItemsData()

  const [orderInfo, setOrderInfo] = useState({
    customer: "",
    phone_number: "",
    country: "",
    address: "",
  })

  const navigate = useNavigate()
  // const { cartItems, loading, fetchCartData, setCartItems } = useCartStore()
  const location = useLocation()
  // useEffect(() => {
  //   fetchCartData()
  // }, [location.pathname])
  if (isLoading) return <p>is loading...</p>

  const handleCreatePayment = async () => {
    const res = await axios.post(`${SERVER_URL}/cart/create-checkout-session`, {
      data,
      orderInfo,
    })

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

  const test = () => {
    alert(123)
  }
  return (
    // <div className="checkOutContainer">
    //   <div className="orderInfo">
    //     <div className="orderInfoTitle">訂購人資訊</div>
    //     <form className="form-container">
    //       <div className="form-group">
    //         <div>
    //           <label htmlFor="customer">姓名</label>
    //           <input
    //             type="text"
    //             id="firstName"
    //             name="customer"
    //             value={orderInfo.customer}
    //             onChange={handleInputChange}
    //           />
    //         </div>
    //       </div>
    //       <div className="form-group">
    //         <div>
    //           <label htmlFor="lastName">電話</label>
    //           <input
    //             type="text"
    //             id="phoneNumber"
    //             name="phone_number"
    //             value={orderInfo.phone_number}
    //             onChange={handleInputChange}
    //           />
    //         </div>
    //       </div>
    //       <div className="form-group">
    //         <div>
    //           <label htmlFor="lastName">國家</label>
    //           <input
    //             type="text"
    //             id="country"
    //             name="country"
    //             value={orderInfo.country}
    //             onChange={handleInputChange}
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="lastName">郵遞區號</label>
    //           <input
    //             type="text"
    //             id="zip"
    //             name="zip"
    //             value={orderInfo.zip}
    //             onChange={handleInputChange}
    //           />
    //         </div>
    //       </div>
    //       <div className="form-group">
    //         <div>
    //           <label htmlFor="lastName">住址</label>
    //           <input
    //             type="text"
    //             id="address"
    //             name="address"
    //             value={orderInfo.address}
    //             onChange={handleInputChange}
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   <div className="priceContainer">
    //     {data.order_item.map((item) => {
    //       return <PriceItem cartItems={item} />
    //     })}
    //     <CheckOutTotal cartItems={data} />
    //     <button onClick={handleCreatePayment}>前往付款頁面</button>
    //   </div>
    // </div>

    <>
      <div class="checkout">
        <div class="checkout-left">
          <div class="customer dropdown-section">
            <div class="title" onclick="toggleDropdown(this)">
              <h2>訂購人資訊</h2>
              <i class="bi bi-chevron-down dropdown-icon"></i>
            </div>
            <div class="dropdown-content show">
              <div class="customer-info">
                <div class="form-group">
                  <label for="name">姓名</label>
                  <input type="text" id="name" placeholder="王小明" />
                </div>
                <div class="form-group">
                  <label for="phone">電話</label>
                  <input type="tel" id="phone" placeholder="0912 345 678" />
                </div>
                <div class="form-group address">
                  <label for="address">地址</label>
                  <div class="address-inputs">
                    <div class="addressSelect">
                      <select id="city">
                        <option value="">台北市</option>
                      </select>
                      <select id="district">
                        <option value="">中正區</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      id="address"
                      placeholder="請輸入詳細地址"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="payment-method dropdown-section">
            {/* <div class="title" onclick="toggleDropdown(this)">
              <h2>付款方式</h2>
              <i class="bi bi-chevron-down dropdown-icon"></i>
            </div> */}
            <div class="dropdown-content">
              <div class="payment-info">
                <div class="payment-option" onclick="selectPaymentOption(this)">
                  <img src="public/paypal.png" alt="PayPal" />
                  <span>PayPal</span>
                  <i class="bi bi-chevron-down dropdown-icon"></i>
                </div>
                <div
                  class="payment-option creditCardGroup active"
                  onclick="selectPaymentOption(this)"
                >
                  <div class="credit-card-title">
                    <img src="public/credit-card.png" alt="信用卡" />
                    <span>信用卡</span>
                    <i
                      class="bi bi-chevron-down dropdown-icon"
                      onclick="toggleCreditCardOptions(event, this)"
                    ></i>
                  </div>
                  <div class="credit-card-options">
                    <div class="saved-card" onclick="selectCard(this)">
                      <img src="public/credit-card.png" alt="信用卡" />
                      <div class="card-info">
                        <span>資展銀行</span>
                        <span>**** **** **** 1234</span>
                      </div>
                      <i class="bi bi-chevron-down dropdown-icon"></i>
                    </div>
                    <div
                      class="new-card-option"
                      onclick="toggleNewCardForm(this)"
                    >
                      <span>新增卡片</span>
                      <i class="bi bi-chevron-down dropdown-icon"></i>
                    </div>
                    <div class="new-card">
                      <div class="form-group">
                        <label for="card-number">卡號</label>
                        <input
                          type="text"
                          id="card-number"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group expiry-dategroup">
                          <div class="expiry-date">
                            <label for="expiry-date">有效日期</label>
                            <div class="expiry-inputs">
                              <select id="expiry-month">
                                <option value="">月</option>
                              </select>
                              <select id="expiry-year">
                                <option value="">年</option>
                              </select>
                            </div>
                          </div>
                          <div class="cvv">
                            <label for="cvv">安全碼</label>
                            <input type="text" id="cvv" placeholder="000" />
                          </div>
                        </div>
                      </div>
                      <button class="add-card-btn">新增卡片</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-right">
          <div class="order-summary">
            <h2>訂單摘要</h2>
            {data.order_item.map((item) => {
              return (
                <>
                  <div class="order-item">
                    <img
                      src="/shoppingCart/roomImg.png"
                      alt="客房圖片"
                      class="room-img"
                    />
                    <div class="item-details">
                      <h3>簡約帳篷 | 草原步調 特別優惠價</h3>
                      <p>入住日期:{formatDate(item.check_in_date)}</p>
                      <p>數量: {item.quantity}</p>
                      <p class="item-price">
                        NT$ {item.room.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </>
              )
            })}
            {/* <div class="order-item">
              <img
                src="https://i.mj.run/u/6d8aa752-4375-4c2e-b46b-012f73974faf/578ae76eff4ac5a8e014647ede78abf64a83cce813d34b66d8ab8008b315541e_384_N.png"
                alt="VIP票券"
                class="ticketImg"
              />
              <div class="item-details">
                <h3>VIP尊榮票券</h3>
                <p>日期: 2001/6/12</p>
                <p>數量: 一張</p>
                <p class="item-price">NT$ 5,000</p>
              </div>
            </div> */}
            <div class="price-summary">
              <div class="price-row total">
                <span>付款金額</span>
                <span class="total-price">
                  NT${" "}
                  {data.order_item.reduce((total, item) => {
                    const roomPrice = item.room?.price || 0
                    const ticketPrice = item.ticket?.price || 0
                    const itemTotal =
                      roomPrice * item.quantity + ticketPrice * item.quantity
                    return total + itemTotal
                  }, 0)}
                </span>
              </div>
            </div>
          </div>
          <button class="confirm-payment" onClick={handleCreatePayment}>
            確認付款
          </button>
          <button class="back-btn">返回上一步</button>
        </div>
      </div>
      <div class="checkout-phone">
        <div class="checkout-price">
          <span>總金額</span>
          <span class="total-price">NT$ 17,500</span>
        </div>
        <button class="confirm-payment">確認付款</button>
      </div>
    </>
  )
}

export default CheckOutPage
