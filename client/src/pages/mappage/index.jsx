import React, { useEffect, useState } from "react";
// components
import LogoArea from "/src/components/common/LogoArea.jsx";
import Map from "./Map.jsx";
// import Header from "/src/components/layout/Navbar/Navbar.jsx";
// import Footer from "/src/components/layout/Footer/Footer.jsx";
// css
import "./mapPage.scss";

import imgLogo from "/public/images/logo.png";
function MapPage() {
	// 視螢幕寬度及滾動長度決定 btnArea 定位方式
	let [isSticky, setIsSticky] = useState(false);
	useEffect(() => {
		let handleScroll = () => {
			if (window.innerWidth < 723 && window.scrollY > 100) {
				setIsSticky(true);
			} else if (window.innerWidth >= 723 && window.scrollY > 325) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className="mapPage"
		>
			{/* <Header></Header> */}
			<LogoArea imgLogo={imgLogo} areaName={"園區導覽"} />
			<Map isSticky={isSticky} />
			{/* <Footer></Footer> */}
		</div>
	);
}

export default MapPage;
