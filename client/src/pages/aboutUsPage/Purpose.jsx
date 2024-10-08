import React from "react";

const Purpose = () => {
	return (
            <div className="wrap">
                <div className="purposeBox">
                    <div className="engTitleBox">
                        <p>Our Purpose</p>
                    </div>
                    <div className="titleBox">
                        <p>樂園理念</p>
                    </div>
                    <div className="ppItemBox">
                        <div className="items">
                            <div className="word">
                                <p>追求快樂，樂無止盡</p>
                            </div>
                            <span className="dot"></span>
                            <div className="imgBox">
                                <img src="/aboutUs/purpose1.png"/>
                            </div>
                        </div>
                        <div className="items">
                            <div className="word">
                                <p>迷失樂園，探索奇幻</p>
                            </div>
                            <span className="dot"></span>
                            <div className="imgBox">
                                <img src="/aboutUs/purpose2.png"/>
                            </div>
                        </div>
                        <div className="items">
                            <div className="word">
                                <p>啟程冒險，尋找精彩</p>
                            </div>
                            <span className="dot"></span>
                            <div className="imgBox">
                                <img src="/aboutUs/purpose3.png"/>
                            </div>
                        </div>
                        <div className="items">
                            <a href="#esgArea" className="moreDot">
                                <img src="/aboutUs/plus.png"/>
                            </a>
                            <div className="textBox">
                                <p>DISCOVER MORE</p>
                                <p>謎樣 不只有提供快樂</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	);
}
export default Purpose;
