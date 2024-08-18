import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCartItemsData } from "../../hooks/useCartItem"
import { SERVER_URL } from "../../utils/helpers"
import { useMemberInfo } from "../../hooks/useMemberInfo"
import { toast } from "react-toastify"

const CheckOutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe")
  const { data: memberData, isLoading: memberDataLoading } = useMemberInfo()
  const { data: cartData, isLoading: cartDataLoading } = useCartItemsData()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      customer: "",
      phone_number: "",
      address: "",
    },
  })

  useEffect(() => {
    if (memberData) {
      reset({
        customer: memberData.name || "",
        phone_number: memberData.phone || "",
        address: memberData.address || "",
      })
    }
  }, [memberData, reset])

  const handleCreatePayment = async (formData) => {
    switch (paymentMethod) {
      case "stripe":
        await payWithStripe(formData)
        break

      case "linePay":
        localStorage.setItem("order_info", JSON.stringify(formData))
        await payWithLinePay(formData)
        break

      case "ecPay":
        localStorage.setItem("order_info", JSON.stringify(formData))
        await payWithEcPay(formData)

        break
      default:
        console.error("未知的支付方式")
    }
  }
  console.log(cartData)
  const payWithStripe = async (formData) => {
    try {
      const res = await axios.post(
        `${SERVER_URL}/cart/create-checkout-session`,
        {
          data: cartData,
          orderInfo: formData,
        }
      )
      window.location.href = res.data.url
    } catch (error) {
      console.error("支付創建失敗:", error)
    }
  }

  const payWithLinePay = async (formData) => {
    try {
      const res = await axios.post(
        `${SERVER_URL}/cart/line-test`,
        {
          data: cartData,
          orderInfo: formData,
        },
        {
          withCredentials: true,
        }
      )

      console.log(res.data.returnCode)

      if (res.data.returnCode === "1172")
        toast.error(
          "您的訂單已付款，可能是之前版本問題導致，請重新註冊新帳號在測試看看！或是將資料庫中customer_order的status改為Paid"
        )
      const paymentUrl = res.data.info.paymentUrl?.web

      window.location.href = paymentUrl
    } catch (error) {
      console.error("支付創建失敗:", error)
    }
  }

  const payWithEcPay = async (formData) => {
    const { total_amount: amount } = cartData

    try {
      const response = await axios.post(`${SERVER_URL}/cart/ecpay`, {
        amount,
        itemName: formData,
      })

      if (response.data && response.data.formData) {
        submitForm(response.data.formData)
      } else {
        throw new Error("無效的回應數據")
      }
    } catch (err) {
      console.log(err)
    } finally {
      console.log(123)
    }
  }

  const submitForm = (formData) => {
    const form = document.createElement("form")
    form.method = "POST"
    form.action = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5"

    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = key
      input.value = value
      form.appendChild(input)
    })

    document.body.appendChild(form)
    form.submit()
  }

  if (memberDataLoading || cartDataLoading) {
    return <p>正在加載資料...</p>
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(handleCreatePayment)}>
        <div className="checkout-left">
          <div className="customer dropdown-section">
            <div className="title">
              <h2>訂購人資訊</h2>
            </div>
            <div className="dropdown-content show">
              <div className="customer-info">
                {["customer", "phone_number", "address"].map((field) => (
                  <div
                    key={field}
                    className={`form-group ${
                      field === "address" ? "address" : ""
                    }`}
                  >
                    <label htmlFor={field}>
                      {field === "customer"
                        ? "姓名"
                        : field === "phone_number"
                        ? "電話"
                        : "地址"}
                    </label>
                    <input
                      {...register(field, { required: "* 此欄位為必填" })}
                      type={field === "phone_number" ? "tel" : "text"}
                      id={field}
                      placeholder={
                        field === "customer"
                          ? "王小明"
                          : field === "phone_number"
                          ? "0912 345 678"
                          : "請輸入詳細地址"
                      }
                    />
                    {errors[field] && (
                      <p className="error-message">{errors[field].message}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <button
            type="submit"
            className={paymentMethod === "linePay" ? "active" : ""}
            onClick={() => {
              setPaymentMethod("ecPay")
            }}
          >
            使用綠界科技付款
          </button>

          <button
            type="submit"
            className={paymentMethod === "linePay" ? "active" : ""}
            onClick={() => {
              setPaymentMethod("linePay")
            }}
          >
            <img src="/lineLogo/line.png" alt="" />
          </button>
          <button className="confirm-payment" type="submit">
            確認付款
          </button>
          <button
            className="back-btn"
            type="button"
            onClick={() => navigate(-1)}
          >
            返回上一步
          </button>
        </div>
      </form>
    </div>
  )
}

export default CheckOutPage
