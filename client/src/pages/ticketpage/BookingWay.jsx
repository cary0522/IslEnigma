import React from "react";
import BookingWayIntro from "./BookingWayIntro";
import BookingWayImg from "./BookingWayImg";

function BookingWay() {
	let introOnline = [
		{
			id: "introOnlineOne",
			content:
				"* 訂購成功後，系統會發送「訂單明細」及「電子票券連結」至結帳時所留下的信箱與手機。",
		},
		{
			id: "introOnlineThree",
			content: "* 您無須在售票亭兌換門票，便可直接進入園區。",
		},
		{
			id: "introOnlineFour",
			content: "* 價格依日期而有所不同，請依照需求日期查詢價格。",
		},
		{
			id: "introOnlineFive",
			content:
				"* 訂購成功後，系統會發送「訂單明細」及「電子票券連結」至結帳時所留下的信箱與手機。",
		},
	];
	let introTravelAgency = [
		{
			id: "introTravelAgencyOne",
			content: "* 與多家旅行社配合，提供多元化購票管道。",
		},
		{
			id: "introTravelAgencyTwo",
			content: "* 各家旅行社規定請詳閱旅行社相關說明。",
		},
		{
			id: "introTravelAgencyThree",
			content:
				"* 其他購票平台所購買的相關套票若有退票相關需求，須自行聯絡購票平台，本園區無法提供相關服務。",
		},
	];
	let introOnTheSpot = [
		{ id: "introOnTheSpotOne", content: "* 請於園區內的售票亭購票。" },
		{ id: "introOnTheSpotTwo", content: "* 僅可購買當日票券。" },
		{
			id: "introOnTheSpotThree",
			content: "* 售票亭營業時間為開園前1小時，至閉園前2小時止。",
		},
	];

	return (
		<div id="divBookingWay" className="divBackground col-10">
			<h1>購票方式</h1>
			<div className="divIntroArea">
				<div className="divBookWayItem col-12 col-sm-10 col-lg-4">
					<div className="lineBetweenComponents col-1"></div>
					<BookingWayIntro wayName="線上購票" wayIntro={introOnline} />
				</div>
				<div className="col-12 col-sm-10 col-lg-4">
					<div className="divBookWayItem">
						<div className="lineBetweenComponents col-1"></div>
						<BookingWayIntro
							wayName="配合旅行社"
							wayIntro={introTravelAgency}
						/>
					</div>
					<BookingWayImg className="col-12" />
				</div>
				<div className="divBookWayItem col-12 col-sm-10 col-lg-4">
					<div className="lineBetweenComponents col-1"></div>
					<BookingWayIntro wayName="現場購票" wayIntro={introOnTheSpot} />
				</div>
			</div>
		</div>
	);
}

export default BookingWay;
