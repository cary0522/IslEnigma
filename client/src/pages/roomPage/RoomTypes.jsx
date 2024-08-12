import { roomsData } from "./data/roomsData"
import RoomCard from "./RoomCard"

const RoomTypes = () => {
  return (
    <section id="roomTypes">
      <div class="typeHeader">
        <h2 class="typeTitle">
          房型 | <span>Choose Your Favorite Glamping Tent</span>
        </h2>
        <div class="decoLine"></div>
        <p class="typeSubtitle">謎樣露營，提供最好的休息露營體驗</p>
      </div>
      <div class="roomGrid">
        {roomsData.map((data, index) => (
          <RoomCard data={data} index={index} />
        ))}
      </div>
    </section>
  )
}

export default RoomTypes
