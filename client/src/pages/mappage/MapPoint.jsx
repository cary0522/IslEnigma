import React from "react";

function MapPoint({ facility ,handleDes}) {

	return (
		<div id={facility.iconId} className="mapPointContainer col-1">
			<div className="svgContainer" onClick={(e)=>{handleDes(e,facility.id)}} ref={facility.refName}>{facility.iconComponent}</div>
		</div>
	);
}

export default MapPoint;
