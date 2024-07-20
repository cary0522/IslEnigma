import React from "react";
// icons
import { IoTicket } from "react-icons/io5";
import { LuFerrisWheel } from "react-icons/lu";
import {PiToiletBold} from 'react-icons/pi'
import { FaQuestionCircle , FaHospitalSymbol , FaBus , FaShopify , FaStreetView} from "react-icons/fa";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GiForest , GiCampingTent } from "react-icons/gi";

function BtnArea(){
    return(
        <div id="btnArea" className="col-11 col-md-10 col-lg-8 col-xl-6">
            <IoTicket size={40} />
            <LuFerrisWheel size={40} />
            <GiForest size={40} />
            <FaStreetView size={40} />
            <BiSolidCameraMovie size={40} />
            <FaShopify size={40} />
            <PiToiletBold size={40} />
            <FaQuestionCircle size={40} />
            <MdOutlineDirectionsBoatFilled size={40} />
            <FaBus size={40} />
            <FaHospitalSymbol size={40} />
            <GiCampingTent size={40} />
        </div>
    )
}

export default BtnArea;