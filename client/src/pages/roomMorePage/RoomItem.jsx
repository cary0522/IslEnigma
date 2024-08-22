import DateRangePicker from "@wojtekmaj/react-daterange-picker"
import React, { useEffect, useMemo, useState } from "react"
import { Carousel } from "react-bootstrap"
import "react-calendar/dist/Calendar.css"
import { useQueryRoomsDate } from "../../hooks/useSearchBookedDate"
import { generateDateRange } from "../../utils/helpers"

const RoomItem = ({ room, index }) => {
  const {
    mutate: searchRoomsDate,
    isLoading,
    data: bookedDatesData,
  } = useQueryRoomsDate()

  const [bookedDate, setBookedDate] = useState([])
  const [selectedDates, setSelectedDates] = useState([null, null])
  const today = useMemo(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date
  }, [])

  const disableBookedDates = ({ date }) => {
    return bookedDate.some(
      (bookedDate) =>
        bookedDate.getFullYear() === date.getFullYear() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getDate() === date.getDate()
    )
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const getIconClass = (iconName) => {
    const cleanName = iconName.replace(/^fa-/, "")
    const prefix = iconName.includes("fa-solid") ? "fas" : "fa"
    return `${prefix} fa-${cleanName}`
  }

  const handleThumbnailClick = (index) => {
    setActiveIndex(index)
  }

  const getBackgroundImageClass = (roomType) => {
    switch (roomType) {
      case "Grass Tempo":
        return "backgroundImageGrass"
      case "Island Trails":
        return "backgroundImageIsland"
      case "Ocean Serenity":
        return "backgroundImageOcean"
      case "Starry Dome":
        return "backgroundImageStarry"
      default:
        return ""
    }
  }

  const handleOpenCalendar = (index) => {
    searchRoomsDate(index)
  }

  const handleDateChange = (dates) => {
    setSelectedDates(dates)
    // Optional: Save dates immediately or trigger an action here
    console.log("Selected Dates:", dates)
  }

  useEffect(() => {
    if (bookedDatesData) {
      const allBookedDates = bookedDatesData.flatMap(
        ({ check_in_date, check_out_date }) =>
          generateDateRange(
            new Date(check_in_date),
            new Date(check_out_date)
          ).map((date) => new Date(date))
      )
      setBookedDate(allBookedDates)
    }
  }, [bookedDatesData])

  if (isLoading) return <div>Loading..</div>

  return (
    <div
      id={room.roomTypeEng.toLowerCase().replace(/\s+/g, "")}
      className={`roomItem ${index % 2 === 0 ? "even" : "odd"}`}
    >
      <div className="roomCarousel">
        <Carousel activeIndex={activeIndex} onSelect={setActiveIndex}>
          {room.images.map((img, imgIndex) => (
            <Carousel.Item key={imgIndex}>
              <img
                src={img}
                alt={`房間圖片 ${imgIndex + 1}`}
                className="d-block w-100"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="thumbnails">
          {room.images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`縮略圖 ${i + 2}`}
              onClick={() => handleThumbnailClick(i + 1)}
            />
          ))}
        </div>
      </div>
      <div className="roomInfo">
        <div className={getBackgroundImageClass(room.roomTypeEng)}></div>
        <h2 className="roomTypeEng">{room.roomTypeEng}</h2>
        <h3 className="roomType">{room.roomType}</h3>
        <p className="roomMoreSlogan">{room.roomSlogan}</p>
        <p className="roomDesc">{room.roomDesc}</p>
        <div className="roomTags">
          {room.roomTags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="roomDetails">
          {room.roomDetails.map((detail, i) => (
            <div key={i} className="detailItem">
              <i className={getIconClass(detail.icon)}></i>
              <span>{detail.text}</span>
              <span>{detail.subtext}</span>
            </div>
          ))}
        </div>
        <div className="roomActions">
          <p className="roomMemo">{room.roomMemo}</p>
          <a href="#roomFacilities" className="checkFacilities">
            查看設備
          </a>
          <a href="#roomFacilities" className="checkFacilities">
            立即預約
          </a>
          <DateRangePicker
            onChange={handleDateChange}
            value={selectedDates}
            clearIcon={false}
            closeCalendar={false}
            disableCalendar={false}
            shouldCloseCalendar={({ reason }) => reason !== "outsideAction"}
            locale="en-us"
            calendarProps={{
              tileDisabled: disableBookedDates,
            }}
            onCalendarOpen={() => {
              handleOpenCalendar(index)
            }}
            minDate={today}
          />
        </div>
      </div>
    </div>
  )
}

export default RoomItem
