import React, { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import "../../style.scss";

function BookingTicketOption({
	ticketOption,
	ticketPrice,
	ticketNum,
	setTicketNum,
	handleAlertShow
}) {
	return (
		<div className="divBookingItem container">
			<div className="col-6">
				<p>{ticketOption}</p>
				<small>{ticketPrice}</small>
			</div>
			<div className="divTicketNum col-6">
				<div
					className="divIcons col-3"
					onClick={() => {
						if (ticketNum > 0) {
							setTicketNum(ticketNum - 1);
						} else if (isNaN(ticketNum)) {
							handleAlertShow();
							setTicketNum(0);
						} else {
							handleAlertShow();
							setTicketNum(0);
						}
					}}
				>
					<FaCircleMinus size={25} className="bookingAreaIcon" />
				</div>
				<input
					type="tel"
					pattern="^[0-9]{1}$"
					className="col-3"
					value={ticketNum}
					onChange={(e) => {
						console.log(e.target.value);
						e.stopPropagation();
						if (e.target.value == "") {
							handleAlertShow();
							setTicketNum(0);
						} else if (e.target.value >= 0) {
							setTicketNum(parseInt(e.target.value));
						} else {
							handleAlertShow();
							setTicketNum(0);
						}
					}}
				/>
				<div
					className="divIcons col-3"
					onClick={() => {
						if (ticketNum >= 0) {
							setTicketNum(ticketNum + 1);
						} else {
							handleAlertShow();
							setTicketNum(0);
						}
					}}
				>
					<FaCirclePlus size={25} className="bookingAreaIcon" />
				</div>
			</div>
		</div>
	);
}

export default BookingTicketOption;
