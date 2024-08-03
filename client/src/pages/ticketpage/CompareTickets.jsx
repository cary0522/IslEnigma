import React from "react";

// icons
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaCrown } from "react-icons/fa";

function CompareTickets() {
	return (
		<div id="divCompare" className="divBackground col-10">
			<div className="divTable col-10">
				<FaCrown size={40} className="iconCrown" />
				<div className="divTableHead">
					<div className="divDisplayNone"></div>
					<div className="">
						<span>IslEnigma </span>
						<span>Standard</span>
					</div>
					<div className="">
						<span>IslEnigma </span>
						<span>VIP</span>
					</div>
				</div>
				<div>
					<div className="divTableTr">
						<div className="compareTitle">享受園內設施</div>
						<div>
							<TiTick size={40} className="iconTick" />
						</div>
						<div>
							<TiTick size={40} className="iconTick" />
						</div>
					</div>
					<div className="divTableTr">
						<div className="compareTitle">設施快速通關</div>
						<div>
							<ImCross />
						</div>
						<div>
							<TiTick size={40} className="iconTick" />
						</div>
					</div>
					<div className="divTableTr">
						<div className="compareTitle">深海生物導覽</div>
						<div>
							<ImCross />
						</div>
						<div>
							<TiTick size={40} className="iconTick" />
						</div>
					</div>
					<div className="divTableTr">
						<div className="compareTitle">瀑布私人水舞</div>
						<div>
							<ImCross />
						</div>
						<div>
							<TiTick size={40} className="iconTick" />
						</div>
					</div>
					<div className="divTableTr">
						<div className="compareTitle">票價</div>
						<div className="ticketPrice">NT$ 2,000</div>
						<div className="ticketPrice">NT$ 5,000</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompareTickets;
