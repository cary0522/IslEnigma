import React, { useState } from "react";
import "./infoEvent.scss";

//table

const TodayActivities = () => {
  // 使用 useState 鉤子來管理顯示今日活動還是年度活動
  const [showToday, setShowToday] = useState(true);

  // 今日活動數據
  const todayActivities = [
    {
      time: "10:00-20:00",
      name: "深海生物觀察(VIP)",
      description: "在海底隧道觀察各種深海生物",
      location: "海底隧道",
      price: "含在VIP門票",
    },
    {
      time: "S1 10:00\nS2 15:00",
      name: "深海潛水艇之旅(VIP)",
      description: "乘坐私人潛水艇探索深海",
      location: "深海區",
      price: "含在VIP門票",
    },
    {
      time: "S1 13:00\n小時/一場",
      name: "幻光森林導覽",
      description: "導覽員帶領探索幻光森林",
      location: "幻光森林",
      price: "含在門票內",
    },
    {
      time: "S1 10:00\n小時/一場",
      name: "失落文明探險",
      description: "參與互動式歷史探險遊戲",
      location: "失落島嶼",
      price: "含在門票內",
    },
    {
      time: "S1 10:00\n小時/一場",
      name: "彩虹飛龍跳傘",
      description: "高空跳傘體驗",
      location: "嗨唷洋外",
      price: "含在門票內",
    },
    {
      time: "18:00-24:00",
      name: "迷幻調酒品嚐",
      description: "品嚐特色雞尾酒",
      location: "迷幻酒吧",
      price: "NT$350/杯起",
    },
    {
      time: "18:00-21:30",
      name: "星際美食之旅",
      description: "在星空餐廳享受特色主題料理",
      location: "星空餐廳",
      price: "含在門票內",
    },
    {
      time: "20:00",
      name: "午夜水舞秀(VIP)",
      description: "獨享夢幻瀑布的私人水舞表演",
      location: "夢幻瀑布",
      price: "含在VIP門票",
    },
    {
      time: "全時段",
      name: "尊榮客戶專屬通道(VIP)",
      description: "所有設施及活動的快速通關服務",
      location: "全園區",
      price: "含在VIP門票",
    },
  ];

  // 年度活動數據
  const yearlyActivities = [
    {
      time: "3 / 20 - 6 / 21",
      name: "春季花卉節",
      description: "欣賞絢爛的春季花卉展覽",
      limit: "不限",
      price: "含在門票內",
    },
    {
      time: "6/ 22 - 9 / 22",
      name: "夏日水上嘉年華",
      description: "參與刺激的水上活動和表演",
      limit: "不限",
      price: "含在門票內",
    },
    {
      time: "9 / 23 - 11 / 22",
      name: "神秘南瓜節",
      description: "體驗充滿驚喜的南瓜主題活動",
      limit: "不限",
      price: "含在門票內",
    },
    {
      time: "11 / 22 - 3 / 19",
      name: "冰雪奇緣慶典",
      description: "享受夢幻的冬季特別活動",
      limit: "不限",
      price: "含在門票內",
    },
    {
      time: "每週六、日",
      name: "珊瑚種植體驗",
      description: "不需潛水證，需通過游泳測試和基礎潛水培訓2小時。",
      limit: "每場10人",
      price: "含在門票中",
    },
    {
      time: "每週五、六、日晚間",
      name: "星空觀測活動",
      description: "專業天文導覽",
      limit: "每場50人",
      price: "含在門票內",
    },
    {
      time: "2024 / 12 / 31 - 1 / 1",
      name: "「時空漩渦」跨年倒數派對",
      description: "新年倒數派對。持有住宿票的遊客可享優惠價格",
      limit: "視場地而定",
      price: "活動前兩個月公佈優惠信息",
    },
    {
      time: "2024 / 7 / 1 - 8 / 31",
      name: "「星空餐廳」主題晚宴",
      description: "特色主題料理，需提前1個月預約。每場晚宴限50位客人。",
      limit: "50位客人",
      price: "額外NT$1,500/人",
    },
    {
      time: "2025 / 2 /1 - 4 / 30",
      name: "海底隧道稀有深海生物展",
      description:
        "展出200多種深海生物，包括50種稀有發光生物。每日開放時間：10:00-20:00",
      limit: "不限",
      price: "含在門票內",
    },
  ];

  return (
    <div className="todayActivities">
      <div className="row sectionTitleRow">
        <h2 id="activityTitle" className="sectionTitle col-12">
          {showToday ? "今日活動" : "年度活動"}
        </h2>
        <div className="sectionTitleLine"></div>
      </div>
      <div
        id="todayActivitiesTable"
        style={{ display: showToday ? "block" : "none" }}
      >
        <table className="tableA">
          <thead>
            <tr>
              <th>時間</th>
              <th>活動名稱</th>
              <th className="description-column">活動描述</th>
              <th>地點</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            {todayActivities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.time}</td>
                <td>{activity.name}</td>
                <td className="description-column">{activity.description}</td>
                <td>{activity.location}</td>
                <td>{activity.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        id="yearlyActivitiesTable"
        style={{ display: showToday ? "none" : "block" }}
      >
        <table className="tableA">
          <thead>
            <tr>
              <th>時間</th>
              <th>活動名稱</th>
              <th className="description-column">活動描述</th>
              <th>人數限制</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            {yearlyActivities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.time}</td>
                <td>{activity.name}</td>
                <td className="description-column">{activity.description}</td>
                <td>{activity.limit}</td>
                <td>{activity.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button id="toggleButton" onClick={() => setShowToday(!showToday)}>
        {showToday ? "查看年度活動" : "查看今日活動"}
      </button>
    </div>
  );
};

export default TodayActivities;
