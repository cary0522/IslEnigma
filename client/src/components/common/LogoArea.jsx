import React from "react";

function LogoArea({ imgLogo, areaName }) {
	return (
		<div className="logoArea">
			<div className="divOutside">
				<img src={imgLogo} alt="" id="imgLogoArea" />
			</div>
			<div className="divOutside">
				<div className="divPageName">
					<span className="linePageName"></span>
					<h3>{areaName}</h3>
					<span className="linePageName"></span>
				</div>
			</div>
		</div>
	);
}

export default LogoArea;
