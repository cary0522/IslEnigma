import React from "react";
import { FaCirclePlus , FaCircleMinus } from "react-icons/fa6";
import "../../style.scss";

function BookingTicketOption({ticketOption,ticketPrice}){
    return(
        <div className="divBookingItem container">
            <div className="col-6">
                <p>{ticketOption}</p>
                <small>{ticketPrice}</small>
            </div>
            <div className="divTicketNum col-6">
                <div className="divIcons col-3">
                    <FaCircleMinus size={25} className="bookingAreaIcon"/>
                </div>
                <input type="tel" pattern="^[0-9]{1}$" className="col-3"/>
                <div className="divIcons col-3">
                    <FaCirclePlus size={25} className="bookingAreaIcon"/>
                </div>
            </div>
        </div>
    )
}

export default BookingTicketOption;