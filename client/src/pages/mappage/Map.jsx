import React from "react";
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
import { GiForest , GiCampingTent } from "react-icons/gi";

let iconList=[
    {id:'1',title:'夢幻瀑布',iconId:'',iconComponent:<GiForest />},
    {id:'2',title:'光影迷宮',iconId:'',iconComponent:<FaStreetView />},
    {id:'3',title:'閃耀花園',iconId:'',iconComponent:<GiForest />},
    {id:'4',title:'幻光森林',iconId:'',iconComponent:<GiForest />},
    {id:'5',title:'星空餐廳',iconId:'',iconComponent:<FaShopify />},
    {id:'6',title:'夢境咖啡廳',iconId:'',iconComponent:<FaShopify />},
    {id:'7',title:'海洋探險',iconId:'',iconComponent:<BiSolidCameraMovie />},
    {id:'8',title:'海底隧道',iconId:'',iconComponent:<GiForest />},
    {id:'9',title:'彩虹飛龍',iconId:'',iconComponent:<LuFerrisWheel />},
    {id:'10',title:'珊瑚礁之旅',iconId:'',iconComponent:<FaStreetView />},
    {id:'11',title:'海洋美饌',iconId:'',iconComponent:<FaShopify />},
    {id:'12',title:'激流勇進',iconId:'',iconComponent:<LuFerrisWheel />},
    {id:'13',title:'飛行塔',iconId:'',iconComponent:<LuFerrisWheel />},
    {id:'14',title:'旋轉木馬',iconId:'',iconComponent:<LuFerrisWheel />},
    {id:'15',title:'雲霄飛車',iconId:'',iconComponent:<LuFerrisWheel />},
    {id:'16',title:'摩天輪',iconId:'',iconComponent:<LuFerrisWheel />},
    {id:'17',title:'光影咖啡廳',iconId:'',iconComponent:<FaShopify />},
    {id:'18',title:'迷幻酒吧',iconId:'',iconComponent:<FaShopify />},
    {id:'19',title:'廁所',iconId:'',iconComponent:<PiToiletBold />},
    {id:'20',title:'遊客中心',iconId:'',iconComponent:<FaQuestionCircle />},
    {id:'21',title:'異域市集',iconId:'',iconComponent:<FaShopify />},
    {id:'22',title:'港口',iconId:'',iconComponent:<MdOutlineDirectionsBoatFilled />},
    {id:'23',title:'售票區',iconId:'',iconComponent:<IoTicket />},
    {id:'24',title:'醫護站',iconId:'',iconComponent:<FaHospitalSymbol />},
    {id:'25',title:'遊園車站牌',iconId:'',iconComponent:<FaBus />},
    {id:'26',title:'住宿服務區',iconId:'',iconComponent:<GiCampingTent />},
    {id:'27',title:'草原住宿區',iconId:'',iconComponent:<GiCampingTent />},
    {id:'28',title:'第二住宿區',iconId:'',iconComponent:<GiCampingTent />},
    {id:'29',title:'第三住宿區',iconId:'',iconComponent:<GiCampingTent />},
]

function Map(){
    
    return(
        <div id="interactiveMap">
            <img src={map} alt="" id="imgInteractiveMap"></img>
            
            
            <MapPoint mapPointId={iconList[0].className} iconComponent={iconList[0].iconComponent} />
            
            <BtnArea></BtnArea>
        </div>
    )
}

export default Map;