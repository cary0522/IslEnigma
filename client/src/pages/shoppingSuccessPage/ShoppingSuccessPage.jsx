import { Link } from "react-router-dom"
import "./ShoppingSuccessPage.css"
const ShoppingSuccessPage = () => {
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
