import LogoArea from "/src/components/common/LogoArea.jsx";

import imgLogo from "/00logo/LogoType_Light_2.png";

function Banner() {
	return (
		<header>
			<div className="banner" id="banner">
				<div className="bannerContainer">
					<div className="logoContainer">
						<LogoArea imgLogo={imgLogo} areaName={"交通資訊"} />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Banner;
