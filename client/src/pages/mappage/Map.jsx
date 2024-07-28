import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import map from "/public/images/map-final.png";
import BtnArea from "./BtnArea.jsx";
import MapPoint from "./MapPoint.jsx";
import FacilityContent from "./FacilityContent.jsx";
import FacilityDes from "./FacilityDes.jsx";
import ScaleProgress from "./ScaleProgress.jsx";

// icons
import { IoTicket } from "react-icons/io5";
import { LuFerrisWheel } from "react-icons/lu";
import { PiToiletBold } from "react-icons/pi";
import {
	FaQuestionCircle,
	FaHospitalSymbol,
	FaBus,
	FaShopify,
	FaStreetView,
} from "react-icons/fa";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GiForest, GiCampingTent, GiSixEyes } from "react-icons/gi";

function Map() {
	// 相同種類設施設定相同 setRef function，把相同種類元素放進 ref 陣列中
	let type_ticket_center = useRef([]);
	let setTypeTicketCenter = (elem) => {
		if (elem) {
			type_ticket_center.current.push(elem);
		}
	};
	let type_facility = useRef([]);
	let setTypeFacility = (elem) => {
		if (elem) {
			type_facility.current.push(elem);
		}
	};
	let type_view = useRef([]);
	let setTypeView = (elem) => {
		if (elem) {
			type_view.current.push(elem);
		}
	};
	let type_VR = useRef([]);
	let setTypeVR = (elem) => {
		if (elem) {
			type_VR.current.push(elem);
		}
	};
	let type_theater = useRef([]);
	let setTypeTheater = (elem) => {
		if (elem) {
			type_theater.current.push(elem);
		}
	};
	let type_shop = useRef([]);
	let setTypeShop = (elem) => {
		if (elem) {
			type_shop.current.push(elem);
		}
	};
	let type_toilet = useRef([]);
	let setTypeToilet = (elem) => {
		if (elem) {
			type_toilet.current.push(elem);
		}
	};
	let type_visitor_center = useRef([]);
	let setTypeVisitorCenter = (elem) => {
		if (elem) {
			type_visitor_center.current.push(elem);
		}
	};
	let type_port = useRef([]);
	let setTypePort = (elem) => {
		if (elem) {
			type_port.current.push(elem);
		}
	};
	let type_bus = useRef([]);
	let setTypeBus = (elem) => {
		if (elem) {
			type_bus.current.push(elem);
		}
	};
	let type_medical = useRef([]);
	let setTypeMedical = (elem) => {
		if (elem) {
			type_medical.current.push(elem);
		}
	};
	let type_room = useRef([]);
	let setTypeRoom = (elem) => {
		if (elem) {
			type_room.current.push(elem);
		}
	};

	const facilityList = [
		{
			id: "1",
			title: "夢幻瀑布",
			refName: setTypeView,
			className: "type_view",
			iconId: "view_fall",
			des: "結合燈光和水幕效果的瀑布設施，讓遊客感受流動的夢境。",
			content:
				"融合燈光和水幕效果的獨特設施，讓您彷彿置身於流動的夢境中。水流在多彩燈光的照射下，變幻出無數迷人的光影。夜晚時分，夢幻瀑布更是展現出其神秘的魅力，燈光隨著音樂的節奏律動，水幕上投射出各種夢幻般的圖案和景象。",
			image: "/public/images/facility_image_1.png",
			location:'璀璨綠洲',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'1',
			rule_seat:'100',
			rule_others:'癲癇、對光線敏感、身心不舒服者。',
			remarks:'設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。',
			iconComponent: <GiForest />,
		},
		{
			id: "2",
			title: "光影迷宮",
			refName: setTypeVR,
			className: "type_VR",
			iconId: "VR_maze",
			des: "利用光影效果創造的迷宮，讓遊客在其中迷失和探索。",
			content:
				"利用光影效果創造出錯綜複雜的迷宮，讓您在其中迷失並享受探索的樂趣。一進入迷宮，您便會被奇妙的光影變幻所吸引，牆壁上的燈光圖案隨著您的移動而改變，營造出神秘而奇幻的氛圍。每個轉角都可能帶來新的驚喜，或是一條看似通往出口的光明小徑，或是一片讓人困惑的光影迷霧。",
			image: "/public/images/facility_image_2.png",
			location:'璀璨綠洲',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'2',
			rule_seat:'100',
			rule_others:'心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者。',
			remarks:'另有等候區可容納 30 人，設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。',
			iconComponent: <FaStreetView />,
		},
		{
			id: "3",
			title: "閃耀花園",
			refName: setTypeView,
			className: "type_view",
			iconId: "view_garden",
			des: "充滿色彩斑斕花卉和燈光效果的花園，提供放鬆的氛圍。",
			content:
				"白天，花園中盛開著各式各樣的鮮花，散發出迷人的香氣，營造出寧靜而愉悅的氛圍。當夜幕降臨，花園搖身一變，花卉在燈光的照射下，呈現出夢幻般的色彩變化，每一朵花都像是在閃耀著自己的光芒。燈光隨著微風輕輕搖曳，宛如進入了一個奇幻的花之國度。",
			image: "/public/images/facility_image_3.png",
			location:'璀璨綠洲',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'1',
			rule_seat:'100',
			rule_others:'癲癇、對光線敏感、身心不舒服者。',
			remarks:'設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。',
			iconComponent: <GiForest />,
		},
		{
			id: "4",
			title: "幻光森林",
			refName: setTypeView,
			className: "type_view",
			iconId: "view_forest",
			des: "充滿發光植物和迷幻燈光效果的森林，遊客可以在這裡享受奇幻的夜間景觀。",
			content:
				"整片森林中充滿了發光植物和迷幻燈光效果。當夜幕降臨，森林裡的每一株植物都開始散發出柔和的光芒，形成一幅如夢似幻的畫面，漫步在這片奇幻的森林中，仿佛置身於童話世界。夜間光影秀另有提供專業攝影師進行拍照留念，歡迎選購紀念照片。",
			image: "/public/images/facility_image_4.png",
			location:'璀璨綠洲',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'1',
			rule_seat:'100',
			rule_others:'癲癇、對光線敏感、身心不舒服者。',
			remarks:'設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。',
			iconComponent: <GiForest />,
		},
		{
			id: "5",
			title: "星空餐廳",
			refName: setTypeShop,
			className: "type_shop",
			iconId: "shop_restaurant_sky",
			des: "提供國際美食，內部裝飾有星空天花板，營造夢幻氛圍。",
			content:
				"餐廳內部裝飾有絢麗的星空天花板，燈光璀璨，營造出如夢似幻的用餐氛圍。在這裡，您可以享受到來自世界各地的美味佳餚，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳。",
			image: "/public/images/facility_image_5.png",
			location:'璀璨綠洲',
			open_time:'11:00~21:30',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'另有獨立宴會廳可容納50人',
			iconComponent: <FaShopify />,
			shop_more:"https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food"
		},
		{
			id: "6",
			title: "夢境咖啡廳",
			refName: setTypeShop,
			className: "type_shop",
			iconId: "shop_cafe_dream",
			des: "充滿夢幻元素的咖啡廳，環境舒適，提供手工咖啡和甜點。",
			content:
				"咖啡廳的內部設計如夢似幻，柔和的燈光、精美的裝飾和舒適的座椅，為您營造出一個完美的休憩空間。在這裡，每一個角落都散發著溫馨和夢幻的氣息，讓您一踏入便仿佛進入了一個夢境世界，忘卻外界的喧囂與忙碌。",
			image: "/public/images/facility_image_6.png",
			location:'璀璨綠洲',
			open_time:'11:00~21:30',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaShopify />,
			shop_more:"https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food"
		},
		{
			id: "7",
			title: "海洋探險",
			refName: setTypeTheater,
			className: "type_theater",
			iconId: "theater_sea",
			des: "模擬海洋探險的設施，讓遊客探索海底世界的奇觀。",
			content:
				"只要戴上3D眼鏡及坐上動感座椅，透過涼感技術、環繞音效和風吹所帶來的體感特效，以及先進的科技互動技術，搭配智慧型手機連結，紀錄每人所在座位，偵測肢體動作給予相對觸覺體驗，彷彿身歷其境，位於海洋深處進行探險。結合最新體感以及互動兩大元素，精心打造數位互動體感劇院。",
			image: "/public/images/facility_image_7.png",
			location:'嗨唷洋外',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'2',
			rule_seat:'100',
			rule_others:'心臟病、高血壓、孕婦、身心不舒服者。',
			remarks:'搭乘設施，請勿飲食，禁止拍照。',
			iconComponent: <BiSolidCameraMovie />,
		},
		{
			id: "8",
			title: "海底隧道",
			refName: setTypeView,
			className: "type_view",
			iconId: "view_sea_tunnel",
			des: "透明的海底隧道，讓遊客可以近距離觀賞海洋生物和水下景觀。",
			content:
				"乘坐透明的海底列車，您將被包圍在美麗的珊瑚礁和各種色彩斑斕的海洋生物之中。隨著列車緩緩前行，您將近距離觀賞到海龜、熱帶魚和其他海洋生物的優雅游姿，彷彿置身於一片廣闊的水下花園。透過列車的全景玻璃窗，海洋的壯麗景色盡收眼底，帶給您前所未有的視覺享受。",
			image: "/public/images/facility_image_8.png",
			location:'嗨唷洋外',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'1',
			rule_seat:'100',
			rule_others:'心臟病、高血壓、孕婦、容易暈車暈船、身心不舒服者。',
			remarks:'設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。',
			iconComponent: <GiForest />,
		},
		{
			id: "9",
			title: "彩虹飛龍",
			refName: setTypeFacility,
			className: "type_facility",
			iconId: "facility_rainbow",
			des: "高空彈跳中跳下懸崖，可以欣賞台灣海峽的美景。",
			content:
				"在專業工作人員的引導下，穿著安全設施站上高空平台，在最佳高度俯瞰整片台灣海峽，隨後一躍而下，體驗重力加速度的快感及刺激感受，絕對是令您一生難忘的體驗。此精彩體驗令提供全程紀錄片拍攝服務，歡迎選購獨一無二、充滿紀念價值的紀錄影片。",
			image: "/public/images/facility_image_9.png",
			location:'嗨唷洋外',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'3',
			rule_seat:'10',
			rule_others:'心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。',
			remarks:'地面觀賞區可容納100人，搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。',
			iconComponent: <LuFerrisWheel />,
		},
		{
			id: "10",
			title: "珊瑚礁之旅",
			refName: setTypeVR,
			className: "type_VR",
			iconId: "VR_coral",
			des: "利用現代虛擬實境的科技，讓人彷彿身歷其境。",
			content:
				"一進入體驗區，您便會被逼真的海底世界所包圍，仿佛置身於蔚藍的深海之中。特殊的4D效果讓您感受到水流的輕柔撫觸和海洋生物的親近。隨著虛擬潛水的展開，五彩斑斕的珊瑚礁、悠遊自在的熱帶魚、優雅的海龜和神秘的海洋生物將一一呈現在您的眼前。",
			image: "/public/images/facility_image_10.png",
			location:'嗨唷洋外',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'2',
			rule_seat:'40',
			rule_others:'心臟病、孕婦、癲癇、視力疾病者、容易暈車暈船、身心不舒服者。',
			remarks:'設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。',
			iconComponent: <FaStreetView />,
		},
		{
			id: "11",
			title: "海洋美饌",
			refName: setTypeShop,
			className: "type_shop",
			iconId: "shop_restaurant_sea",
			des: "專注於海鮮料理的餐廳，結合海洋主題設計。",
			content:
				"餐廳內部裝潢以海洋元素為靈感，藍色的燈光和流動的水紋讓您彷彿置身於海底世界，牆壁上裝飾著栩栩如生的海洋生物壁畫，仿佛海洋中的一景一物都被搬到了您的眼前。柔和的燈光和精心設計的座位安排，營造出一個溫馨而富有情調的用餐環境，讓您在這裡享受一段美好的時光，讓您在美食的同時，體驗海洋的奇妙與美麗。",
			image: "/public/images/facility_image_11.png",
			location:'嗨唷洋外',
			open_time:'11:00~21:30',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaShopify />,
			shop_more:"https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food"
		},
		{
			id: "12",
			title: "激流勇進",
			refName: setTypeFacility,
			className: "type_facility",
			iconId: "facility_river",
			des: "刺激的水上激流設施，體驗水上漂流的快感。",
			content:
				"目前國內最長的人工泛舟河道，水道全長七百五十公尺，每艘圓型橡膠船可乘坐二至五人，全程約十分鐘。沿途可以欣賞失落小島獨特的風景，途中有激流、奇岩怪石，每個彎曲處，都可能是冒險旅程的開端，充滿著驚喜與趣味，還有隨時會被水砲攻擊的驚險時刻。",
			image: "/public/images/facility_image_12.png",
			location:'失落小島',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'2',
			rule_seat:'45',
			rule_others:'心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、容易暈車暈船、65歲以上長者、身心不舒服者',
			remarks:'視個人需求穿著救生衣；搭乘設施，請勿飲食；請勿赤腳搭乘設施。',
			iconComponent: <LuFerrisWheel />,
		},
		{
			id: "13",
			title: "飛行塔",
			refName: setTypeFacility,
			className: "type_facility",
			iconId: "facility_sky_tower",
			des: "高空旋轉塔，真實體驗飛翔的感覺。",
			content:
				"坐上飛行塔的座椅，隨著塔身緩緩升起，旋轉的速度逐漸加快，將感受到一種前所未有的自由與刺激。從高空俯瞰，整個遊樂園的美景盡收眼底，彷彿置身於雲端，欣賞著如畫的景色。",
			image: "/public/images/facility_image_13.png",
			location:'失落小島',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'3',
			rule_seat:'20',
			rule_others:'心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。',
			remarks:'搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。',
			iconComponent: <LuFerrisWheel />,
		},
		{
			id: "14",
			title: "旋轉木馬",
			refName: setTypeFacility,
			className: "type_facility",
			iconId: "facility_carousel",
			des: "童年回憶中的旋轉木馬，適合各年齡段的遊客。",
			content:
				"在失落小島中，竟然存在夢幻、充滿童年回憶的旋轉木馬，您可以釋放壓力、回到童年，您永遠是自己的小公主、小王子，乘著白馬輕鬆遨遊在失落小島中，觀賞、巡視各角落的景觀。仔細找找，您還會發現有大象、長頸鹿、孔雀等各類可愛的動物喔！",
			image: "/public/images/facility_image_14.png",
			location:'失落小島',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'1',
			rule_seat:'20',
			rule_others:'容易暈車暈船、身心不舒服者。',
			remarks:'搭乘設施，請勿飲食。',
			iconComponent: <LuFerrisWheel />,
		},
		{
			id: "15",
			title: "雲霄飛車",
			refName: setTypeFacility,
			className: "type_facility",
			iconId: "facility_roller_coaster",
			des: "高速、驚險的雲霄飛車，體驗刺激與快感。",
			content:
				"每次可乘坐30人，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里，在1分30秒的歷程中您將兩腳懸空、以360度螺旋沖天、90度垂直俯衝急速下降，驚嚇的程度絕對讓你頭皮發麻、冷汗直流。",
			image: "/public/images/facility_image_15.png",
			location:'失落小島',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'3',
			rule_seat:'30',
			rule_others:'心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。',
			remarks:'搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。',
			iconComponent: <LuFerrisWheel />,
		},
		{
			id: "16",
			title: "摩天輪",
			refName: setTypeFacility,
			className: "type_facility",
			iconId: "facility_wheel",
			des: "遊樂園的經典設施，提供俯瞰整個樂園的絕佳視角。",
			content:
				"透明景觀冷氣車廂，讓你輕鬆舒適眺望失落小鎮美景，到制高點時，可以將整座迷樣島嶼一覽無遺，每座車廂可容納8人，搭乘一圈約為18分鐘，夜間128種炫麗燈光秀，在摩天輪上，將美麗景致盡收眼底。",
			image: "/public/images/facility_image_16.png",
			location:'失落小島',
			open_time:'9:00~17:30',
			data_maintain:'2024/3/7 下午',
			rule_height:'無身高限制',
			rule_excitement:'1',
			rule_seat:'80',
			rule_others:'心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。',
			remarks:'搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。',
			iconComponent: <LuFerrisWheel />,
		},
		{
			id: "17",
			title: "光影咖啡廳",
			refName: setTypeShop,
			className: "type_shop",
			iconId: "shop_cafe_light",
			des: "利用燈光和陰影創造獨特氛圍的咖啡廳。",
			content:
				"光影咖啡廳是一個利用燈光和陰影創造出獨特氛圍的咖啡廳，讓您在享受美味餐點的同時，感受藝術與創意的完美結合。走進咖啡廳，您會被瞬間被周圍的氣氛吸引，室內設計充滿奇幻元素，燈光與陰影的變幻交織，營造出一個如夢似幻的休閒空間，讓您彷彿進入奇異且夢幻的異世界空間。",
			image: "/public/images/facility_image_17.png",
			location:'失落小島',
			open_time:'11:00~21:30',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:'100',
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaShopify />,
			shop_more:"https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food"
		},
		{
			id: "18",
			title: "迷幻酒吧",
			refName: setTypeShop,
			className: "type_shop",
			iconId: "shop_bar",
			des: "提供創意雞尾酒和精釀啤酒，氛圍迷幻。",
			content:
				"迷幻酒吧提供各種獨特的創意雞尾酒和精釀啤酒，是您體驗獨特創意雞尾酒和精釀啤酒的夢幻樂園。我們的酒吧以其迷幻的氛圍和創新的飲品設計著稱，是您放鬆和享受夜晚的理想場所。迷幻酒吧提供各種獨特的創意雞尾酒和精釀啤酒，每一款飲品都由專業調酒師精心調製，確保每一口都帶給您難以忘懷的味覺享受。",
			image: "/public/images/facility_image_18.png",
			location:'中島',
			open_time:'11:00-23:30',
			data_maintain:'每日清潔維護',	
			rule_height:null,
			rule_excitement:null,
			rule_seat:"50",
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaShopify />,
			shop_more:"https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food"
		},
		{
			id: "19",
			title: "廁所",
			refName: setTypeToilet,
			className: "type_toilet",
			iconId: "toilet",
			des: "提供乾淨的公共廁所設施。",
			content:
				"廁所設計現代，內部整潔乾淨，定期有專業清潔人員維護，確保衛生環境，讓您在遊園過程中保持清潔和舒適。每個廁所區域均設有無障礙設施，為行動不便的遊客提供便利。",
			image: "/public/images/facility_image_19.png",
			location:'中島',
			open_time:'9:00~24:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <PiToiletBold />,
		},
		{
			id: "20",
			title: "遊客中心",
			refName: setTypeVisitorCenter,
			className: "type_visitor_center",
			iconId: "visitor_center",
			des: "提供遊園訊息和諮詢服務。",
			content:
				"遊客中心內設有舒適的休息區和自助資訊亭，方便您隨時獲取最新的遊園訊息，我們還提供失物招領、嬰兒推車租借和緊急聯絡等多項服務，確保您的放鬆之旅無憂無慮。無論您有任何問題或需求，歡迎隨時前來遊客中心諮詢。",
			image: "/public/images/facility_image_20.webp",
			location:'中島',
			open_time:'9:00~20:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaQuestionCircle />,
		},
		{
			id: "21",
			title: "異域市集",
			refName: setTypeShop,
			className: "type_shop",
			iconId: "shop_shopping",
			des: "販賣遊樂園周邊商品和紀念品。",
			content:
				"市集中擺滿了各式各樣的商品，包括特色紀念品、限量版收藏品、玩具、特殊服裝和居家裝飾，每一件商品都充滿了迷樣島嶼的獨特風情及特色。無論是為自己挑選一份特別的紀念品，還是為親友帶回珍貴的禮物，您都能在這裡找到最滿意的選擇。",
			image: "/public/images/facility_image_21.png",
			location:'出入口',
			open_time:'9:00~17:30',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaShopify />,
			shop_more:"https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food"
		},
		{
			id: "22",
			title: "港口",
			refName: setTypePort,
			className: "type_port",
			iconId: "port",
			des: "提供免費的港口接送服務，現場提供行李寄存、休息區及專業的接待團隊。",
			content:
				"郵輪設施齊全，確保每一位遊客都能舒適、便捷地抵達遊樂園，也能舒適、安全返家，讓您的旅途從起點到終點，都充滿樂趣和放鬆，並且都能有安全、舒適的體驗。",
			image: "/public/images/facility_image_22.png",
			location:'出入口',
			open_time:'8:00~20:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <MdOutlineDirectionsBoatFilled />,
		},
		{
			id: "23",
			title: "售票區",
			refName: setTypeTicketCenter,
			className: "type_ticket_center",
			iconId: "ticket_center",
			des: "提供現場購票和諮詢服務。",
			content:
				"這裡是您夢幻旅程的起點，我們設置在迷樣島嶼入口處，方便您輕鬆、立即購買票卷，我們提供多語言服務，確保來自世界各地的您都能順利購票、展開一趟難忘的奇妙旅程。售票口也設有迷樣島嶼地圖、提供諮詢服務及寵物寄放區，期待能滿足您在迷樣島嶼的各種需求。",
			image: "/public/images/facility_image_23.webp",
			location:'出入口',
			open_time:'8:00~20:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <IoTicket />,
		},
		{
			id: "24",
			title: "醫護站",
			refName: setTypeMedical,
			className: "type_medical",
			iconId: "medical_station",
			des: "提供諮詢及急救服務。",
			content:
				"醫護站為迷樣島嶼內有需要的遊客提供緊急醫療服務和健康保障，醫護站內環境舒適、整潔，設有休息區和藥品供應點，方便遊客在需要時得到適當的處理及照護。我們的目標是讓每一位遊客都能安心享受遊樂園的美好時光，無需擔心健康問題。",
			image: "/public/images/facility_image_24.webp",
			location:'出入口',
			open_time:'9:00~20:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaHospitalSymbol />,
		},
		{
			id: "25",
			title: "遊園車站牌-島嶼入口",
			refName: setTypeBus,
			className: "type_bus",
			iconId: "bus_station_enter",
			des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
			content:
				"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
			image: "/public/images/facility_image_25.png",
			location:'出入口',
			open_time:'9:10~22:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaBus />,
		},
		{
			id: "26",
			title: "遊園車站牌-璀璨綠洲",
			refName: setTypeBus,
			className: "type_bus",
			iconId: "bus_station_oasis",
			des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
			content:
				"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
			image: "/public/images/facility_image_25.png",
			location:'璀璨綠洲',
			open_time:'9:10~22:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaBus />,
		},
		{
			id: "27",
			title: "遊園車站牌-嗨游洋外",
			refName: setTypeBus,
			className: "type_bus",
			iconId: "bus_station_high",
			des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
			content:
				"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
			image: "/public/images/facility_image_25.png",
			location:'嗨游洋外',
			open_time:'9:10~22:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaBus />,
		},
		{
			id: "28",
			title: "遊園車站牌-失落小島",
			refName: setTypeBus,
			className: "type_bus",
			iconId: "bus_station_lost",
			des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
			content:
				"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
			image: "/public/images/facility_image_25.png",
			location:'失落小島',
			open_time:'9:10~22:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaBus />,
		},
		{
			id: "29",
			title: "遊園車站牌-露營區",
			refName: setTypeBus,
			className: "type_bus",
			iconId: "bus_station_room",
			des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
			content:
				"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
			image: "/public/images/facility_image_25.png",
			location:'露營區',
			open_time:'9:10~22:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaBus />,
		},
		{
			id: "30",
			title: "遊園車站牌-遊客中心",
			refName: setTypeBus,
			className: "type_bus",
			iconId: "bus_station_visitor_center",
			des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
			content:
				"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
			image: "/public/images/facility_image_25.png",
			location:'中島',
			open_time:'9:10~22:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <FaBus />,
		},
		{
			id: "31",
			title: "住宿服務區",
			refName: setTypeRoom,
			className: "type_room",
			iconId: "room_center",
			des: "提供所有有關露營的訊息、諮詢服務。",
			content:
				"無論是入住草原住宿區、森林小築區還是海濱度假區，我們的專業團隊都將竭誠為您提供最優質的服務。我們還提供遊園資訊、活動推薦以及各類設施的介紹服務，旨在確保每一位遊客都能享受到無憂無慮的假期，讓您在我們的迷樣島嶼中度過一段愉快且難忘的時光。",
			image: "/public/images/facility_image_31.png",
			location:'露營區',
			open_time:'8:00~24:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <GiCampingTent />,
		},
		{
			id: "32",
			title: "草原住宿區",
			refName: setTypeRoom,
			className: "type_room",
			iconId: "room_grassland",
			des: "位於遊樂園的寬廣草原上，讓您在大自然的懷抱中享受奢華露營的獨特體驗。",
			content:
				"草原住宿區位於遊樂園的寬廣草原上，讓您在大自然的懷抱中享受奢華露營的獨特體驗。每個帳篷都配備高端設施，提供舒適的睡眠環境和寧靜的氛圍。",
			image: "/public/images/facility_image_32.jpeg",
			location:'露營區',
			open_time:'8:00~24:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <GiCampingTent />,
		},
		{
			id: "33",
			title: "森林小築區",
			refName: setTypeRoom,
			className: "type_room",
			iconId: "room_forest",
			des: "提供豪華露營體驗，是尋求平靜與放鬆的理想之地，讓您遠離都市的喧囂，回歸自然的懷抱。",
			content:
				"這裡的帳篷設計融合了現代舒適與自然之美，讓您在靜謐的森林中享受一夜好眠。白天，您可以探索周圍的步道，觀賞各種鳥類和野生動植物。夜晚，伴隨著蟲鳴和微風，享受與自然共處的靜謐時光。",
			image: "/public/images/facility_image_33.jpeg",
			location:'露營區',
			open_time:'8:00~24:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <GiCampingTent />,
		},
		{
			id: "34",
			title: "湖濱度假區",
			refName: setTypeRoom,
			className: "type_room",
			iconId: "room_lake",
			des: "每個帳篷都面向湖面，讓您在享受舒適設施的同時，體會湖水清澈的寧靜。",
			content:
				"白天，您可以在私人沙灘上曬日光浴，或者參加各種水上活動。夜晚，伴著月光，沿著湖濱散步，體驗真正的放鬆與愜意。湖濱度假區是追求奢華與自然結合的完美選擇，讓您在美麗的湖景中度過難忘的假期。",
			image: "/public/images/facility_image_34.webp",
			location:'露營區',
			open_time:'8:00~24:00',
			data_maintain:'每日清潔維護',
			rule_height:null,
			rule_excitement:null,
			rule_seat:null,
			rule_others:'無其他限制',
			remarks:'無',
			iconComponent: <GiCampingTent />,
		},
	];

	// 點選選單，同種類設施有反應
	function handleType(typeArr) {
		typeArr.current.forEach((elem) => {
			elem.style.transition = ""
			elem.style.backgroundImage = "url(/src/pages/mappage/mapPointHover.svg)";
			elem.style.animation = "svgHover 0.8s";
		});
		setTimeout(() => {
			typeArr.current.forEach((elem) => {
				elem.style.animation = "";
				elem.style.backgroundImage = "url(/src/pages/mappage/mapPoint.svg)";
				elem.style.transition = "all 0.8s";
			});
		}, 2000);
	}

	// 簡介彈跳視窗
	let [desShow, setDesShow] = useState(false);
	let [desId, setDesId] = useState(null);
	let [pageX, setPageX] = useState(null);
	let [pageY, setPageY] = useState(null);
	// 出現
	function handleDes(e, desId) {
		e.stopPropagation();
		let eStyle = window.getComputedStyle(e.currentTarget.parentElement);
		setPageX(parseInt(eStyle.left));
		setPageY(parseInt(eStyle.top));
		setDesId(desId);
		setDesShow(true);
	}
	// 關掉
	function handleDesClose() {
		setDesId(null);
		setDesShow(false);
	}

	// 詳細介紹彈跳視窗
	let [contentShow, setContentShow] = useState(false);
	let [contentId, setContentId] = useState(null);
	// 出現
	function handleContent(itemId) {
		setContentId(itemId);
		setContentShow(true);
	}
	// 關掉
	function handleContentClose() {
		setContentId(null);
		setContentShow(false);
	}
	// 地圖放大縮小拉霸，是否需要？
	// let [scaleNum,setScaleNum] = useState(1);
	// let zoomIn=()=>{
	// 	console.log(scaleNum)
	// 	setScaleNum(scaleNum+0.5)
	// }
	// let zoomOut=()=>{
	// 	console.log(scaleNum)
	// 	setScaleNum(scaleNum-0.5)
	// }
	// let scaleStyle={
	// 	transform:`scale(${scaleNum})`
	// }

	return (
		<>
			<FacilityContent
				facilityList={facilityList}
				contentId={contentId}
				contentShow={contentShow}
				handleContentClose={handleContentClose}
			/>
			{/* <ScaleProgress scaleNum={scaleNum} zoomIn={zoomIn} zoomOut={zoomOut} /> */}
			<div
				id="mapOutside"
				onClick={(e) => {
					handleDesClose();
					handleContentClose();
				}}
			>
				<div id="divInteractiveMap">
					<FacilityDes
						facilityList={facilityList}
						desShow={desShow}
						desId={desId}
						pageX={pageX}
						pageY={pageY}
						handleDesClose={handleDesClose}
						handleContent={handleContent}
					/>
					
					<img src={map} alt="map" id="imgInteractiveMap"></img>
					{facilityList.map((facility) => {
						return (
							<MapPoint
								facility={facility}
								key={facility.id}
								handleDes={handleDes}
								handleContent={handleContent}
							/>
						);
					})}

				</div>
				<BtnArea
						handleType={handleType}
						type_room={type_room}
						type_VR={type_VR}
						type_bus={type_bus}
						type_facility={type_facility}
						type_medical={type_medical}
						type_port={type_port}
						type_shop={type_shop}
						type_theater={type_theater}
						type_ticket_center={type_ticket_center}
						type_toilet={type_toilet}
						type_view={type_view}
						type_visitor_center={type_visitor_center}
					/>
			</div>
		</>
	);
}

export default Map;
