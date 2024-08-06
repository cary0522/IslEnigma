import React from "react";
// components
import Banner from "./Banner";
import MysteryNews from "./MysteryNews";
import TodayActivities from "./TodayActivities";
import ActivityNotes from "./ActivityNotes";

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

const InfoEventPage = () => {
  return (
    <div>
      <Banner />
      <MysteryNews />
      <TodayActivities />
      <ActivityNotes />
    </div>
  );
};

export default InfoEventPage;
