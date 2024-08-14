function BottomContent({restaurants}) {
	return (
		<div className="divContentOutside">
			<div className="contentImg">
				<img
					id="restaurantImage"
					src="/resraurant/Oceanic Delights food 2.png"
					alt="Restaurant Image"
				/>
			</div>
			<div className="contentText">
				<div className="businessHourstime">
					<div className="col-4 col-sm-3">
						<p>營業時間</p>
					</div>
					<div className="col-7 col-sm-8 timeLine"></div>
				</div>
				<p id="restaurantHours">11:00~21:30</p>
				<p id="restaurantDescription">
					餐廳內部裝飾有絢麗的星空天花板，燈光璀璨，營造出如夢似幻的用餐氛圍。在這裡，您可以享受到來自世界各地的美味佳餚，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳。讓我們帶您踏上這場星空下的美食之旅，探索國際美食的無限魅力，星空餐廳不僅是一個品嚐美食的地方，更是一個與家人朋友共享美好時光的溫馨場所。無論是浪漫的二人晚餐，還是溫馨的好友聚會，這裡都將為您提供難忘的用餐體驗。此外，也推薦您預約「銀河味蕾之旅」主題晚宴，享有獨立宴會廳，可容納約50人，晚宴期間，提供客製化餐點及現場樂隊表演，適合特殊節日慶祝、好友聚會等。
				</p>
			</div>
		</div>
	);
}

export default BottomContent;
