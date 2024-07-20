import React from "react";
// components
import Header from "/src/components/layout/header.jsx";
import Footer from "/src/components/layout/footer.jsx";
import Banner from "./banner.jsx";
import BookingWay from "./bookingWay.jsx";
import CompareTickets from "./compareTickets.jsx";
import TicketRule from "./ticketRule.jsx";

// css
import "./ticketPage.scss";

function TicketPage() {
	return (
		<div className="ticketPage">
			<Header></Header>
			<Banner />
			<BookingWay />
			<CompareTickets />
			<TicketRule ruleTitle={"訂票規定"} ruleContent={"erer"}/>
			<TicketRule ruleTitle={"其他注意事項"} ruleContent={"ere"}/>
			<TicketRule ruleTitle={"取消政策"} ruleContent={"erer"}/>
			<Footer></Footer>
		</div>
	);
}

export default TicketPage;
