import React from "react";
// components
import Header from "/src/components/layout/Header.jsx";
import Footer from "/src/components/layout/Footer.jsx";
import Banner from "./Banner.jsx";
import BookingWay from "./BookingWay.jsx";
import CompareTickets from "./CompareTickets.jsx";
import TicketRule from "./TicketRule.jsx";

// css
import "./ticketPage.scss";

function TicketPage() {

	let bookRule =['1. 因應節日、季節不同，相關營業時間依現場公告為準。','2. 現場售票截止時間為閉園前二小時。','3. 線上購票者，訂單成立一小時內要完成付款，超過付款期限系統會自動取消訂單。','4. 針對與配合旅行社購買之門票兌換券若有任何疑問，依門票兌換券上相關文字說明為準，或洽配合旅行社客服詢問。'];
	let otherNote = ['1. 為維護遊園區品質及遊客安全，當園區遊客量達滿載標準時，現場將進行入園入數管制暫停開放入園（含已持票遊客）。','2. 票價及營業時間如有變更請以現場公告為準。','3. IslEnigma 遊樂園限制 18 歲以上成年人入園。','4. 園區內全面禁菸，使用設施時禁止飲食。','5. 禁止從事可能危害自己、他人安全，或毀損園區設施設備之行為。','6. 禁止攜帶含酒精之飲料、危險或易燃物、法律規定之違禁或列管物品等。'];
	let cancelNote = ['1. 任一商品經兌換使用後，恕不接受退款退費。','2. 其他購票平台所購買的相關套票須自行與購票平台退票，本園區無提供退票服務。','3. 紙本票券：請持紙票至迷樣島嶼售票亭進行退票，售票亭營業時間為 8:00-16:00。','4. 線上購票者：請在迷樣島嶼網站登入會員帳號，並自訂單查詢操作「退票申請」，該筆退票全額票款將退回原刷卡銀行，銀行退款時間依各家銀行作業時間為準。','5. 退票將酌收票面 3% 處理費。','6. 為避免產生不必要之糾紛及權益損害，購買票券前，請先瞭解並同意以上規則，如不同意請勿購買；當進行購票及退票作業時，將視同您已瞭解並同意遵守以上全部事項。','7. 如有任何爭議，迷樣島嶼保留最終決定權。',];
	return (
		<div className="ticketPage">
			<Header></Header>
			<Banner />
			<BookingWay />
			<CompareTickets />
			<TicketRule ruleTitle={"訂票規定"} ruleContent={bookRule}/>
			<TicketRule ruleTitle={"其他注意事項"} ruleContent={otherNote}/>
			<TicketRule ruleTitle={"取消政策"} ruleContent={cancelNote}/>
			<Footer></Footer>
		</div>
	);
}

export default TicketPage;
