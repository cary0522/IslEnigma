import React from "react";
// images
import imgKkday from "/images/imgKkady.png";
import imgEast from "/images/imgEastSouth.png";
import imgKlook from "/images/imgKlook.png";

function BookingWayImg() {
	return (
		<div className="divImages">
			<div className="divImgItem col-1">
				<img src={imgKkday} alt=""  />
			</div>
			<div className="divImgItem col-1">
				<img src={imgEast} alt=""  />
			</div>
			<div className="divImgItem col-1">
				<img src={imgKlook} alt=""/>
			</div>
		</div>
	);
}

export default BookingWayImg;
