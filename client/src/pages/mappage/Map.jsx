import React, { useEffect, useLayoutEffect, useState } from "react";
import map from '/public/images/map-whole2.png'
import BtnArea from "./btnArea.jsx";
import MapPoint from "./mapPoint.jsx";

// icons
import { IoTicket } from "react-icons/io5";
import { LuFerrisWheel } from "react-icons/lu";
import {PiToiletBold} from 'react-icons/pi'
import { FaQuestionCircle , FaHospitalSymbol , FaBus , FaShopify , FaStreetView} from "react-icons/fa";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GiForest , GiCampingTent, GiSixEyes } from "react-icons/gi";

let facilityList=[
    {id:'1',title:'夢幻瀑布',iconId:'view_fall',iconComponent:<GiForest />},
    {id:'2',title:'光影迷宮',iconId:'VR_maze',iconComponent:<FaStreetView />},
    {id:'3',title:'閃耀花園',iconId:'view_garden',iconComponent:<GiForest />},
    {id:'4',title:'幻光森林',iconId:'view_forest',iconComponent:<GiForest />},
    {id:'5',title:'星空餐廳',iconId:'shop_restaurant_sky',iconComponent:<FaShopify />},
    {id:'6',title:'夢境咖啡廳',iconId:'shop_cafe_dream',iconComponent:<FaShopify />},
    {id:'7',title:'海洋探險',iconId:'theater_sea',iconComponent:<BiSolidCameraMovie />},
    {id:'8',title:'海底隧道',iconId:'view_sea_tunnel',iconComponent:<GiForest />},
    {id:'9',title:'彩虹飛龍',iconId:'facility_rainbow',iconComponent:<LuFerrisWheel />},
    {id:'10',title:'珊瑚礁之旅',iconId:'VR_coral',iconComponent:<FaStreetView />},
    {id:'11',title:'海洋美饌',iconId:'shop_restaurant_sea',iconComponent:<FaShopify />},
    {id:'12',title:'激流勇進',iconId:'facility_river',iconComponent:<LuFerrisWheel />},
    {id:'13',title:'飛行塔',iconId:'facility_sky_tower',iconComponent:<LuFerrisWheel />},
    {id:'14',title:'旋轉木馬',iconId:'facility_carousel',iconComponent:<LuFerrisWheel />},
    {id:'15',title:'雲霄飛車',iconId:'facility_roller_coaster',iconComponent:<LuFerrisWheel />},
    {id:'16',title:'摩天輪',iconId:'facility_wheel',iconComponent:<LuFerrisWheel />},
    {id:'17',title:'光影咖啡廳',iconId:'shop_cafe_light',iconComponent:<FaShopify />},
    {id:'18',title:'迷幻酒吧',iconId:'shop_bar',iconComponent:<FaShopify />},
    {id:'19',title:'廁所',iconId:'toilet',iconComponent:<PiToiletBold />},
    {id:'20',title:'遊客中心',iconId:'visitor_center',iconComponent:<FaQuestionCircle />},
    {id:'21',title:'異域市集',iconId:'shop_shopping',iconComponent:<FaShopify />},
    {id:'22',title:'港口',iconId:'port',iconComponent:<MdOutlineDirectionsBoatFilled />},
    {id:'23',title:'售票區',iconId:'ticket_center',iconComponent:<IoTicket />},
    {id:'24',title:'醫護站',iconId:'medical_station',iconComponent:<FaHospitalSymbol />},
    {id:'25',title:'遊園車站牌',iconId:'bus_station',iconComponent:<FaBus />},
    {id:'26',title:'住宿服務區',iconId:'room_center',iconComponent:<GiCampingTent />},
    {id:'27',title:'草原住宿區',iconId:'room_grassland',iconComponent:<GiCampingTent />},
    {id:'28',title:'第二住宿區',iconId:'room_second',iconComponent:<GiCampingTent />},
    {id:'29',title:'第三住宿區',iconId:'room_third',iconComponent:<GiCampingTent />},
]

function Map(){

    return(
        <div id="interactiveMap">
            <img src={map} alt="" id="imgInteractiveMap"></img>
            {facilityList.map((facility)=>{
                return(
                    <MapPoint mapPointId={facility.iconId} iconComponent={facility.iconComponent} key={facility.id}/>
                )
            })}
            <BtnArea></BtnArea>
        </div>
    )
}

export default Map;