import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BookingTicketOption from "./BookingTicketOption.jsx";
import Button from "/src/components/common/Button.jsx";
import DateCalendar from "./DateCalendar.jsx";

import "react-calendar/dist/Calendar.css";

function BookingArea({
	dateShow,
	closeCalendar,
	showCalendar,
	handleAlertShow,
	handleAlertShowDate,
	handleAlertShowCart
}) {
	// 點選左右箭頭更換月份
	let [date, setDate] = useState(new Date());
	let changeView = ({ activeStartDate }) => {
		setDate(activeStartDate);
	};
	// 設定不可選的日期樣式
	let today = new Date();
	today.setHours(0, 0, 0, 0); // 需要清除時間再進行比較，否則當天也會小於 new Date()
	let tileClassName = ({ date, view }) => {
		if (view === "month" && date < today) {
			return "disableSelectDate";
		}
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
	// 整理資料傳到購物車
	function addCart() {
		if (bookingDate) {
			if (standardNum > 0 || VIPNum > 0) {
				// console.log("cart", [
				// 	{
				// 		booked_date: bookingDate,
				// 		product_standard:'標準票',
				// 		num_standard: standardNum,
				// 		price_standard: standardNum * 2000,
				// 		product_standard:'VIP票',
				// 		num_VIP: VIPNum,
				// 		price_VIP: VIPNum * 5000,
				// 	},
				// ]);
				let cart = {
					booked_date: bookingDate,
					product_standard:'標準票',
					num_standard: standardNum,
					price_standard: standardNum * 2000,
					product_VIP:'VIP票',
					num_VIP: VIPNum,
					price_VIP: VIPNum * 5000,
				}
				let cartDate = JSON.stringify(cart)
				fetch('http://localhost:3000/shoppingCart',{
					method:'POST',
					headers:{'Content-Type':'application/json'},
					body:cartDate
				})
				handleAlertShowCart();
			} else {
				handleAlertShow();
			}
		} else {
			handleAlertShowDate();
		}
	}

	return (
		<div className="bookingArea">
			<div className="divBookingItem container">
				<div className="col-6">
					<p>日期</p>
				</div>
				<div className="col-6 divCalendar">
					<input
						required
						type="tel"
						className="col-6"
						value={bookingDate}
						onClick={(e) => {
							showCalendar(e);
						}}
						onChange={(e) => {
							showCalendar(e);
						}}
					/>
					<FaCalendarAlt
						size={30}
						onClick={(e) => {
							showCalendar(e);
						}}
						className="col-6"
					/>
					<DateCalendar
						date={date}
						dateShow={dateShow}
						selectDate={selectDate}
						changeView={changeView}
						tileClassName={tileClassName}
						onClick={(e) => {
							e.stopPropagation();
						}}
					/>
				</div>
			</div>
			<BookingTicketOption
				ticketOption={"VIP票"}
				ticketPrice={"NT$ 5,000"}
				ticketNum={VIPNum}
				setPlus={plusVIP}
				setMinus={minusVIP}
				setZero={zeroVIP}
				handleAlertShow={handleAlertShow}
			/>
			<BookingTicketOption
				ticketOption={"標準票"}
				ticketPrice={"NT$ 2,000"}
				ticketNum={standardNum}
				setPlus={plusStandard}
				setMinus={minusStandard}
				setZero={zeroStandard}
				setTicketNum={setVIPNum}
				handleAlertShow={handleAlertShow}
			/>
			<div
				onClick={(e) => {
					addCart(e);
				}}
			>
				<Button btnContent={"加入購物車"} />
			</div>
		</div>
	);
}

export default BookingArea;
