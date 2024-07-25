import React ,{useState} from "react";
import BookingTicketOption from "./BookingTicketOption.jsx";
import Button from "/src/components/common/Button.jsx";
import { FaCalendarAlt } from "react-icons/fa";

function BookingArea() {
	const [standardNum , setStandardNum ] = useState(0);
	const [VIPNum , setVIPNum ] = useState(0);

	function addCart(){
		console.log('cart',[
			{date:'',
				standardNum:standardNum,
				standardPrice:(standardNum*2000),
				VIPNum:VIPNum,
				VIPPrice:(VIPNum*5000)
			}])
	}

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
			<BookingTicketOption ticketOption={"VIP票"} ticketPrice={"NT$ 5,000"} ticketNum={standardNum} setTicketNum={setStandardNum} />
			<BookingTicketOption ticketOption={"標準票"} ticketPrice={"NT$ 2,000"} ticketNum={VIPNum} setTicketNum={setVIPNum} />
			<div onClick={()=>{addCart()}}>
			<Button btnContent={"加入購物車"} />
			</div>
		</div>
	);
}

export default BookingArea;
