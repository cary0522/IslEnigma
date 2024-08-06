import React from "react";
import FerrisWheel from "./FerrisWheel";

const ActivityNotes = () => {
  return (
    <div id="activityNotes" className="activityNotes">
      <div className="roomRulesheader">
        <span className="roomRulesIcon"></span>
        <h3>活動注意事項</h3>
        <span className="roomRulesDecorator"></span>
      </div>
      <div className="activityContent">
        <ul>
          <li>
            <i className="fa-solid fa-splotch ms-2 me-2"></i>
            此網頁資訊僅供參考用於2024下半年至2025上半年
          </li>
          <li>
            <i className="fa-solid fa-splotch ms-2 me-2"></i>
            若遇雨天或氣候不佳，園區保留臨時調整活動內容之權利
          </li>
          <li>
            <i className="fa-solid fa-splotch ms-2 me-2"></i>
            活動現場，還有更多精彩，體驗等著您親自來探索喔！
          </li>
          <li>
            <i className="fa-solid fa-splotch ms-2 me-2"></i>
            現場活動安排依實際情況可能有所調整
          </li>
        </ul>
        <div className="imgContainer">
          <div className="imgbox">
            <img src="./public/00myIcon/castle.png" alt="左側城堡" />
            <div id="wheel">
              <FerrisWheel />
            </div>
            <img src="./public/00myIcon/castle.png" alt="右側城堡" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityNotes;
