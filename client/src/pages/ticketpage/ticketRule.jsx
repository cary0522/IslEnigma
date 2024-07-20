import React, { Component } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

function TicketRule({ ruleTitle, ruleContent }) {
	return (
		<div id="ticketRuleArea" className="">
			<div className="ticketRuleTopBorder col-10">
				<div className="leftCol">
					<TbTriangleFilled size={25} className="svgTriangle" />
					<p>{ruleTitle}</p>
				</div>
				<div className="rightCol">
					<FaCircle size={20}/>
				</div>
			</div>
			<div className="ticketRuleContent">{ruleContent}</div>
		</div>
	);
}

export default TicketRule;
