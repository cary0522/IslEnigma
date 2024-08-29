import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import map from "/images/map-final.png";
import area1 from "/images/area1.png";
import area2 from "/images/area2.png";
import area3 from "/images/area3.png";
import area4 from "/images/area4.png";
import area5 from "/images/area5.png";
import area6 from "/images/area6.png";

import BtnArea from "./BtnArea.jsx";
import MapPoint from "./MapPoint.jsx";
import FacilityContent from "./FacilityContent.jsx";
import FacilityDes from "./FacilityDes.jsx";
import MapArea from "./MapArea.jsx";

// icons components
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
import { GiForest, GiCampingTent } from "react-icons/gi";

// ***現在的程式碼是從資料庫拿資料，需要有後端程式碼才能跑***
function Map({ isSticky }) {
	// 從資料庫抓設施資料
	let [facilityList, setFacilityList] = useState([]);
	let getFacilityList = async () => {
		let result = await axios.get("https://isl-enigma-server.vercel.app/map/mapPage");
		setFacilityList(result.data);
	};
	useEffect(() => {
		let fetchData = async () => {
			await getFacilityList();
		};
		fetchData();
	}, []);

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
	// ref跟className對照表
	let refList = {
		type_ticket_center: setTypeTicketCenter,
		type_facility: setTypeFacility,
		type_view: setTypeView,
		type_VR: setTypeVR,
		type_theater: setTypeTheater,
		type_shop: setTypeShop,
		type_toilet: setTypeToilet,
		type_visitor_center: setTypeVisitorCenter,
		type_port: setTypePort,
		type_bus: setTypeBus,
		type_medical: setTypeMedical,
		type_room: setTypeRoom,
	};
	// componentList跟className對照表
	let componentList = {
		type_ticket_center: <IoTicket />,
		type_facility: <LuFerrisWheel />,
		type_view: <GiForest />,
		type_VR: <FaStreetView />,
		type_theater: <BiSolidCameraMovie />,
		type_shop: <FaShopify />,
		type_toilet: <PiToiletBold />,
		type_visitor_center: <FaQuestionCircle />,
		type_port: <MdOutlineDirectionsBoatFilled />,
		type_bus: <FaBus />,
		type_medical: <FaHospitalSymbol />,
		type_room: <GiCampingTent />,
	};

	// 寫死的資料，如果沒抓到資料庫可用，注意key名稱跟設施限制
	// const facilityList = [
	// 	{
	// 		facility_id: "1",
	// 		title: "夢幻瀑布",
	// 		refName: setTypeView,
	// 		facility_class_name: "type_view",
	// 		facility_id_name: "view_fall",
	// 		des: "結合燈光和水幕效果的瀑布設施，讓遊客感受流動的夢境。",
	// 		content:
	// 			"融合燈光和水幕效果的獨特設施，讓您彷彿置身於流動的夢境中。水流在多彩燈光的照射下，變幻出無數迷人的光影。夜晚時分，夢幻瀑布更是展現出其神秘的魅力，燈光隨著音樂的節奏律動，水幕上投射出各種夢幻般的圖案和景象。",
	// 		images: "/images/facility_image_1.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "1",
	// 		rule_seat: "100",
	// 		rule_other: "癲癇、對光線敏感、身心不舒服者。",
	// 		remarks:
	// 			"設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。",
	// 		iconComponent: <GiForest />,
	// 	},
	// 	{
	// 		facility_id: "2",
	// 		title: "光影迷宮",
	// 		refName: setTypeVR,
	// 		facility_class_name: "type_VR",
	// 		facility_id_name: "VR_maze",
	// 		des: "利用光影效果創造的迷宮，讓遊客在其中迷失和探索。",
	// 		content:
	// 			"利用光影效果創造出錯綜複雜的迷宮，讓您在其中迷失並享受探索的樂趣。一進入迷宮，您便會被奇妙的光影變幻所吸引，牆壁上的燈光圖案隨著您的移動而改變，營造出神秘而奇幻的氛圍。每個轉角都可能帶來新的驚喜，或是一條看似通往出口的光明小徑，或是一片讓人困惑的光影迷霧。",
	// 		images: "/images/facility_image_2.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "2",
	// 		rule_seat: "100",
	// 		rule_other:
	// 			"心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者。",
	// 		remarks:
	// 			"另有等候區可容納 30 人，設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。",
	// 		iconComponent: <FaStreetView />,
	// 	},
	// 	{
	// 		facility_id: "3",
	// 		title: "閃耀花園",
	// 		refName: setTypeView,
	// 		facility_class_name: "type_view",
	// 		facility_id_name: "view_garden",
	// 		des: "充滿色彩斑斕花卉和燈光效果的花園，提供放鬆的氛圍。",
	// 		content:
	// 			"白天，花園中盛開著各式各樣的鮮花，散發出迷人的香氣，營造出寧靜而愉悅的氛圍。當夜幕降臨，花園搖身一變，花卉在燈光的照射下，呈現出夢幻般的色彩變化，每一朵花都像是在閃耀著自己的光芒。燈光隨著微風輕輕搖曳，宛如進入了一個奇幻的花之國度。",
	// 		images: "/images/facility_image_3.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "1",
	// 		rule_seat: "100",
	// 		rule_other: "癲癇、對光線敏感、身心不舒服者。",
	// 		remarks:
	// 			"設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。",
	// 		iconComponent: <GiForest />,
	// 	},
	// 	{
	// 		facility_id: "4",
	// 		title: "幻光森林",
	// 		refName: setTypeView,
	// 		facility_class_name: "type_view",
	// 		facility_id_name: "view_forest",
	// 		des: "充滿發光植物和迷幻燈光效果的森林，遊客可以在這裡享受奇幻的夜間景觀。",
	// 		content:
	// 			"整片森林中充滿了發光植物和迷幻燈光效果。當夜幕降臨，森林裡的每一株植物都開始散發出柔和的光芒，形成一幅如夢似幻的畫面，漫步在這片奇幻的森林中，仿佛置身於童話世界。夜間光影秀另有提供專業攝影師進行拍照留念，歡迎選購紀念照片。",
	// 		images: "/images/facility_image_4.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "1",
	// 		rule_seat: "100",
	// 		rule_other: "癲癇、對光線敏感、身心不舒服者。",
	// 		remarks:
	// 			"設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。",
	// 		iconComponent: <GiForest />,
	// 	},
	// 	{
	// 		facility_id: "5",
	// 		title: "星空餐廳",
	// 		refName: setTypeShop,
	// 		facility_class_name: "type_shop",
	// 		facility_id_name: "shop_restaurant_sky",
	// 		des: "提供國際美食，內部裝飾有星空天花板，營造夢幻氛圍。",
	// 		content:
	// 			"餐廳內部裝飾有絢麗的星空天花板，燈光璀璨，營造出如夢似幻的用餐氛圍。在這裡，您可以享受到來自世界各地的美味佳餚，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳。",
	// 		images: "/images/facility_image_5.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "11:00~21:30",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "另有獨立宴會廳可容納50人",
	// 		iconComponent: <FaShopify />,
	// 		shop_more: "https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food",
	// 	},
	// 	{
	// 		facility_id: "6",
	// 		title: "夢境咖啡廳",
	// 		refName: setTypeShop,
	// 		facility_class_name: "type_shop",
	// 		facility_id_name: "shop_cafe_dream",
	// 		des: "充滿夢幻元素的咖啡廳，環境舒適，提供手工咖啡和甜點。",
	// 		content:
	// 			"咖啡廳的內部設計如夢似幻，柔和的燈光、精美的裝飾和舒適的座椅，為您營造出一個完美的休憩空間。在這裡，每一個角落都散發著溫馨和夢幻的氣息，讓您一踏入便仿佛進入了一個夢境世界，忘卻外界的喧囂與忙碌。",
	// 		images: "/images/facility_image_6.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "11:00~21:30",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaShopify />,
	// 		shop_more: "https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food",
	// 	},
	// 	{
	// 		facility_id: "7",
	// 		title: "海洋探險",
	// 		refName: setTypeTheater,
	// 		facility_class_name: "type_theater",
	// 		facility_id_name: "theater_sea",
	// 		des: "模擬海洋探險的設施，讓遊客探索海底世界的奇觀。",
	// 		content:
	// 			"只要戴上3D眼鏡及坐上動感座椅，透過涼感技術、環繞音效和風吹所帶來的體感特效，以及先進的科技互動技術，搭配智慧型手機連結，紀錄每人所在座位，偵測肢體動作給予相對觸覺體驗，彷彿身歷其境，位於海洋深處進行探險。結合最新體感以及互動兩大元素，精心打造數位互動體感劇院。",
	// 		images: "/images/facility_image_7.png",
	// 		location: "嗨唷洋外",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "2",
	// 		rule_seat: "100",
	// 		rule_other: "心臟病、高血壓、孕婦、身心不舒服者。",
	// 		remarks: "搭乘設施，請勿飲食，禁止拍照。",
	// 		iconComponent: <BiSolidCameraMovie />,
	// 	},
	// 	{
	// 		facility_id: "8",
	// 		title: "海底隧道",
	// 		refName: setTypeView,
	// 		facility_class_name: "type_view",
	// 		facility_id_name: "view_sea_tunnel",
	// 		des: "透明的海底隧道，讓遊客可以近距離觀賞海洋生物和水下景觀。",
	// 		content:
	// 			"乘坐透明的海底列車，您將被包圍在美麗的珊瑚礁和各種色彩斑斕的海洋生物之中。隨著列車緩緩前行，您將近距離觀賞到海龜、熱帶魚和其他海洋生物的優雅游姿，彷彿置身於一片廣闊的水下花園。透過列車的全景玻璃窗，海洋的壯麗景色盡收眼底，帶給您前所未有的視覺享受。",
	// 		images: "/images/facility_image_8.png",
	// 		location: "嗨唷洋外",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "1",
	// 		rule_seat: "100",
	// 		rule_other: "心臟病、高血壓、孕婦、容易暈車暈船、身心不舒服者。",
	// 		remarks:
	// 			"設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。",
	// 		iconComponent: <GiForest />,
	// 	},
	// 	{
	// 		facility_id: "9",
	// 		title: "彩虹飛龍",
	// 		refName: setTypeFacility,
	// 		facility_class_name: "type_facility",
	// 		facility_id_name: "facility_rainbow",
	// 		des: "高空彈跳中跳下懸崖，可以欣賞台灣海峽的美景。",
	// 		content:
	// 			"在專業工作人員的引導下，穿著安全設施站上高空平台，在最佳高度俯瞰整片台灣海峽，隨後一躍而下，體驗重力加速度的快感及刺激感受，絕對是令您一生難忘的體驗。此精彩體驗令提供全程紀錄片拍攝服務，歡迎選購獨一無二、充滿紀念價值的紀錄影片。",
	// 		images: "/images/facility_image_9.png",
	// 		location: "嗨唷洋外",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "3",
	// 		rule_seat: "10",
	// 		rule_other:
	// 			"心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。",
	// 		remarks:
	// 			"地面觀賞區可容納100人，搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。",
	// 		iconComponent: <LuFerrisWheel />,
	// 	},
	// 	{
	// 		facility_id: "10",
	// 		title: "珊瑚礁之旅",
	// 		refName: setTypeVR,
	// 		facility_class_name: "type_VR",
	// 		facility_id_name: "VR_coral",
	// 		des: "利用現代虛擬實境的科技，讓人彷彿身歷其境。",
	// 		content:
	// 			"一進入體驗區，您便會被逼真的海底世界所包圍，仿佛置身於蔚藍的深海之中。特殊的4D效果讓您感受到水流的輕柔撫觸和海洋生物的親近。隨著虛擬潛水的展開，五彩斑斕的珊瑚礁、悠遊自在的熱帶魚、優雅的海龜和神秘的海洋生物將一一呈現在您的眼前。",
	// 		images: "/images/facility_image_10.png",
	// 		location: "嗨唷洋外",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "2",
	// 		rule_seat: "40",
	// 		rule_other:
	// 			"心臟病、孕婦、癲癇、視力疾病者、容易暈車暈船、身心不舒服者。",
	// 		remarks:
	// 			"設施內請勿飲食。體驗時請勿追逐、奔跑，以避免撞傷跌倒等危險發生。允許拍照但禁止使用閃光燈。",
	// 		iconComponent: <FaStreetView />,
	// 	},
	// 	{
	// 		facility_id: "11",
	// 		title: "海洋美饌",
	// 		refName: setTypeShop,
	// 		facility_class_name: "type_shop",
	// 		facility_id_name: "shop_restaurant_sea",
	// 		des: "專注於海鮮料理的餐廳，結合海洋主題設計。",
	// 		content:
	// 			"餐廳內部裝潢以海洋元素為靈感，藍色的燈光和流動的水紋讓您彷彿置身於海底世界，牆壁上裝飾著栩栩如生的海洋生物壁畫，仿佛海洋中的一景一物都被搬到了您的眼前。柔和的燈光和精心設計的座位安排，營造出一個溫馨而富有情調的用餐環境，讓您在這裡享受一段美好的時光，讓您在美食的同時，體驗海洋的奇妙與美麗。",
	// 		images: "/images/facility_image_11.png",
	// 		location: "嗨唷洋外",
	// 		open_time: "11:00~21:30",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaShopify />,
	// 		shop_more: "https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food",
	// 	},
	// 	{
	// 		facility_id: "12",
	// 		title: "激流勇進",
	// 		refName: setTypeFacility,
	// 		facility_class_name: "type_facility",
	// 		facility_id_name: "facility_river",
	// 		des: "刺激的水上激流設施，體驗水上漂流的快感。",
	// 		content:
	// 			"目前國內最長的人工泛舟河道，水道全長七百五十公尺，每艘圓型橡膠船可乘坐二至五人，全程約十分鐘。沿途可以欣賞失落小島獨特的風景，途中有激流、奇岩怪石，每個彎曲處，都可能是冒險旅程的開端，充滿著驚喜與趣味，還有隨時會被水砲攻擊的驚險時刻。",
	// 		images: "/images/facility_image_12.png",
	// 		location: "失落小島",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "2",
	// 		rule_seat: "45",
	// 		rule_other:
	// 			"心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、容易暈車暈船、65歲以上長者、身心不舒服者",
	// 		remarks: "視個人需求穿著救生衣；搭乘設施，請勿飲食；請勿赤腳搭乘設施。",
	// 		iconComponent: <LuFerrisWheel />,
	// 	},
	// 	{
	// 		facility_id: "13",
	// 		title: "飛行塔",
	// 		refName: setTypeFacility,
	// 		facility_class_name: "type_facility",
	// 		facility_id_name: "facility_sky_tower",
	// 		des: "高空旋轉塔，真實體驗飛翔的感覺。",
	// 		content:
	// 			"坐上飛行塔的座椅，隨著塔身緩緩升起，旋轉的速度逐漸加快，將感受到一種前所未有的自由與刺激。從高空俯瞰，整個遊樂園的美景盡收眼底，彷彿置身於雲端，欣賞著如畫的景色。",
	// 		images: "/images/facility_image_13.png",
	// 		location: "失落小島",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "3",
	// 		rule_seat: "20",
	// 		rule_other:
	// 			"心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。",
	// 		remarks: "搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。",
	// 		iconComponent: <LuFerrisWheel />,
	// 	},
	// 	{
	// 		facility_id: "14",
	// 		title: "旋轉木馬",
	// 		refName: setTypeFacility,
	// 		facility_class_name: "type_facility",
	// 		facility_id_name: "facility_carousel",
	// 		des: "童年回憶中的旋轉木馬，適合各年齡段的遊客。",
	// 		content:
	// 			"在失落小島中，竟然存在夢幻、充滿童年回憶的旋轉木馬，您可以釋放壓力、回到童年，您永遠是自己的小公主、小王子，乘著白馬輕鬆遨遊在失落小島中，觀賞、巡視各角落的景觀。仔細找找，您還會發現有大象、長頸鹿、孔雀等各類可愛的動物喔！",
	// 		images: "/images/facility_image_14.png",
	// 		location: "失落小島",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "1",
	// 		rule_seat: "20",
	// 		rule_other: "容易暈車暈船、身心不舒服者。",
	// 		remarks: "搭乘設施，請勿飲食。",
	// 		iconComponent: <LuFerrisWheel />,
	// 	},
	// 	{
	// 		facility_id: "15",
	// 		title: "雲霄飛車",
	// 		refName: setTypeFacility,
	// 		facility_class_name: "type_facility",
	// 		facility_id_name: "facility_roller_coaster",
	// 		des: "高速、驚險的雲霄飛車，體驗刺激與快感。",
	// 		content:
	// 			"每次可乘坐30人，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里，在1分30秒的歷程中您將兩腳懸空、以360度螺旋沖天、90度垂直俯衝急速下降，驚嚇的程度絕對讓你頭皮發麻、冷汗直流。",
	// 		images: "/images/facility_image_15.png",
	// 		location: "失落小島",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "3",
	// 		rule_seat: "30",
	// 		rule_other:
	// 			"心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。",
	// 		remarks: "搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。",
	// 		iconComponent: <LuFerrisWheel />,
	// 	},
	// 	{
	// 		facility_id: "16",
	// 		title: "摩天輪",
	// 		refName: setTypeFacility,
	// 		facility_class_name: "type_facility",
	// 		facility_id_name: "facility_wheel",
	// 		des: "遊樂園的經典設施，提供俯瞰整個樂園的絕佳視角。",
	// 		content:
	// 			"透明景觀冷氣車廂，讓你輕鬆舒適眺望失落小鎮美景，到制高點時，可以將整座迷樣島嶼一覽無遺，每座車廂可容納8人，搭乘一圈約為18分鐘，夜間128種炫麗燈光秀，在摩天輪上，將美麗景致盡收眼底。",
	// 		images: "/images/facility_image_16.png",
	// 		location: "失落小島",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "2024/3/7 下午",
	// 		rule_height: "無身高限制",
	// 		rule_excitement: "1",
	// 		rule_seat: "80",
	// 		rule_other:
	// 			"心臟病、高血壓、孕婦、癲癇、脊椎/頸首部問題、骨質疏鬆症者、容易暈車暈船、身心不舒服者、65歲以上長者、裝有義肢者。",
	// 		remarks: "搭乘設施，請勿飲食；易掉落物品不可攜帶搭乘。",
	// 		iconComponent: <LuFerrisWheel />,
	// 	},
	// 	{
	// 		facility_id: "17",
	// 		title: "光影咖啡廳",
	// 		refName: setTypeShop,
	// 		facility_class_name: "type_shop",
	// 		facility_id_name: "shop_cafe_light",
	// 		des: "利用燈光和陰影創造獨特氛圍的咖啡廳。",
	// 		content:
	// 			"光影咖啡廳是一個利用燈光和陰影創造出獨特氛圍的咖啡廳，讓您在享受美味餐點的同時，感受藝術與創意的完美結合。走進咖啡廳，您會被瞬間被周圍的氣氛吸引，室內設計充滿奇幻元素，燈光與陰影的變幻交織，營造出一個如夢似幻的休閒空間，讓您彷彿進入奇異且夢幻的異世界空間。",
	// 		images: "/images/facility_image_17.png",
	// 		location: "失落小島",
	// 		open_time: "11:00~21:30",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: "100",
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaShopify />,
	// 		shop_more: "https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food",
	// 	},
	// 	{
	// 		facility_id: "18",
	// 		title: "迷幻酒吧",
	// 		refName: setTypeShop,
	// 		facility_class_name: "type_shop",
	// 		facility_id_name: "shop_bar",
	// 		des: "提供創意雞尾酒和精釀啤酒，氛圍迷幻。",
	// 		content:
	// 			"迷幻酒吧提供各種獨特的創意雞尾酒和精釀啤酒，是您體驗獨特創意雞尾酒和精釀啤酒的夢幻樂園。我們的酒吧以其迷幻的氛圍和創新的飲品設計著稱，是您放鬆和享受夜晚的理想場所。迷幻酒吧提供各種獨特的創意雞尾酒和精釀啤酒，每一款飲品都由專業調酒師精心調製，確保每一口都帶給您難以忘懷的味覺享受。",
	// 		images: "/images/facility_image_18.png",
	// 		location: "中島",
	// 		open_time: "11:00-23:30",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: "50",
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaShopify />,
	// 		shop_more: "https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food",
	// 	},
	// 	{
	// 		facility_id: "19",
	// 		title: "廁所",
	// 		refName: setTypeToilet,
	// 		facility_class_name: "type_toilet",
	// 		facility_id_name: "toilet",
	// 		des: "提供乾淨的公共廁所設施。",
	// 		content:
	// 			"廁所設計現代，內部整潔乾淨，定期有專業清潔人員維護，確保衛生環境，讓您在遊園過程中保持清潔和舒適。每個廁所區域均設有無障礙設施，為行動不便的遊客提供便利。",
	// 		images: "/images/facility_image_19.png",
	// 		location: "中島",
	// 		open_time: "9:00~24:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <PiToiletBold />,
	// 	},
	// 	{
	// 		facility_id: "20",
	// 		title: "遊客中心",
	// 		refName: setTypeVisitorCenter,
	// 		facility_class_name: "type_visitor_center",
	// 		facility_id_name: "visitor_center",
	// 		des: "提供遊園訊息和諮詢服務。",
	// 		content:
	// 			"遊客中心內設有舒適的休息區和自助資訊亭，方便您隨時獲取最新的遊園訊息，我們還提供失物招領、嬰兒推車租借和緊急聯絡等多項服務，確保您的放鬆之旅無憂無慮。無論您有任何問題或需求，歡迎隨時前來遊客中心諮詢。",
	// 		images: "/images/facility_image_20.webp",
	// 		location: "中島",
	// 		open_time: "9:00~20:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaQuestionCircle />,
	// 	},
	// 	{
	// 		facility_id: "21",
	// 		title: "異域市集",
	// 		refName: setTypeShop,
	// 		facility_class_name: "type_shop",
	// 		facility_id_name: "shop_shopping",
	// 		des: "販賣遊樂園周邊商品和紀念品。",
	// 		content:
	// 			"市集中擺滿了各式各樣的商品，包括特色紀念品、限量版收藏品、玩具、特殊服裝和居家裝飾，每一件商品都充滿了迷樣島嶼的獨特風情及特色。無論是為自己挑選一份特別的紀念品，還是為親友帶回珍貴的禮物，您都能在這裡找到最滿意的選擇。",
	// 		images: "/images/facility_image_21.png",
	// 		location: "出入口",
	// 		open_time: "9:00~17:30",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaShopify />,
	// 		shop_more: "https://www.usj.co.jp/web/zh/tw/restaurants/seasonal-food",
	// 	},
	// 	{
	// 		facility_id: "22",
	// 		title: "港口",
	// 		refName: setTypePort,
	// 		facility_class_name: "type_port",
	// 		facility_id_name: "port",
	// 		des: "提供免費的港口接送服務，現場提供行李寄存、休息區及專業的接待團隊。",
	// 		content:
	// 			"郵輪設施齊全，確保每一位遊客都能舒適、便捷地抵達遊樂園，也能舒適、安全返家，讓您的旅途從起點到終點，都充滿樂趣和放鬆，並且都能有安全、舒適的體驗。",
	// 		images: "/images/facility_image_22.png",
	// 		location: "出入口",
	// 		open_time: "8:00~20:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <MdOutlineDirectionsBoatFilled />,
	// 	},
	// 	{
	// 		facility_id: "23",
	// 		title: "售票區",
	// 		refName: setTypeTicketCenter,
	// 		facility_class_name: "type_ticket_center",
	// 		facility_id_name: "ticket_center",
	// 		des: "提供現場購票和諮詢服務。",
	// 		content:
	// 			"這裡是您夢幻旅程的起點，我們設置在迷樣島嶼入口處，方便您輕鬆、立即購買票卷，我們提供多語言服務，確保來自世界各地的您都能順利購票、展開一趟難忘的奇妙旅程。售票口也設有迷樣島嶼地圖、提供諮詢服務及寵物寄放區，期待能滿足您在迷樣島嶼的各種需求。",
	// 		images: "/images/facility_image_23.webp",
	// 		location: "出入口",
	// 		open_time: "8:00~20:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <IoTicket />,
	// 	},
	// 	{
	// 		facility_id: "24",
	// 		title: "醫護站",
	// 		refName: setTypeMedical,
	// 		facility_class_name: "type_medical",
	// 		facility_id_name: "medical_station",
	// 		des: "提供諮詢及急救服務。",
	// 		content:
	// 			"醫護站為迷樣島嶼內有需要的遊客提供緊急醫療服務和健康保障，醫護站內環境舒適、整潔，設有休息區和藥品供應點，方便遊客在需要時得到適當的處理及照護。我們的目標是讓每一位遊客都能安心享受遊樂園的美好時光，無需擔心健康問題。",
	// 		images: "/images/facility_image_24.webp",
	// 		location: "出入口",
	// 		open_time: "9:00~20:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaHospitalSymbol />,
	// 	},
	// 	{
	// 		facility_id: "25",
	// 		title: "遊園車站牌-島嶼入口",
	// 		refName: setTypeBus,
	// 		facility_class_name: "type_bus",
	// 		facility_id_name: "bus_station_enter",
	// 		des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
	// 		content:
	// 			"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
	// 		images: "/images/facility_image_25.png",
	// 		location: "出入口",
	// 		open_time: "9:10~22:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaBus />,
	// 	},
	// 	{
	// 		facility_id: "26",
	// 		title: "遊園車站牌-璀璨綠洲",
	// 		refName: setTypeBus,
	// 		facility_class_name: "type_bus",
	// 		facility_id_name: "bus_station_oasis",
	// 		des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
	// 		content:
	// 			"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
	// 		images: "/images/facility_image_25.png",
	// 		location: "璀璨綠洲",
	// 		open_time: "9:10~22:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaBus />,
	// 	},
	// 	{
	// 		facility_id: "27",
	// 		title: "遊園車站牌-嗨游洋外",
	// 		refName: setTypeBus,
	// 		facility_class_name: "type_bus",
	// 		facility_id_name: "bus_station_high",
	// 		des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
	// 		content:
	// 			"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
	// 		images: "/images/facility_image_25.png",
	// 		location: "嗨游洋外",
	// 		open_time: "9:10~22:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaBus />,
	// 	},
	// 	{
	// 		facility_id: "28",
	// 		title: "遊園車站牌-失落小島",
	// 		refName: setTypeBus,
	// 		facility_class_name: "type_bus",
	// 		facility_id_name: "bus_station_lost",
	// 		des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
	// 		content:
	// 			"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
	// 		images: "/images/facility_image_25.png",
	// 		location: "失落小島",
	// 		open_time: "9:10~22:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaBus />,
	// 	},
	// 	{
	// 		facility_id: "29",
	// 		title: "遊園車站牌-露營區",
	// 		refName: setTypeBus,
	// 		facility_class_name: "type_bus",
	// 		facility_id_name: "bus_station_room",
	// 		des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
	// 		content:
	// 			"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
	// 		images: "/images/facility_image_25.png",
	// 		location: "露營區",
	// 		open_time: "9:10~22:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaBus />,
	// 	},
	// 	{
	// 		facility_id: "30",
	// 		title: "遊園車站牌-遊客中心",
	// 		refName: setTypeBus,
	// 		facility_class_name: "type_bus",
	// 		facility_id_name: "bus_station_visitor_center",
	// 		des: "提供遊園車完整導覽迷樣島嶼，整個園區共有六個站點供您使用。",
	// 		content:
	// 			"遊園車以環保電動車輛為主，讓您在遊覽迷樣島嶼時，也能為環保出一份力，車廂內設有舒適的座椅和寬敞的空間，並提供語音導覽服務，介紹沿途設施的特色和故事。每個站牌都設有完整時刻表，利於您彈性安排行程，體驗最完整的迷樣旅程。",
	// 		images: "/images/facility_image_25.png",
	// 		location: "中島",
	// 		open_time: "9:10~22:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <FaBus />,
	// 	},
	// 	{
	// 		facility_id: "31",
	// 		title: "住宿服務區",
	// 		refName: setTypeRoom,
	// 		facility_class_name: "type_room",
	// 		facility_id_name: "room_center",
	// 		des: "提供所有有關露營的訊息、諮詢服務。",
	// 		content:
	// 			"無論是入住草原住宿區、森林小築區還是海濱度假區，我們的專業團隊都將竭誠為您提供最優質的服務。我們還提供遊園資訊、活動推薦以及各類設施的介紹服務，旨在確保每一位遊客都能享受到無憂無慮的假期，讓您在我們的迷樣島嶼中度過一段愉快且難忘的時光。",
	// 		images: "/images/facility_image_31.png",
	// 		location: "露營區",
	// 		open_time: "8:00~24:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <GiCampingTent />,
	// 	},
	// 	{
	// 		facility_id: "32",
	// 		title: "夢幻星空",
	// 		refName: setTypeRoom,
	// 		facility_class_name: "type_room",
	// 		facility_id_name: "room_grassland",
	// 		des: "圓球帳篷，仰望星空，倚看穹頂晨曦與夜色星空",
	// 		content:
	// 			"圓球帳篷是觀星愛好者的天堂。透明的穹頂設計讓您可以舒適地躺在床上，欣賞璀璨的星空。白天，您可以欣賞全景的自然風光；夜晚，則可以在溫暖的被窩中數星星。",
	// 		images: "/images/facility_image_32.jpeg",
	// 		location: "露營區",
	// 		open_time: "8:00~24:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <GiCampingTent />,
	// 	},
	// 	{
	// 		facility_id: "33",
	// 		title: "草原步調",
	// 		refName: setTypeRoom,
	// 		facility_class_name: "type_room",
	// 		facility_id_name: "room_forest",
	// 		des: "簡約帳篷，擁抱自然簡約風，享受寧靜草原夜景。",
	// 		content:
	// 			"簡約帳篷位於寬闊的草原上，讓您親近大自然，享受寧靜的時光。帳篷內部簡約舒適，配備必要的現代化設施，為您提供舒適的住宿體驗。",
	// 		images: "/images/facility_image_33.png",
	// 		location: "露營區",
	// 		open_time: "8:00~24:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <GiCampingTent />,
	// 	},
	// 	{
	// 		facility_id: "34",
	// 		title: "沉靜海洋",
	// 		refName: setTypeRoom,
	// 		facility_class_name: "type_room",
	// 		facility_id_name: "room_lake",
	// 		des: "豪華帳棚，聆聽海浪聲，感受奢華露營體驗",
	// 		content:
	// 			"豪華帳棚坐落於海岸線附近，為您帶來奢華的海濱露營體驗。寬敞的內部空間配備高級設施，讓您在舒適中欣賞壯麗的海景。您可以在私人露台上觀賞日出日落，聆聽海浪的韻律，享受無與倫比的寧靜與奢華。",
	// 		images: "/images/facility_image_34.jpg",
	// 		location: "露營區",
	// 		open_time: "8:00~24:00",
	// 		data_maintain: "每日清潔維護",
	// 		rule_height: null,
	// 		rule_excitement: null,
	// 		rule_seat: null,
	// 		rule_other: "無其他限制",
	// 		remarks: "無",
	// 		iconComponent: <GiCampingTent />,
	// 	},
	// ];

	// 點選選單，同種類設施有反應
	
	// 控制ref樣式的函式
	function handleType(typeArr) {
		typeArr.current.forEach((elem) => {
			elem.style.transition = "";
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

	// 控制區域名稱顯示
	let [areaName1, setAreaName1] = useState(false);
	let [areaName2, setAreaName2] = useState(false);
	let [areaName3, setAreaName3] = useState(false);
	let [areaName4, setAreaName4] = useState(false);
	let [areaName5, setAreaName5] = useState(false);
	let [areaName6, setAreaName6] = useState(false);
	// 區域list
	let mapArea = [
		{
			nameId: "areaName1",
			areaName: "璀璨綠洲",
			imgId: "area1",
			src: area1,
			state: areaName1,
			setShow: setAreaName1,
		},
		{
			nameId: "areaName2",
			areaName: "嗨游洋外",
			imgId: "area2",
			src: area2,
			state: areaName2,
			setShow: setAreaName2,
		},
		{
			nameId: "areaName3",
			areaName: "失落小島",
			imgId: "area3",
			src: area3,
			state: areaName3,
			setShow: setAreaName3,
		},
		{
			nameId: "areaName4",
			areaName: "中島",
			imgId: "area4",
			src: area4,
			state: areaName4,
			setShow: setAreaName4,
		},
		{
			nameId: "areaName5",
			areaName: "出入口",
			imgId: "area5",
			src: area5,
			state: areaName5,
			setShow: setAreaName5,
		},
		{
			nameId: "areaName6",
			areaName: "露營區",
			imgId: "area6",
			src: area6,
			state: areaName6,
			setShow: setAreaName6,
		},
	];

	return (
		<>
			<FacilityContent
				facilityList={facilityList}
				contentId={contentId}
				contentShow={contentShow}
				handleContentClose={handleContentClose}
			/>
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
					{mapArea.map((area) => {
						return <MapArea area={area} key={area.nameId}/>;
					})}

					{facilityList.map((facility) => {
						return (
							<MapPoint
								facility={facility}
								refList={refList}
								componentList={componentList}
								key={facility.facility_id}
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
					isSticky={isSticky}
				/>
			</div>
		</>
	);
}

export default Map;
