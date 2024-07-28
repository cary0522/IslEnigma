import React, { useState } from "react";
// components
import LogoArea from "/src/components/common/LogoArea.jsx";
import BookingArea from "./BookingArea.jsx";
import BtnDown from "./BtnDown.jsx";
// image
import imgBanner from "/public/images/ticketBanner.png";
import imgLogo from "/public/images/LogoType_Light_2 2.png";

function Banner({
	dateShow,
	showCalendar,
	closeCalendar,
	handleAlertShow,
	handleAlertShowDate,
	handleAlertShowCart,
}) {
	return (
		<div
			id="divBanner"
			onClick={() => {
				closeCalendar();
			}}
		>
			<LogoArea imgLogo={imgLogo} areaName={"訂票服務"} />
			<img src={imgBanner} alt="" className="imgBackground" />
			<div className="divSafe">
				<h5>*為安全起見，園區內設施限制 18 歲以上方能搭乘</h5>
			</div>
			<BookingArea
				dateShow={dateShow}
				showCalendar={showCalendar}
				closeCalendar={closeCalendar}
				handleAlertShow={handleAlertShow}
				handleAlertShowDate={handleAlertShowDate}
				handleAlertShowCart={handleAlertShowCart}
			/>
			<BtnDown />
		</div>
	);
}

export default Banner;
