import timeTableImg from "/public/boat/ship_1016051.png";
import busLogo from "/public/boat/busLogo.png";
import boat2 from "/public/boat/transportation_boat2.png";
import { useEffect, useState } from "react";

function MapImg() {
	// 設定接 Boat、遊園車等候時間
	let [timeBoat, setTimeBoat] = useState(20);
	let [timeBus, setTimeBus] = useState(15);

	useEffect(() => {
		// 設定倒數遞迴函式，一秒後再次呼叫自己一次，在倒數時間大於一之前，會一秒執行一次
		const countdown = (t, callback) => {
			if (t > 0) {
				callback(t - 1);
				setTimeout(() => {
					countdown(t - 1, callback);
				}, 1000);
			}
		};
		// 把接 Boat、遊園車時間及函式傳入，只會執行一次
		setTimeout(() => {
			countdown(timeBoat, setTimeBoat);
			countdown(timeBus, setTimeBus);
		}, 1000);
	}, []);
	// 設定顯示內容函式，若時間大於零，轉換為分：秒形式
	function makeTimeString(time) {
		if (time == 0) return "即將到站";
		else
			return (
				parseInt(time / 60)
					.toString()
					.padStart(2, "0") +
				":" +
				(time % 60).toString().padStart(2, "0")
			);
	}

	return (
		<div className="mapImg">
			<div className="timeTable">
				<div className="timeItem">
					<img src={timeTableImg} />
					<h4>下一班接 Boat 到站時間</h4>
					<p id="timer">{makeTimeString(timeBoat)}</p>
				</div>
				<p className="timeLine">｜</p>
				<div className="timeItem">
					<img src={busLogo} />
					<h4>下一班遊園車到站時間</h4>
					<p id="timer2">{makeTimeString(timeBus)}</p>
				</div>
			</div>
			<div className="map">
				<img src={boat2} />
			</div>
		</div>
	);
}

export default MapImg;
