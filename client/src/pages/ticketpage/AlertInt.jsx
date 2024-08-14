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
				<div className="divAlert">
					<div className="col-10 col-md-3">
						<img src="/00myIcon/about.png" alt="" />
					</div>
					<div className="col-10 col-md-9" id="divAlertContent">
						<p>{alertContent}</p>
					</div>
					<p className="btnClose" onClick={closeAlertShow}>
						X
					</p>
					<div className="col-12 divAlertBtn">
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
				</div>
			);
		} else {
			return (
				<div className="divAlert">
					<div className="col-10">
						<img src="/public/00myIcon/about.png" alt="" />
					</div>
					<div className="col-10" id="divAlertContent">
						<p>{alertContent}</p>
					</div>
					<p className="btnClose" onClick={closeAlertShow}>
						X
					</p>
					<div className="col-12 divAlertBtn">
						<button className="col-10 button" onClick={closeAlertShow}>
							{btnContent}
						</button>
					</div>
				</div>
			);
		}
	}
}

export default AlertInt;
