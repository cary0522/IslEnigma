import React from "react";

function MapPoint({ facility, refList, componentList, handleDes }) {
	return (
		<div id={facility.facility_id_name} className="mapPointContainer col-1">
			<div
				className="svgContainer"
				onClick={(e) => {
					handleDes(e, facility.facility_id);
				}}
				ref={refList[facility.facility_class_name]}
			>
				{componentList[facility.facility_class_name]}
			</div>
		</div>
	);
}

export default MapPoint;
