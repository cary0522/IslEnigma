import { act, useEffect, useState } from "react"

const RoomCard = ({ data, index }) => {
  const { roomType, images, title, desc, price } = data
  const [activeIndex, setActiveIndex] = useState(0)
  const handlePrev = () => {
    setActiveIndex((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }
  const handleNext = () => {
    setActiveIndex((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }

  return (
    <div class="roomCard" data-room-type="2">
      <div class="roomNumber">0{index + 1}</div>
      <div class="roomImage">
        <div class="roomCarousel">
          {images.map((img, i) => {
            return (
              <img
                src={img}
                key={i}
                className={i === activeIndex ? "active" : ""}
              />
            )
          })}
          <div className="carouselNav">
            <button className="prev" onClick={handlePrev}>
              &lt;
            </button>
            <button className="next" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>

        <h3>{roomType}</h3>
        <div className="imageIndicators">
          {images.map((_, i) => {
            return (
              <span
                className={activeIndex === i ? "active" : ""}
                key={i}
              ></span>
            )
          })}
        </div>
      </div>
      <div class="roomInfo">
        <h4>{title}</h4>
        <div class="decorativeLine"></div>
        <p>{desc}</p>
        <p>NT${price}/晚</p>
        <button class="moreButton">
          <a href="../room_more.html">查看更多+</a>
        </button>
      </div>
    </div>
  )
}

export default RoomCard
