import {Swiper , SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import image1 from '/public/resraurant/Starlit Bistro.png'
import image2 from '/public/resraurant/Starlit Bistro food.png'
import image3 from '/public/resraurant/Starlit Bistro food 2.png'

function MainContent({images}) {
	return (
		<div className="divCarouse">
			<div className="carouselContainer">
				<div className="carousel" id="restaurantCarousel">
					<img src="/public/resraurant/Starlit Bistro.png" />
					<img src="/public/resraurant/Starlit Bistro food.png" />
					<img src="/public/resraurant/Starlit Bistro food 2.png" />
				</div>
				<div>
					<span className="dot" onclick="currentSlide(0)"></span>
					<span className="dot" onclick="currentSlide(1)"></span>
					<span className="dot" onclick="currentSlide(2)"></span>
				</div>
			</div>
		</div>
	);
}

export default MainContent;
