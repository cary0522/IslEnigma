import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/scss/pagination";
import 'swiper/scss/scrollbar'

function PhoneView({ bannerList }) {
	return (
		<div className="restPhonePage">
			<Swiper pagination={{dynamicBullets:true,clickable:true,}}
             loop={true} 
             modules={[Pagination,Autoplay]} 
             autoplay={{delay:2000}}
             >
					{bannerList.map((shop) => {
				return (
						<SwiperSlide key={shop.id}>
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
