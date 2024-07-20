import React from "react";
// components
import LogoArea from "/src/components/common/LogoArea.jsx";
import Map from "./Map.jsx";
import Header from "/src/components/layout/header.jsx";
import Footer from "/src/components/layout/footer.jsx";
// css
import "./mapPage.scss";

import imgLogo from "/public/images/logo.png";
function MapPage() {
	return (
		<div className="mapPage">
			<Header></Header>
			<LogoArea imgLogo={imgLogo} areaName={"園區導覽"} />
			<Map />
			<Footer></Footer>
		</div>
	);
}

export default MapPage;
