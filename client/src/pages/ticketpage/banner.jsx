import React from "react";
// components
import LogoArea from "/src/components/common/LogoArea.jsx";
import BookingArea from "./bookingArea.jsx";
import BtnDown from "./btnDown.jsx";
// image
import imgBanner from "/public/images/ticketBanner.png";
import imgLogo from "/public/images/LogoType_Light_2 2.png";


function Banner() {
	return (
		<div id="divBanner">
            <LogoArea imgLogo={imgLogo} areaName={"訂票服務"} />
			<img src={imgBanner} alt="" className="imgBackground"/>
            <div className="divSafe">
                <h5>*為安全起見，園區內設施限制 18 歲以上方能搭乘</h5>
            </div>
			<BookingArea />
			<BtnDown/>
		</div>
	);
}

export default Banner;
