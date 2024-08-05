import React from "react";
// components
import Banner from "./Banner";
import FAQ from "./FAQ";

//css
// 引入 Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// // 引入 Font Awesome
// import "@fortawesome/fontawesome-free/css/all.min.css";
// // 引入 Bootstrap Icons
// import "bootstrap-icons/font/bootstrap-icons.css";

// // Bootstrap JS
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./infoFAQ.scss";

const InfoFAQPage = () => {
  return (
    <div>
      <Banner />
      <FAQ />
    </div>
  );
};

export default InfoFAQPage;
