import React, { useState, useEffect } from "react";
//css
// 引入 Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// 引入 Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// 引入 Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./infoEvent.scss";

const MysteryNews = () => {
  // 使用 useState 鉤子來管理組件的狀態
  // newsItems 存儲主要新聞項目
  const [newsItems, setNewsItems] = useState([]);
  // currentIndex 追蹤當前顯示的新聞索引
  const [currentIndex, setCurrentIndex] = useState(0);
  // scrollNews 存儲滾動新聞項目
  const [scrollNews, setScrollNews] = useState([]);

  // useEffect 鉤子用於執行副作用，例如數據獲取
  useEffect(() => {
    // 模擬從 API 獲取主要新聞數據
    // 在實際應用中，這裡應該是一個 API 調用
    const fetchedNewsItems = [
      {
        mainImage: "../../public/infoEventPage/07poster_banner/banner (17).png",
        title: "「幻光森林」全新夜間光影秀",
        date: " 2024 / 10 / 1 - 10 / 31 熱門!",
        content:
          "準備迎接「幻光森林」的全新夜間光影秀！我們結合最先進的投影技術和音樂，為您呈現一場前所未有的視聽盛宴。在森林深處，光影交錯間，您將踏入一個充滿魔力的奇幻世界。每晚8點準時開演，持續90分鐘，讓您的感官體驗提升到新的高度。",
        subImage: "../../public/infoEventPage/03rooms/room (47).png",
        subTitle: "露營區推出「星空帳篷」主題住宿",
        subDate: " 2024 / 7 / 1 起 新推出!",
      },
      {
        mainImage: "../../public/infoEventPage/03rooms/room (47).png",
        title: "露營區推出「星空帳篷」主題住宿",
        date: "2024 / 7 / 1 起 新推出!",
        content:
          "想要在星空下入眠嗎？「高級露營區」推出全新「星空帳篷」主題住宿。特製的透明帳篷頂部讓您躺在床上就能欣賞璀璨星空。每個帳篷都配備了望遠鏡和星圖，讓您輕鬆進行星空觀測。白天享受海島風光，夜晚沐浴星光，體驗難忘的露營之旅。",
        subImage: "../../public/infoEventPage/07poster_banner/banner (10).webp",
        subTitle: "「海底隧道」引進稀有深海生物展",
        subDate: "2025 / 2 /1 - 4 / 30",
      },
      {
        mainImage:
          "../../public/infoEventPage/07poster_banner/banner (10).webp",
        title: "「海底隧道」引進稀有深海生物展",
        date: "2025 / 2 /1 - 4 / 30 熱門!",
        content:
          "「海底隧道」即將迎來一批神秘的客人！我們與國際海洋研究所合作，引進了多種罕見的深海生物，包括發光的深海魚類和奇特的無脊椎動物。這些生物平時生活在數千米深的海底，現在您有機會近距離觀察它們的奇妙生態。",
        subImage: "../../public/infoEventPage/07poster_banner/banner (17).png",
        subTitle: "「幻光森林」全新夜間光影秀",
        subDate: "2024 / 10 / 1 -  10 / 31",
      },
    ];
    setNewsItems(fetchedNewsItems);

    // 模擬從 API 獲取滾動新聞數據
    const fetchedScrollNews = [
      {
        title: "「迷幻酒吧」新品上市：「幻境雞尾酒」系列",
        date: "2024 / 11 /1 起",
        content:
          "全新「幻境雞尾酒」系列，結合獨特香料和視覺效果，帶來味蕾的奇幻旅程。",
      },
      {
        title: "「彩虹飛龍」夜間跳傘體驗開放預約",
        date: "2024 / 12 / 1 起，每週五、六晚間",
        content: "在星光下俯衝，體驗刺激的夜間跳傘，欣賞島嶼夜景。",
      },
      {
        title: "「失落小島」新增「古文明密室逃脫」遊戲",
        date: "2025 / 1 / 15 起",
        content: "60分鐘內解開謎題，揭開古老文明的秘密，挑戰智慧與團隊合作。",
      },
      {
        title: "「夢境咖啡廳」推出「味覺幻象」下午茶",
        date: "2025 / 10 / 15 起",
        content: "顛覆對食物的認知，每一口都是味蕾的探索和驚喜。",
      },
      {
        title: "「海洋美饌」舉辦「深海美食節」",
        date: "2025 / 11 / 1 - 11 / 30",
        content: "國際廚師呈現深海食材創新料理，體驗獨特的沉船主題用餐氛圍。",
      },
      {
        title: "跨年特別活動：「時空漩渦」倒數派對",
        date: "2024 / 12 / 31 21:00 至2025 / 1 / 1日 02:00",
        content:
          "在不同時空主題區域穿梭，迎接新年，有機會贏得全年無限次入園大獎。",
      },
    ];
    setScrollNews(fetchedScrollNews);
  }, []); // 空依賴數組表示這個效果只在組件掛載時運行一次

  const showNextNews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const showPrevNews = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length
    );
  };

  const currentNews = newsItems[currentIndex] || {};
  const nextNews = newsItems[(currentIndex + 1) % newsItems.length] || {};

  return (
    <div className="mysteryNews container-fluid">
      <div className="row sectionTitleRow">
        <h2 className="sectionTitle col-12">謎樣快報</h2>
        <div className="sectionTitleLine"></div>
      </div>

      <div className="row newsContent">
        {/* 左列 */}
        <div className="left-column col-lg-4 col-md-6 col-sm-12">
          <div className="container-fluid p-0">
            <div className="row box_1">
              <div className="col-12">
                <div className="row no-gutters">
                  <div className="col-6">
                    <div className=" title">
                      「深海迷航」虛擬實境體驗正式開放
                    </div>
                    <div className="itemA time">2024 / 9 / 15 起</div>
                    <div className="itemA content">
                      探索未知海底世界！我們很高興宣布，全新的虛擬實境體驗「深海迷航」將在9月15日正式開放。戴上VR裝置，在神秘的海底洞穴中尋找失落的寶藏，準備好迎接挑戰了嗎？
                    </div>
                    <div className="seeMore">看更多+</div>
                  </div>
                  <div className="col-6 image-container">
                    <img
                      src="../../public/infoEventPage/07poster_banner/banner (15).webp"
                      alt=""
                      className="itemA image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row box_2">
              <div className="col-12">
                <div className="row no-gutters">
                  <div className="col-6 image-container">
                    <img
                      src="../../public/infoEventPage/07poster_banner/food (13).png"
                      alt=""
                      className="itemA image2"
                    />
                  </div>
                  <div className="col-6">
                    <div className="itemA title">
                      「星空餐廳」即將推出「銀河味蕾之旅」主題晚宴
                    </div>
                    <div className="itemA time">2024 / 10 / 1 起</div>
                    <div className="seeMore">看更多+</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row box_3">
              <div className="col-12">
                <div className="itemA content-2">
                  「星空餐廳」為您獻上「銀河味蕾之旅」主題晚宴。我們邀請了米其林星級主廚，精心打造七道式星際美食。每道菜品都靈感來自不同的星座，不僅美味更富創意。配合動態星空投影，讓您在品嚐美食的同時，彷彿遨遊宇宙。
                </div>
              </div>
            </div>

            <hr />

            <div className="row box_4">
              <div className="col-12">
                <a href="#" className="ticketSection">
                  <img
                    src="../../public/infoEventPage/00myIcon/ticket.png"
                    alt="Ticket"
                    className="ticketIcon"
                  />
                  <span className="ticketText">TICKET?</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 中列 */}
        <div className="center-column col-lg-5 col-md-6 col-sm-12">
          <div className="mainContent">
            <div className="itemA mainImageItem">
              <img
                src={currentNews.mainImage}
                alt={currentNews.title}
                className="centerImg"
              />
            </div>
            <div className="imageOverlay">
              <h3 className="title">{currentNews.title}</h3>
              <div className="itemA time">{currentNews.date}</div>
              <p>{currentNews.content}</p>
            </div>
          </div>
          <div className="subNews row no-gutters">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="itemA imageItem">
                <img src={nextNews.subImage} alt={nextNews.subTitle} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="itemA textItem">
                <h4>下一則頭條</h4>
                <p>{nextNews.subTitle}</p>
                <div className="date">{nextNews.subDate}</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="itemA buttonItem">
                <button onClick={showPrevNews} className="btn btn-link">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button onClick={showNextNews} className="btn btn-link">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右列 */}
        <div className="right-column col-lg-3 col-md-12">
          <div className="container-fluid p-0">
            <div className="row box_1">
              <div className="col-12 box1 imageContainer flipCard">
                <div className="flipCardInner">
                  <div className="flipCardFront">
                    <img
                      src="../../public/infoEventPage//00myIcon/elef.png"
                      alt="New Performer"
                      className="mainImage"
                    />
                    <h4 className="elefTitle">New Performer?</h4>
                  </div>
                  <div className="flipCardBack">
                    <img
                      src="https://cdn.midjourney.com/75b848a7-e375-45da-adc9-69ac2be5a0b3/0_0.png"
                      alt="大象萊利"
                      className="subImage"
                    />
                    <div className="subTitle">大象萊利周五即將到來!</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="scrollable-area">
              {scrollNews.map((news, index) => (
                <React.Fragment key={index}>
                  <div className="news-item">
                    <div className="news-image image-container">
                      <img
                        src={`../../public/infoEventPage/07poster_banner/banner (${
                          index + 1
                        }).webp`}
                        alt={news.title}
                      />
                    </div>
                    <div className="news-content">
                      <h4 className="news-title">{news.title}</h4>
                      <p className="news-date">{news.date}</p>
                      <p className="news-excerpt">{news.content}</p>
                    </div>
                  </div>
                  {index < scrollNews.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </div>
            <hr />
            <div className="row box_5">
              <div className="col-12 p-0 video-container">
                <iframe
                  className="mainVideo"
                  src="https://www.youtube.com/embed/rB83mJBxImQ?si=O5305rqN8kifcS8v&autoplay=1&mute=1&loop=1&playlist=rB83mJBxImQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-section">看更多 &gt;</div>
    </div>
  );
};

export default MysteryNews;
