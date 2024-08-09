import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay ,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function MainContent({image1,image2,image3}) {
	const pagination = { clickable: true };

	return (
		<div className="divCarouse">
			<div className="carouselContainer">
				<div className="carousel" id="restaurantCarousel">
					<Swiper
						pagination={pagination}
						modules={[Pagination,Autoplay,Navigation]}
						loop={true}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
					>
						<SwiperSlide>
							<img src={image1} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image2} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={image3} alt="" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default MainContent;
