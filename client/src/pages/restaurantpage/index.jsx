import React, { Component, useEffect, useState } from "react";
import Banner from "./Banner";
import Des from "./Des.jsx";
import PhoneView from "./PhoneView.jsx";

import imgBistro from "/resraurant/Starlit Bistro.png";
import imgBistro2 from "/resraurant/Starlit Bistro food.png";
import imgDream from "/resraurant/Dreamweaver Cafe.png";
import imgDream2 from "/resraurant/Dreamweaver Cafe food.png";
import imgOcean from "/resraurant/Oceanic Delights.png";
import imgOcean2 from "/resraurant/Oceanic Delights food.png";
import imgShadow from "/resraurant/Shadowplay Cafe.png";
import imgShadow2 from "/resraurant/Shadowplay Cafe food.png";
import imgTrance from "/resraurant/Trance Tavern.png";
import imgTrance2 from "/resraurant/Trance Tavern food.png";
import imgMall from "/resraurant/ShoppingMall.png";
import imgMall2 from "/resraurant/ShoppingMall toy.png";

import "./restaurantPage.scss";

function RestaurantPage() {
	let bannerList = [
		{
			id: 1,
			firstName: "Starlit",
			lastName: " Bistro",
			img: [imgBistro, imgBistro2],
			alt: "Starlit Bistro",
			name: "星空餐廳",
			des: "提供國際美食，內部裝飾有星空天花板，營造夢幻氛圍。",
			content:
				"餐廳內部裝飾有絢麗的星空天花板，燈光璀璨，營造出如夢似幻的用餐氛圍。在這裡，您可以享受到來自世界各地的美味佳餚，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳。",
			openTime: "週一至週日 11:00~21:30",
			lastOrder: "最後點餐時間：21:00",
		},
		{
			id: 2,
			firstName: "Dreamweaver",
			lastName: " Cafe",
			img: [imgDream, imgDream2],
			alt: "Dreamweaver",
			name: "夢境咖啡廳",
			des: "充滿夢幻元素的咖啡廳，環境舒適，提供手工咖啡和甜點。",
			content:
				"咖啡廳的內部設計如夢似幻，柔和的燈光、精美的裝飾和舒適的座椅，為您營造出一個完美的休憩空間。在這裡，每一個角落都散發著溫馨和夢幻的氣息，讓您一踏入便仿佛進入了一個夢境世界，忘卻外界的喧囂與忙碌。我們每一杯咖啡都是由專業的咖啡師精心手工製作，選用上等的咖啡豆，經過細心烘焙，為您帶來最純粹的咖啡體驗，無論是濃郁的意式濃縮，還是香醇的拿鐵、卡布奇諾，或是充滿創意的特調咖啡，我們都將為您提供極致的味覺享受。每一口咖啡都凝聚了我們對品質的追求，讓您品味到咖啡的深厚韻味和豐富層次。除了精緻的咖啡，我們還提供各式各樣的美味甜點。無論是口感輕盈的慕斯蛋糕、香脆可口的餅乾，還是綿密濃郁的巧克力蛋糕，每一款甜點都是我們精心製作，為您帶來甜美的味蕾體驗。精緻且客製化的咖啡飲品，搭配上各式各樣的美味甜點，讓您在放鬆的同時，享受到味蕾的滿足，感受到宛如夢境般的美好時光。",
			openTime: "週一至週日 11:00~21:30",
			lastOrder: "最後點餐時間：21:00",
		},
		{
			id: 3,
			firstName: "Oceanic",
			lastName: " Delights",
			img: [imgOcean, imgOcean2],
			alt: "Oceanic Delights",
			name: "海洋美饌",
			des: "專注於海鮮料理的餐廳，結合海洋主題設計。",
			content:
				"餐廳內部裝潢以海洋元素為靈感，藍色的燈光和流動的水紋讓您彷彿置身於海底世界，牆壁上裝飾著栩栩如生的海洋生物壁畫，仿佛海洋中的一景一物都被搬到了您的眼前。柔和的燈光和精心設計的座位安排，營造出一個溫馨而富有情調的用餐環境，讓您在這裡享受一段美好的時光，讓您在美食的同時，體驗海洋的奇妙與美麗。在這裡，您可以品嚐到各種新鮮的海鮮料理，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳，從海鮮拼盤、烤扇貝到香煎鱸魚，再到經典的海鮮義大利麵，我們力求在每一道菜中呈現海洋的鮮美。所有食材都經過嚴格挑選，新鮮直送，讓您在每一口中都能品味到海洋的純淨與美好。",
			openTime: "週一至週日 11:00~21:30",
			lastOrder: "最後點餐時間：21:00",
		},
		{
			id: 4,
			firstName: "Shadowplay",
			lastName: " Cafe",
			img: [imgShadow, imgShadow2],
			alt: "Shadowplay Cafe",
			name: "光影咖啡廳",
			des: "利用燈光和陰影創造獨特氛圍的咖啡廳。",
			content:
				"光影咖啡廳是一個利用燈光和陰影創造出獨特氛圍的咖啡廳，讓您在享受美味餐點的同時，感受藝術與創意的完美結合。走進咖啡廳，您會被瞬間被周圍的氣氛吸引，室內設計充滿奇幻元素，燈光與陰影的變幻交織，營造出一個如夢似幻的休閒空間，讓您彷彿進入奇異且夢幻的異世界空間。在這裡，您可以品味到由我們專業咖啡師精心手工製作的各式咖啡，也有提供無咖啡因的花茶選項，也提供了多種手工甜點，無論是慕斯蛋糕，還是法式手工薄餅，每一款甜點都是我們對美食的用心之作，絕對能滿足您對甜點的渴望及達到身心靈的放鬆。光影咖啡廳不僅適合您與朋友共享美好時光，還是您獨自放鬆、享受靜謐時刻的理想場所。這裡的每一個角落都充滿了創意和驚喜，讓您在品味美食的同時，感受到藝術帶來的心靈愉悅。",
			openTime: "週一至週日 11:00~21:30",
			lastOrder: "最後點餐時間：21:00",
		},
		{
			id: 5,
			firstName: "Trance",
			lastName: " Tavern",
			img: [imgTrance, imgTrance2],
			alt: "Trance Tavern",
			name: "迷幻酒吧",
			des: "提供創意雞尾酒和精釀啤酒，氛圍迷幻。",
			content:
				"迷幻酒吧提供各種獨特的創意雞尾酒和精釀啤酒，是您體驗獨特創意雞尾酒和精釀啤酒的夢幻樂園。我們的酒吧以其迷幻的氛圍和創新的飲品設計著稱，是您放鬆和享受夜晚的理想場所。迷幻酒吧提供各種獨特的創意雞尾酒和精釀啤酒，每一款飲品都由專業調酒師精心調製，確保每一口都帶給您難以忘懷的味覺享受。當您步入迷幻酒吧，眼前的燈光效果和裝飾設計將立即將您帶入一個充滿魔力的世界。酒吧內部佈滿了色彩繽紛的燈光和絢麗的投影，隨著音樂的節奏變換，營造出一片迷幻的視覺盛宴。這裡的每一個角落都充滿著奇幻和神秘，讓您在品味美酒的同時，也能感受到無與倫比的視覺享受。我們的調酒師不僅擁有豐富的經驗和高超的技藝，更富有創意和靈感。他們精心設計了多款獨特的雞尾酒，從經典風味到創新混搭，每一款都充滿了驚喜。也能依照您的心情、喜好及需求特調專屬於您的飲品，確保每一杯都符合您的口味和期待。迷幻酒吧不僅僅是一個享受飲品的地方，更是一個讓您放鬆身心、釋放壓力的夢幻空間。",
			openTime: "週一至週日 11:00~23:30",
			lastOrder: "最後點餐時間：23:00",
		},
		{
			id: 6,
			firstName: "Shopping",
			lastName: " Mall",
			img: [imgMall, imgMall2],
			alt: "Shopping Mall",
			name: "異域市集",
			des: "販賣遊樂園周邊商品和紀念品。",
			content:
				"市集中擺滿了各式各樣的商品，包括特色紀念品、限量版收藏品、玩具、特殊服裝和居家裝飾，每一件商品都充滿了迷樣島嶼的獨特風情及特色。無論是為自己挑選一份特別的紀念品，還是為親友帶回珍貴的禮物，您都能在這裡找到最滿意的選擇。",
			openTime: "週一至週日 09:00~17:30",
		},
	];

	let [view, setView] = useState(true);

	let handleView = ()=>{
		if(window.innerWidth > 720){
			setView(true)
		}else if(window.innerWidth <= 720 ){
			setView(false)
		}
	}

	useEffect(()=>{
		window.addEventListener('resize',handleView)
	},[])

	if (view) {
		return (
			<div className="restaurantPage">
				<Banner bannerList={bannerList} />
				<main>
					{bannerList.map((shop) => {
						return <Des shop={shop} />;
					})}
				</main>
			</div>
		);
	} else {
		return (
			<div className="restaurantPage">
				<PhoneView bannerList={bannerList} />
			</div>
		);
	}
}

export default RestaurantPage;
