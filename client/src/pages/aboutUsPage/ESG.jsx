import React, { useState } from "react";

const ESG = () => {
    const [activeTab, setActiveTab] = useState("environment");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="wrap">
            <div className="esgBox">
                <div className="upperBox">
                    <div className="titleBox">
                        <p>企業永續發展</p>
                        <div className="esgClick">
                            <ul className="esgTitle">
                                <li className={activeTab === "environment" ? "active" : ""}>
                                    <a href="javascript:;" onClick={() => handleTabClick("environment")}>
                                        <img src="/aboutUs/environment.png" width="30px"/>
                                        環境永續
                                    </a>
                                </li>
                                <li className={activeTab === "social" ? "active" : ""}>
                                    <a href="javascript:;" onClick={() => handleTabClick("social")}>
                                        <img src="/aboutUs/social.png" width="30px"/>
                                        社會責任
                                    </a>
                                </li>
                                <li className={activeTab === "company" ? "active" : ""}>
                                    <a href="javascript:;" onClick={() => handleTabClick("company")}>
                                        <img src="/aboutUs/company.png" width="30px"/>
                                        公司治理
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="belowBox">
                    <div className="esgTextBox">
                        <div id="environment" className="esgTexts" style={{ display: activeTab === "environment" ? "flex" : "none" }}>
                            <div className="leftBox">
                                <p>環境永續</p>
                                <p>我們的目標是通過創新和最佳實踐來減少碳足跡，提高能源效率，並最大限度地減少廢棄物產生。我們已實施了多項節能措施，包括在我們的辦公場所安裝節能照明系統和太陽能發電設備。
                                </p>
                            </div>
                            <div className="rightBox">
                                <img src="/aboutUs/origin1.png"/>
                            </div>
                        </div>
                        <div id="social" className="esgTexts" style={{ display: activeTab === "social" ? "flex" : "none" }}>
                            <div className="leftBox">
                                <p>社會責任</p>
                                <p>我們積極參與社區服務，支持教育、健康和文化活動，並致力於促進社會公平與包容。我們的員工是我們最重要的資產，因此我們提供多樣化的職業發展機會，並致力於創造安全、包容的工作環境。
                                </p>
                            </div>
                            <div className="rightBox">
                                <img src="/aboutUs/origin1.png"/>
                            </div>
                        </div>
                        <div id="company" className="esgTexts" style={{ display: activeTab === "company" ? "flex" : "none" }}>
                            <div className="leftBox">
                                <p>公司治理</p>
                                <p>我們的治理架構包括獨立的董事會、嚴格的風險管理政策和內部控制機制，以保障股東和利益相關者的利益。我們承諾維護最高的誠信標準，並對所有商業行為進行嚴格的監督。</p>
                            </div>
                            <div className="rightBox">
                                <img src="/aboutUs/origin1.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ESG;
