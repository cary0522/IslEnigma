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
                                        <img src="/aboutUs/environment2.png" width="30px"/>
                                        環境
                                    </a>
                                </li>
                                <li className={activeTab === "social" ? "active" : ""}>
                                    <a href="javascript:;" onClick={() => handleTabClick("social")}>
                                        <img src="/aboutUs/social2.png" width="30px"/>
                                        社會
                                    </a>
                                </li>
                                <li className={activeTab === "company" ? "active" : ""}>
                                    <a href="javascript:;" onClick={() => handleTabClick("company")}>
                                        <img src="/aboutUs/company2.png" width="30px"/>
                                        公司
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
                                <p>
                                在我們的遊樂園，我們致力於打造一個可持續發展的樂園體驗。我們通過創新技術和最佳實踐來減少環境影響，從節能照明系統到智能化水資源管理，我們的每一步都在向環保邁進。我們還採用了可再生能源，如太陽能，來減少碳足跡，並推動遊樂園向更綠色、更環保的方向發展。
                                </p>
                            </div>
                            <div className="rightBox">
                                <img src="/aboutUs/esg1.png"/>
                            </div>
                        </div>
                        <div id="social" className="esgTexts" style={{ display: activeTab === "social" ? "flex" : "none" }}>
                            <div className="leftBox">
                                <p>社會責任</p>
                                <p>
                                我們相信，遊樂園不僅是娛樂的場所，也是社區的重要一部分。我們積極參與社區活動，支持當地的教育、健康和文化項目。我們的員工是我們的寶貴資產，我們為他們提供豐富的職業發展機會，並致力於營造一個多元、包容的工作環境。每位來賓都能在我們的遊樂園中感受到關懷與尊重。
                                </p>
                            </div>
                            <div className="rightBox">
                                <img src="/aboutUs/esg2.png"/>
                            </div>
                        </div>
                        <div id="company" className="esgTexts" style={{ display: activeTab === "company" ? "flex" : "none" }}>
                            <div className="leftBox">
                                <p>公司治理</p>
                                <p>
                                    我們致力於維護最高的治理標準，確保透明度和問責制。我們擁有獨立的董事會，實施嚴格的風險管理和內部控制機制，以保護所有股東和利益相關者的權益。我們承諾以誠信為基礎，對所有業務行為進行嚴格的監控和管理，確保每一個環節都符合最高的道德標準。
                                </p>
                            </div>
                            <div className="rightBox">
                                <img src="/aboutUs/esg3.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ESG;
