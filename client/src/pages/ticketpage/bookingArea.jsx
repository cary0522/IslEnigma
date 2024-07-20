import React from "react";
import BookingTicketOption from "./bookingTicketOption.jsx";
import Button from "/src/components/common/button.jsx";
import { FaCalendarAlt } from "react-icons/fa";

function BookingArea() {
	return (
		<div className="bookingArea">
			<div className="divBookingItem container">
				<div className="col-6">
					<p>日期</p>
				</div>
				<div className="col-6 divCalendar">
					<FaCalendarAlt size={30} />
				</div>
			</div>
			<BookingTicketOption ticketOption={"VIP票"} ticketPrice={"NT$ 5,000"} />
			<BookingTicketOption ticketOption={"標準票"} ticketPrice={"NT$ 2,000"} />
			<Button btnContent={"加入購物車"}/>
		</div>
	);
}

export default BookingArea;
