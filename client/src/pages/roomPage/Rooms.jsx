import Banner from "./Banner"
import ConfPopup from "./ConfPopup"
import Feature from "./Feature"
import "./Rooms.css"
import RoomTypes from "./RoomTypes"
import Slogan from "./Slogan"
import Rules from "./Rules"
import FourMealsPlan from "./Meals"
import FeatureModal from "./FeatureModal"

const Rooms = () => {
  return (
    <>
      <Banner />
      {/* 跳出框1 */}
      <ConfPopup />
      {/* 跳出框2 */}
      <Feature />
      {/* 特色 */}
      {/* 房型 */}
      <RoomTypes />
      {/* 一泊四食 */}
      <FourMealsPlan />
      {/* 標語 */}
      <Slogan />
      {/* 訂房須知 */}
      <Rules />
    </>
  )
}

export default Rooms
