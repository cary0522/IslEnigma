import React, { Component } from "react";

function Des({ shop }) {
	return (
		<section className="sectionContainer" key={shop.id}>
			<div className="imageContainer">
				<img src={shop.img[0]} className="image1" />
				<img src={shop.img[1]} className="image2" />
			</div>
			<div className="contentContainer">
				<h2>{shop.name}</h2>
				<h3>{shop.des}</h3>
				<p>{shop.content}</p>
				<div className="businessHourstime rightItem">
					<div className="col-2 timeText">營業時間</div>
					<div className="col-9 timeLine"></div>
				</div>
				<div className="timeAndBtn">
					<div className="timeText">
						<p>{shop.openTime}</p>
						<p>{shop.lastOrder}</p>
					</div>
					<a href="#" className="button">
						查看更多&nbsp;&gt;
					</a>
				</div>
			</div>
		</section>
	);
}

export default Des;
