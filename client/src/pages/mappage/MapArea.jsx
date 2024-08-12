import React from 'react'

function MapArea({area}){

    function enter(){
        area.setShow(true)
    }

    function leave(){
        area.setShow(false)
    }
    return(
        <>
           <div className="areaName" id={area.nameId} style={{display:area.state?'block':'none'}} >{area.areaName}</div>
           <img src={area.src} alt="" className="imgAreaItem" id={area.imgId} onMouseOver={enter} onMouseLeave={leave} /> 
        </>
    )
}

export default MapArea;