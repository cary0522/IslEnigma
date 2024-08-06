import React, { useState, useEffect } from 'react';
// components
import RoomBanner from './RoomBanner';
import RoomList from './RoomList';
import RoomSloganCarousel from './RoomSloganCarousel';
import RoomFacilities from './RoomFacilities';

//css
// 引入 Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// 引入 Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// 引入 Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./roomMore.scss";



const RoomMorePage = () => {
    const [isRaining, setIsRaining] = useState(false);

    useEffect(() => {
        const randomWeatherChange = () => {
            const shouldRain = Math.random() < 0.5;
            setIsRaining(shouldRain);
        };

        // 初始化天氣效果
        randomWeatherChange();
        // 每10秒改變一次天氣
        const intervalId = setInterval(randomWeatherChange, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="room-more-page">
            <RoomBanner isRaining={isRaining} />
            <RoomList />
            <RoomSloganCarousel />
            <RoomFacilities />
        </div>
    );
};

export default RoomMorePage;