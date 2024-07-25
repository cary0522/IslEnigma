import React from "react";

function FacilityDes({
	facilityList,
	desId,
	desShow,
	handleDesClose,
	handleContent,
	pageX,pageY
}) {
	let style = {
		left:pageX+80 +'px' ,
		top:pageY+10 + 'px'
	}
	if (desShow) {
		for (let facility of facilityList) {
			if (facility.id === desId) {
				return (
					<>
						<div className="divDes" style={style}>
							<img src="/src/pages/mappage/mapPointHover.svg" />
							<div>
								<div>{facility.title}</div>
								<div>{facility.des}</div>
								<button
									id="btnContent"
									onClick={(e) => {
										e.stopPropagation();
										handleContent(facility.id);
									}}
								>
									詳細介紹
								</button>
							</div>
							<div id="btnX" onClick={handleDesClose}>
								X
							</div>
						</div>
					</>
				);
			}
		}
	} else {
		return <></>;
	}
}

export default FacilityDes;
