import React from "react";

function BookingWayIntro({wayName,wayIntro}){

    return (
        <div className="divBookingWayIntro col-12">
            <p className="pIntroTitle">{wayName}</p>
            {wayIntro.map((item)=>{
                return <p className="col-10 pIntroContent" key={item.id} >{item.content}</p>
            })}
        </div>
    )
}

export default BookingWayIntro