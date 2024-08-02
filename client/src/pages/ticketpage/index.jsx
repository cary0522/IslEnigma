import React, { useState } from "react";
// components
// import Header from "/src/components/layout/Navbar/Navbar.jsx";
// import Footer from "/src/components/layout/Footer/Footer.jsx";
import Banner from "./Banner.jsx";
import BookingWay from "./BookingWay.jsx";
import CompareTickets from "./CompareTickets.jsx";
import TicketRule from "./TicketRule.jsx";
import AlertInt from "./AlertInt.jsx";
import AlertCart from './AlertCart.jsx';

// css
import "./ticketPage.scss";

function TicketPage() {

	

	// 設定 alert 內容
	let [alertContent, setAlertContent] = useState("");
	let [btnContent, setBtnContent] = useState("前往選購");
	// 設定是否跳出 alert-票數
	let [alertShow, setAlertShow] = useState(false);
	let handleAlertShow = () => {
		document.body.style.overflow = "hidden";
		setAlertShow(true);
		setAlertContent("請至少選購一張票唷！");
	};
	let closeAlertShow = () => {
		document.body.style.overflow = "auto";
		setAlertShow(false);
	};
	// 設定是否跳出 alert-日期
	let handleAlertShowDate = () => {
		document.body.style.overflow = "hidden";
		setAlertShow(true);
		setAlertContent("預計哪天到訪迷樣島嶼呢？");
	};
		// 得到使用者選取的日期，並把月曆關掉
		let [bookingDate, setBookingDate] = useState("");
		let selectDate = (value) => {
			closeCalendar();
			setBookingDate(value.toLocaleDateString());
		};
		// 得到票種、張數
		let [standardNum, setStandardNum] = useState(0);
		let plusStandard=()=>{
			setStandardNum(standardNum+1)
		}
		let minusStandard=()=>{
			setStandardNum(standardNum-1)
		}
		let zeroStandard=()=>{
			setStandardNum(0)
		}
		let [VIPNum, setVIPNum] = useState(0);
		let plusVIP=()=>{
			setVIPNum(VIPNum+1)
		}
		let minusVIP=()=>{
			setVIPNum(VIPNum-1)
		}
		let zeroVIP=()=>{
			setVIPNum(0)
		}
	// 設定是否跳出 alert-成功加入購物車
	let [cartShow , setCartShow]=useState(false)
	let handleAlertShowCart = () => {
		setCartShow(true);
	};
	let closeAlertShowCart = () => {
		setCartShow(false);
	};
	// 訂票規定陣列
	let ruleList = [
		{
			id: 1,
			title: "訂票規定",
			content: [
				{
					id: "rule1",
					text: "1. 因應節日、季節不同，相關營業時間依現場公告為準。",
				},
				{ id: "rule2", text: "2. 現場售票截止時間為閉園前二小時。" },
				{
					id: "rule3",
					text: "3. 線上購票者，訂單成立一小時內要完成付款，超過付款期限系統會自動取消訂單。",
				},
				{
					id: "rule4",
					text: "4. 針對與配合旅行社購買之門票兌換券若有任何疑問，依門票兌換券上相關文字說明為準，或洽配合旅行社客服詢問。",
				},
			],
		},
		{
			id: 2,
			title: "其他注意事項",
			content: [
				{
					id: "other1",
					text: "1. 為維護遊園區品質及遊客安全，當園區遊客量達滿載標準時，現場將進行入園入數管制暫停開放入園（含已持票遊客）。",
				},
				{ id: "other2", text: "2. 票價及營業時間如有變更請以現場公告為準。" },
				{ id: "other3", text: "3. IslEnigma 遊樂園限制 18 歲以上成年人入園。" },
				{ id: "other4", text: "4. 園區內全面禁菸，使用設施時禁止飲食。" },
				{
					id: "other5",
					text: "5. 禁止從事可能危害自己、他人安全，或毀損園區設施設備之行為。",
				},
				{
					id: "other6",
					text: "6. 禁止攜帶含酒精之飲料、危險或易燃物、法律規定之違禁或列管物品等。",
				},
			],
		},
		{
			id: 3,
			title: "取消政策",
			content: [
				{ id: "cancel1", text: "1. 任一商品經兌換使用後，恕不接受退款退費。" },
				{
					id: "cancel2",
					text: "2. 其他購票平台所購買的相關套票須自行與購票平台退票，本園區無提供退票服務。",
				},
				{
					id: "cancel3",
					text: "3. 紙本票券：請持紙票至迷樣島嶼售票亭進行退票，售票亭營業時間為 8:00-16:00。",
				},
				{
					id: "cancel4",
					text: "4. 線上購票者：請在迷樣島嶼網站登入會員帳號，並自訂單查詢操作「退票申請」，該筆退票全額票款將退回原刷卡銀行，銀行退款時間依各家銀行作業時間為準。",
				},
				{ id: "cancel5", text: "5. 退票將酌收票面 3% 處理費。" },
				{
					id: "cancel6",
					text: "6. 為避免產生不必要之糾紛及權益損害，購買票券前，請先瞭解並同意以上規則，如不同意請勿購買；當進行購票及退票作業時，將視同您已瞭解並同意遵守以上全部事項。",
				},
				{ id: "cancel7", text: "7. 如有任何爭議，迷樣島嶼保留最終決定權。" },
			],
		},
	];
	// 判斷是否要顯示月曆
	let [dateShow, setDateShow] = useState(false);
	let showCalendar = (e) => {
		e.stopPropagation();
		setDateShow((dateShow = !dateShow));
	};
	let closeCalendar = () => {
		setDateShow(false);
	};

	return (
		<div className="ticketPage">
			{/* <Header></Header> */}
			<AlertInt
				alertShow={alertShow}
				closeAlertShow={closeAlertShow}
				alertContent={alertContent}
				btnContent={btnContent}
				showCalendar={showCalendar}
			/>
			<AlertCart
				cartShow={cartShow}
				closeAlertShowCart={closeAlertShowCart}
				bookingDate={bookingDate}
				standardNum={standardNum}
				VIPNum={VIPNum}
			/>
			<Banner
				alertShow={alertShow}
				handleAlertShow={handleAlertShow}
				handleAlertShowDate={handleAlertShowDate}
				dateShow={dateShow}
				showCalendar={showCalendar}
				closeCalendar={closeCalendar}
				cartShow={cartShow}
				handleAlertShowCart={handleAlertShowCart}
				closeAlertShowCart={closeAlertShowCart}
				bookingDate={bookingDate}
				selectDate={selectDate}
				standardNum={standardNum}
				setStandardNum={setStandardNum}
				plusStandard={plusStandard}
				minusStandard={minusStandard}
				zeroStandard={zeroStandard}
				VIPNum={VIPNum}
				setVIPNum={setVIPNum}
				plusVIP={plusVIP}
				minusVIP={minusVIP}
				zeroVIP={zeroVIP}
			/>
			<BookingWay />
			<CompareTickets />
			{ruleList.map((rule) => {
				return (
					<TicketRule
						ruleTitle={rule.title}
						ruleContent={rule.content}
						key={rule.id}
					/>
				);
			})}
			{/* <Footer></Footer> */}
		</div>
	);
}

export default TicketPage;
