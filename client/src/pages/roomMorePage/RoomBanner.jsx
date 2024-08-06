import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RainEffect from './RainEffect';

const RoomBanner = () => {
    const [isRaining, setIsRaining] = useState(false);

    useEffect(() => {
        const randomWeatherChange = () => {
            const shouldRain = Math.random() < 0.5;
            setIsRaining(shouldRain);
        };

        // 初始天氣
        randomWeatherChange();

        // 每10秒改變一次天氣
        const interval = setInterval(randomWeatherChange, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="roomBanner" className={` ${isRaining ? 'raining' : ''}`}>
            <RainEffect isRaining={isRaining} />
            <div className="bannerContent">
                <div className="bannerLogo">
                    <img src="./public/00logo/LogoType_Light_2.png" alt="神秘樂園logo" />
                </div>
                <div className="bannerTextGroup">
                    <span className="bannerLine"></span>
                    <h1 className="bannerTitle">房型介紹</h1>
                    <span className="bannerLine"></span>
                </div>
                <p className="bannerTagline">
                    在 ISLENIGMA，每一刻都是驚喜，每一夜都是冒險。<br />
                    準備好揭開島嶼的神秘面紗，開啟您的奇幻之旅了嗎？
                </p>
            </div>
            <div className="footprints">
                {[...Array(4)].map((_, index) => (
                    <React.Fragment key={index}>
                        <span className={`footprint footprint-left`} style={{ top: `${index * 25}%` }}>👣</span>
                        <span className={`footprint footprint-right`} style={{ top: `${index * 25}%` }}>👣</span>
                    </React.Fragment>
                ))}
            </div>
            <div className="leftButtons">
                <div className="containerMain">
                    {['草原步調', '海洋之眼', '島嶼蹤跡', '夢幻星空'].map((text, index) => (
                        <div key={index} className={`drop drop${['One', 'Two', 'Three', 'Four'][index]}`}>
                            <div className="content">
                                <Link to={`#${text}`} className="h2">{text}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomBanner;