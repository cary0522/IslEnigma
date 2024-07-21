import React, { Component } from "react";
import mapPointSvg from "./mapPoint.svg";

function MapPoint({ mapPointId , iconComponent } ) {
	return (
		<div id={mapPointId} className="mapPointContainer col-1">
			<div className="svgContainer">
				{/* <img src={mapPointSvg} alt="" /> */}
                {iconComponent}
			</div>
		</div>
	);
}

export default MapPoint;
