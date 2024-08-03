import React, { useState } from "react";
import LogoArea from "/src/components/common/LogoArea";

import imgLogo from "/public/00logo/LogoType_Light_2.png";


function Banner({bannerList}) {


	let [bannerImg, setBannerImg] = useState(bannerList[2].img[0]);

	let handelCarouse = (e) => {
		bannerList.forEach((shop) => {
			if (e.currentTarget.id == shop.id) {
				setBannerImg(shop.img[0]);
			}
		});
	};
	return (
		<div className="">
			<div className="banner">
				<img src={bannerImg} alt="" />
				<div className="bannerContainer">
					<div className="logoContainer">
						<LogoArea imgLogo={imgLogo} areaName={"飲食購物"} />
					</div>
				</div>
			</div>
			<div className="carouselContainer">
				<div className="carousel">
					{bannerList.map((shop) => {
						return (
							<div
								className="carouselItem"
								key={shop.id}
								id={shop.id}
								onClick={handelCarouse}
							>
								<img src={shop.img[0]} className="carouselImg" alt={shop.alt} />
								<div className="carouselText">
									<p>{shop.firstName}</p>
									<p>{shop.lastName}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Banner;
