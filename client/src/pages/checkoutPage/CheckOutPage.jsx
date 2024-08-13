import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCartItemsData } from "../../hooks/useCartItem"
import { formatDate, SERVER_URL } from "../../utils/helpers"

const CheckOutPage = () => {
  const { data, isLoading } = useCartItemsData()

  const navigate = useNavigate()
  const errMsg = {
    color: "red",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer: "",
      phone_number: "",
      address: "",
    },
  })

  if (isLoading) return <p>is loading...</p>
  const handleCreatePayment = async (formData) => {
    const res = await axios.post(`${SERVER_URL}/cart/create-checkout-session`, {
      data,
      orderInfo: formData,
    })

    const paymentUrl = res.data.url
    window.location.href = paymentUrl
  }

  return (
    <>
      <div class="checkout">
        <form onSubmit={handleSubmit(handleCreatePayment)}>
          <div class="checkout-left">
            <div class="customer dropdown-section">
              <div class="title">
                <h2>訂購人資訊</h2>
              </div>
              <div class="dropdown-content show">
                <div class="customer-info">
                  <div class="form-group">
                    <label for="name">姓名</label>
                    <input
                      {...register("customer", { required: "* 此欄位為必填" })}
                      type="text"
                      id="name"
                      placeholder="王小明"
                    />
                    {errors.customer && (
                      <p style={errMsg}>{errors.customer.message}</p>
                    )}
                  </div>
                  <div class="form-group">
                    <label for="phone">電話</label>
                    <input
                      {...register("phone_number", {
                        required: "* 此欄位為必填",
                      })}
                      type="tel"
                      id="phone"
                      placeholder="0912 345 678"
                    />
                    {errors.phone_number && (
                      <p style={errMsg}>{errors.phone_number.message}</p>
                    )}
                  </div>
                  <div class="form-group address">
                    <label for="address">地址</label>
                    <input
                      {...register("address", { required: "* 此欄位為必填" })}
                      type="text"
                      id="address"
                      placeholder="請輸入詳細地址"
                    />
                    {errors.address && (
                      <p style={errMsg}>{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-right">
            <button class="confirm-payment" type="submit">
              確認付款
            </button>
            <button class="back-btn">返回上一步</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckOutPage
