import React, { useState, useEffect, useRef } from "react";
import "./infoBanner.scss";

const Banner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("選擇單元");
  const dropdownRef = useRef(null);

  // 下拉選單選項
  const dropdownOptions = [
    { text: "最新活動", href: "#mysteryNews", value: "latestActivity" },
    {
      text: "樂園須知",
      href: "/infoEventPage/infoInfoPage",
      value: "parkInfo",
    },
    {
      text: "常見問題",
      href: "/infoEvent/infoFAQPage",
      value: "frequentlyAskedQuestions",
    },
    { text: "活動時間", href: "#todayActivities", value: "timeTable" },
    { text: "注意事項", href: "#activityNotes", value: "parkSuggestions" },
  ];

  useEffect(() => {
    // 處理視窗大小變化，決定是否顯示下拉選單
    const handleResize = () => {
      if (dropdownRef.current) {
        if (window.innerWidth <= 719) {
          dropdownRef.current.style.display = "block";
        } else {
          dropdownRef.current.style.display = "none";
          setIsDropdownOpen(false); // 關閉下拉選單
        }
      }
    };

    // 初始調用和監聽視窗大小變化
    handleResize();
    window.addEventListener("resize", handleResize);

    // 清理函數
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // 點擊下拉選單外部時關閉選單
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // 添加點擊事件監聽器
    document.addEventListener("mousedown", handleClickOutside);

    // 清理函數
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 切換下拉選單的開啟狀態
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // 處理選項點擊事件
  const handleOptionClick = (e, option) => {
    e.preventDefault();
    setSelectedOption(option.text);
    setIsDropdownOpen(false);
    // 延遲跳轉，讓使用者看到選擇結果
    setTimeout(() => {
      window.location.href = option.href;
    }, 250);
  };
  return (
    <div className="bannerWrapper">
      <div className="bannerContent">
        <div className="bannerLogo">
          <img
            src="../../public/00logo/LogoType_Light_2.png"
            alt="神秘樂園logo"
          />
        </div>
        <div className="bannerTextGroup">
          <div className="bannerLine"></div>
          <h1 className="bannerText">最新活動</h1>
          <div className="bannerLine"></div>
        </div>
        <p className="bannerTagline">islEnigma Information</p>
        <div className="bannerMenu">
          {/* 移動端下拉選單 */}
          <div id="mobileDropdown" className="customDropdown" ref={dropdownRef}>
            <div className="dropdownSelected" onClick={toggleDropdown}>
              {selectedOption}
              <i className="bi bi-chevron-down"></i>
            </div>
            {isDropdownOpen && (
              <ul className="dropdownOptions">
                {dropdownOptions.map((option, index) => (
                  <li key={index}>
                    <a
                      href={option.href}
                      className="dropdownOption"
                      data-value={option.value}
                      onClick={(e) => handleOptionClick(e, option)}
                    >
                      {option.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="bannerItemGroup">
            <a href="#mysteryNews" className="menuItem">
              <span className="menuNumber">01</span>
              <div className="menuIcon">
                <img src="../../public/00myIcon/event.png" alt="最新活動圖示" />
              </div>
              <p>最新活動</p>
            </a>
            <a href="/infoEventPage/infoInfoPage" className="menuItem">
              <span className="menuNumber">02</span>
              <div className="menuIcon">
                <img
                  src="../../public/00myIcon/park-info2.png"
                  alt="樂園須知圖示"
                />
              </div>
              <p>樂園須知</p>
            </a>
            <a href="/infoEvent/infoFAQPage" className="menuItem">
              <span className="menuNumber">03</span>
              <div className="menuIcon">
                <img src="../../public/00myIcon/faq.png" alt="常見問題圖示" />
              </div>
              <p>常見問題</p>
            </a>
            <a href="#todayActivities" className="menuItem">
              <span className="menuNumber">04</span>
              <div className="menuIcon">
                <img src="../../public/00myIcon/time.png" alt="時間表圖示" />
              </div>
              <p>活動時間</p>
            </a>
            <a href="#activityNotes" className="menuItem">
              <span className="menuNumber">05</span>
              <div className="menuIcon">
                <img
                  src="../../public/00myIcon/advice.png"
                  alt="遊園建議圖示"
                />
              </div>
              <p>注意事項</p>
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="outBall outBall1"></div>
      <div className="outBall outBall2"></div>
      <p className="textMemo">這裡紀錄謎樣樂園的大小事。</p>
    </div>
  );
};

export default Banner;
