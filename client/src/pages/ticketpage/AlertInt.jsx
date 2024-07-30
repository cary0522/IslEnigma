import React from "react";

function AlertInt({
	alertShow,
	closeAlertShow,
	alertContent,
	btnContent,
	showCalendar,
}) {
	if (alertShow) {
		if (alertContent == "預計哪天到訪迷樣島嶼呢？") {
			return (
				<div id="divAlert" className="col-8 col-sm-6 col-xl-4">
					<div className="col-10 col-md-3">
						<img src="/public/00myIcon/about.png" alt="" />
					</div>
					<div className="col-10 col-md-9" id="divAlertContent">
						<h6>{alertContent}</h6>
					</div>
					<p id="btnAlert" onClick={closeAlertShow}>
						X
					</p>
					<button
						className="col-12 col-md-6 button"
						onClick={(e) => {
							closeAlertShow();
							showCalendar(e);
						}}
					>
						{btnContent}
					</button>
				</div>
			);
		} else {
			return (
				<div id="divAlert" className="col-8 col-sm-6 col-xl-4">
					<div className="col-10 col-md-3">
						<img src="/public/00myIcon/about.png" alt="" />
					</div>
					<div className="col-10 col-md-9" id="divAlertContent">
						<h6>{alertContent}</h6>
					</div>
					<p id="btnAlert" onClick={closeAlertShow}>
						X
					</p>
					<button className="col-12 col-md-6 button" onClick={closeAlertShow}>
						{btnContent}
					</button>
				</div>
			);
		}
	}
}

export default AlertInt;
