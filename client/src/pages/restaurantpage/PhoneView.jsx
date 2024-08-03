import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";

function PhoneView({ bannerList }) {
	return (
		<div className="restPhonePage">
			<Swiper pagination={true} modules={[Pagination]}>
					{bannerList.map((shop) => {
				return (
						<SwiperSlide>
							<img src={shop.img[0]} alt="" className="phoneImg" />
							<div className="phoneText">
								<h1>{shop.name}</h1>
								<div className="divOpenTime">
									<div>營業時間</div>
									<div>{shop.openTime}</div>
								</div>
								<p>{shop.des}</p>
								<button className="button">查看更多</button>
							</div>
						</SwiperSlide>
				)
					})}
			</Swiper>
		</div>
	);
}

export default PhoneView;
