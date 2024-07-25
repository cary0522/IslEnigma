import React from "react";
// icons
import { IoTicket } from "react-icons/io5";
import { LuFerrisWheel } from "react-icons/lu";
import {PiToiletBold} from 'react-icons/pi'
import { FaQuestionCircle , FaHospitalSymbol , FaBus , FaShopify , FaStreetView} from "react-icons/fa";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GiForest , GiCampingTent } from "react-icons/gi";

function BtnArea({handleType,
    type_ticket_center,
    type_facility,
    type_view,
    type_VR,
    type_theater,
    type_shop,
    type_toilet,
    type_visitor_center,
    type_port,
    type_bus,
    type_medical,
    type_room}){
    return(
        <div id="btnArea" className="col-11 col-md-10 col-lg-8 col-xl-6">
            <IoTicket id="type_ticket_center" onClick={()=>{handleType(type_ticket_center)}} />
            <LuFerrisWheel id="type_facility" onClick={()=>{handleType(type_facility)}}  />
            <GiForest id="type_view" onClick={()=>{handleType(type_view)}} />
            <FaStreetView id="type_VR" onClick={()=>{handleType(type_VR)}} />
            <BiSolidCameraMovie id="type_theater" onClick={()=>{handleType(type_theater)}} />
            <FaShopify id="type_shop" onClick={()=>{handleType(type_shop)}} />
            <PiToiletBold id="type_toilet" onClick={()=>{handleType(type_toilet)}} />
            <FaQuestionCircle id="type_visitor_center" onClick={()=>{handleType(type_visitor_center)}} />
            <MdOutlineDirectionsBoatFilled id="type_port" onClick={()=>{handleType(type_port)}} />
            <FaBus id="type_bus" onClick={()=>{handleType(type_bus)}} />
            <FaHospitalSymbol id="type_medical" onClick={()=>{handleType(type_medical)}} />
            <GiCampingTent id="type_room" onClick={()=>{handleType(type_room)}} />
        </div>
    )
}

export default BtnArea;