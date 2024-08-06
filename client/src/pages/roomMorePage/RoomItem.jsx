// RoomItem.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const RoomItem = ({ room, index }) => {
    return (
        <div id={room.roomTypeEng.toLowerCase().replace(/\s+/g, '')} className={`roomItem ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="roomCarousel">
                <Carousel>
                    {room.images.map((img, imgIndex) => (
                        <Carousel.Item key={imgIndex}>
                            <img src={img} alt={`房間圖片 ${imgIndex + 1}`} className="d-block w-100" />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="thumbnails">
                    {room.images.slice(1).map((img, i) => (
                        <img key={i} src={img} alt={`縮略圖 ${i + 2}`} onClick={() => {/* 實現縮略圖點擊功能 */ }} />
                    ))}
                </div>
            </div>
            <div className="roomInfo">
                <h2 className="roomTypeEng">{room.roomTypeEng}</h2>
                <h3 className="roomType">{room.roomType}</h3>
                <p className="roomMoreSlogan">{room.roomSlogan}</p>
                <p className="roomDesc">{room.roomDesc}</p>
                <div className="roomTags">
                    {room.roomTags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="roomDetails">
                    {room.roomDetails.map((detail, i) => (
                        <div key={i} className="detailItem">
                            <i className={`fas fa-${detail.icon}`}></i>
                            <span>{detail.text}</span>
                            <span>{detail.subtext}</span>
                        </div>
                    ))}
                </div>
                <div className="roomActions">
                    <p className="roomMemo">{room.roomMemo}</p>
                    <a href="#roomFacilities" className="checkFacilities">查看設備</a>
                </div>
            </div>
        </div>
    );
};

export default RoomItem;