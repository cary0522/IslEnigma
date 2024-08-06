//引入useState hook
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
//在組件內部使用 useState hook 來定義 activeIndex 狀態和 setActiveIndex 函數
const RoomItem = ({ room, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 輔助函數來處理icon名稱
  const getIconClass = (iconName) => {
    // 移除 'fa-' 前綴（如果存在）
    const cleanName = iconName.replace(/^fa-/, "");
    // 如果包含 'fa-solid'，使用 'fas'，否則使用 'fa'
    const prefix = iconName.includes("fa-solid") ? "fas" : "fa";
    return `${prefix} fa-${cleanName}`;
  };

  // 處理縮略圖點擊
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  // 輔助函數來決定背景圖類名
  const getBackgroundImageClass = (roomType) => {
    switch (roomType) {
      case "Grass Tempo":
        return "backgroundImageGrass";
      case "Island Trails":
        return "backgroundImageIsland";
      case "Ocean Serenity":
        return "backgroundImageOcean";
      case "Starry Dome":
        return "backgroundImageStarry";
      default:
        return "";
    }
  };

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
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
