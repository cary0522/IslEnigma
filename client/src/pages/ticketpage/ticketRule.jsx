import React, { Component, useState } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

function TicketRule({ ruleTitle, ruleContent }) {

	const topBorderRadius = {borderRadius:'20px 20px 0px 0px',transition: 'all .5s'};
	const topBorderRadiusClick = {borderRadius:'50px 20px 0px 0px',transition: 'all .5s'};

	const [style , setStyle] = useState('svgTriangle');
	const [topBorderStyle , setTopBorderStyle] = useState(topBorderRadius);
	const [ruleContentCssList , setRuleContentCssList] = useState('ticketRuleContent col-10 ticketRuleContentNone');

	const changeStyle = ()=>{
		if(style != 'svgTriangle'){
			setStyle('svgTriangle');
			setTopBorderStyle(topBorderRadius);
			setRuleContentCssList('ticketRuleContent col-10 ticketRuleContentNone');
		}else{
			setStyle('svgTriangleClick');
			setTopBorderStyle(topBorderRadiusClick)
			setRuleContentCssList('ticketRuleContent col-10 ticketRuleContentBlock')
		}
	}

	return (
		<div id="ticketRuleArea" className="">
			<div className="ticketRuleTopBorder col-10" onClick={()=>{changeStyle()}} style={topBorderStyle}>
				<div className="leftCol">
					<TbTriangleFilled size={25} className={style} />
					<p>{ruleTitle}</p>
				</div>
				<div className="rightCol">
					<FaCircle size={20}/>
				</div>
			</div>
			<div className={ruleContentCssList} >
				{ruleContent.map((text)=>{
					return <p>{text}</p>
				})}

			</div>
		</div>
	);
}

export default TicketRule;
