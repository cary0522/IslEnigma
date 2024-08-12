import LoginImg from "/00logo/favicon.ico"
import "./Register.css"
import { useForm } from "react-hook-form"
import { useRegister } from "../../hooks/useRegister"
import { Line } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Register = () => {
  const { mutate, isLoading, isError, error } = useRegister()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password")
  const confirmPassword = watch("confirm_password")
  const phoneRegex = /^09\d{8}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const onSubmit = (memberData) => {
    mutate(memberData)
  }
  return (
    <div className="index">
      <div className="register-container">
        <div className="register-image">
          <img src={LoginImg} alt="Login" />
        </div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="register-title">創建新用戶</h2>
          <div className="register-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName-input">姓氏</label>
                <input
                  {...register("first_name", {
                    required: "* 此欄位為必填",
                  })}
                  id="firstName-input"
                  className={errors.first_name ? "inputError" : "inputBlock"}
                />
                {errors.first_name && (
                  <div className="inputError-message">
                    {errors.first_name.message}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName-input">名字</label>
                <input
                  type="text"
                  {...register("last_name", {
                    required: "* 此欄位為必填",
                  })}
                  id="lastName-input"
                  className={errors.last_name ? "inputError" : "inputBlock"}
                />
                {errors.last_name && (
                  <div className="inputError-message">
                    {errors.last_name.message}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address-input">居住地</label>
              <input
                {...register("address", { required: "* 此欄位為必填" })}
                id="address-input"
                className={errors.address ? "inputError" : "inputBlock"}
              />
              {errors.address && (
                <div className="inputError-message">
                  {errors.address.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone-input">電話號碼</label>
              <input
                {...register("phone_number", {
                  required: "* 此欄位為必填",
                  pattern: {
                    value: phoneRegex,
                    message: "* 手機號碼格式錯誤，請輸入以 09 開頭的 10 位數字",
                  },
                })}
                id="phone-input"
                className={errors.phone_number ? "inputError" : "inputBlock"}
              />
              {errors.phone_number && (
                <div className="inputError-message">
                  {errors.phone_number.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="birthDate-input">出生日期</label>
              <input
                {...register("birth_date", { required: "* 此欄位為必填" })}
                type="date"
                id="birthDate-input"
                className={errors.birth_date ? "inputError" : "inputBlock"}
              />
              {errors.birth_date && (
                <div className="inputError-message">
                  {errors.birth_date.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email-input">電子郵件(帳號)</label>
              <input
                {...register("account", {
                  required: "* 此欄位為必填",
                  pattern: {
                    value: emailRegex,
                    message: "請輸入正確的電子信箱格式",
                  },
                })}
                type="email"
                id="email-input"
                className={errors.account ? "inputError" : "inputBlock"}
              />
              {errors.account && (
                <div className="inputError-message">
                  {errors.account.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password-input">密碼</label>
              <input
                {...register("password", {
                  required: "* 此欄位為必填",
                  minLength: {
                    value: 6,
                    message: "* 密碼長度必須大於6位數",
                  },
                })}
                type="password"
                id="password-input"
                className={errors.password ? "inputError" : "inputBlock"}
              />
              {errors.password && (
                <div className="inputError-message">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword-input">確認密碼</label>
              <input
                {...register("confirm_password", {
                  required: "* 此欄位為必填",
                  validate: (value) =>
                    value === password || "* 密碼與確認密碼不匹配",
                })}
                type="password"
                id="confirmPassword-input"
                className={
                  errors.confirm_password ? "inputError" : "inputBlock"
                }
              />
              {errors.confirm_password && (
                <div className="inputError-message">
                  {errors.confirm_password.message}
                </div>
              )}
            </div>
            <div className="checkbox">
              <div>
                <input type="checkbox" id="agreement-checkbox" required />
                <label htmlFor="termsAgreement">我同意接受使用者條款</label>
              </div>
            </div>
            <div className="form-actions">
              <button className="submit-btn register-button">創建新帳號</button>
              <p className="login-link">
                已有帳號？
                <Link className="login-href" to="/login">
                  立即登入
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
