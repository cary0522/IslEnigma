import Avatar from "./Avatar"
import SideNav from "./SideNav"

const Sidebar = ({ activeButton, handleButtonClick }) => {
  return (
    <div className="sidebar">
      <Avatar />

      <SideNav
        activeButton={activeButton}
        handleButtonClick={handleButtonClick}
      />
    </div>
  )
}

export default Sidebar
