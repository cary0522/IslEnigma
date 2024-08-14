import React, { useState } from 'react';

const AboutUs = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setFlippedIndex(index);
    };

    const handleMouseLeave = () => {
        setFlippedIndex(null);
    };

    return (
        <div className="wrap">
            <div className="leftBox">
                <div className="cardList">
                    <div className="cardOne">
                        <div
                            className={`aboutItem ${flippedIndex === 0 ? 'flip' : ''}`}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="front">
                                <img src="/homepage/people.png"/>
                            </div>
                            <div className="back">
                                <p>卓越顧客服務</p>
                            </div>
                        </div>
                        <div
                            className={`aboutItem ${flippedIndex === 1 ? 'flip' : ''}`}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="front">
                                <img src="/homepage/amusement.png"/>
                            </div>
                            <div className="back">
                                <p>創新遊樂體驗</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardTwo">
                        <div
                            className={`aboutItem ${flippedIndex === 2 ? 'flip' : ''}`}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="front">
                                <img src="/homepage/running.png"/>
                            </div>
                            <div className="back">
                                <p>阻隔繁雜世界</p>
                            </div>
                        </div>
                        <div
                            className={`aboutItem ${flippedIndex === 3 ? 'flip' : ''}`}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="front">
                                <img src="/homepage/cycling.png"/>
                            </div>
                            <div className="back">
                                <p>環保永續發展</p>
                            </div>
                        </div>
                    </div>
                    <div className="btnMore">
                        <a href="/about-us" target="_blank">
                            查看更多{`>`}
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightBox">
                <p className="title">關於我們</p>
                <div className="imgBox">
                    <img src="homepage/aboutUsImg.png"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
