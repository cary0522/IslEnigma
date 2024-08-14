import { useLogout } from "../../hooks/useLogout"
const SideNav = ({ activeButton, handleButtonClick }) => {
  const { mutate: logout } = useLogout()

  const handleLogout = () => {
    logout()
  }
  return (
    <div className="button-group">
      <button
        className={`btn-custom ${activeButton === "order" ? "active" : ""}`}
        id="order"
        data-target="orderContent"
        onClick={() => handleButtonClick("order")}
      >
        訂單
      </button>
      <button
        className={`btn-custom ${activeButton === "payMethod" ? "active" : ""}`}
        id="payMethod"
        data-target="payMethodContent"
        onClick={() => handleButtonClick("payMethod")}
      >
        付款資訊
      </button>
      <button
        className={`btn-custom ${
          activeButton === "accountInfo" ? "active" : ""
        }`}
        id="accountInfo"
        data-target="accountInfoContent"
        onClick={() => handleButtonClick("accountInfo")}
      >
        帳號資訊
      </button>
      <button
        className={`btn-custom ${
          activeButton === "changePassword" ? "active" : ""
        }`}
        id="changePassword"
        data-target="changePasswordContent"
        onClick={() => handleButtonClick("changePassword")}
      >
        更改密碼
      </button>
      <button
        className="btn-custom"
        id="logout"
        data-target="logoutContent"
        onClick={handleLogout}
      >
        登出
      </button>
    </div>
  )
}

export default SideNav
