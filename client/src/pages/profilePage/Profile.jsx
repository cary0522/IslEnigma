import "./Profile.scss"
import { useState } from "react"
import Order from "./Order"
import PayMethod from "./PayMethod"
import MemberDetail from "./MemberDetail"
import ChangePassword from "./ChangePassword"
import Sidebar from "./Sidebar"
const Profile = () => {
  const [activeButton, setActiveButton] = useState("order")
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId)
  }

  const renderContent = () => {
    switch (activeButton) {
      case "order":
        return <Order />

      case "payMethod":
        return <PayMethod />

      case "accountInfo":
        return <MemberDetail />

      case "changePassword":
        return <ChangePassword />

      default:
        return null
    }
  }

  return (
    <div className="container">
      <div className="layout">
        <Sidebar
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <div id="content-group">{renderContent()}</div>
      </div>
    </div>
  )
}

export default Profile
