import React from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import "../../style.scss";

function BookingTicketOption({
	ticketOption,
	ticketPrice,
	ticketNum,
	setPlus,
	setMinus,
	setZero,
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
							setMinus();
						} else if (isNaN(ticketNum)) {
							handleAlertShow();
							setZero();
						} else {
							handleAlertShow();
							setZero();
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
							setZero();
						} else if (e.target.value >= 0) {
							setTicketNum(parseInt(e.target.value));
						} else {
							handleAlertShow();
							setZero();
						}
					}}
				/>
				<div
					className="divIcons col-3"
					onClick={() => {
						if (ticketNum >= 0) {
							setPlus();
						} else {
							handleAlertShow();
							setZero();
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
