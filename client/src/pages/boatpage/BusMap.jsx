function BusMap() {
	return (
		<div className="busMap">
			<div>
				<h1>遊園車上車地點與路線</h1>
			</div>
			<img src="/boat/map_design_nobg.png" />
			<div>
				<h1>遊園車時間表</h1>
				<p>
					於謎樣島嶼有6座車站，每 1 小時 1 班，總行程約 50 分，行駛間隔為約 11
					分鐘。
				</p>
			</div>
			<div className="busTimeTable">
				<table>
					<thead>
						<tr>
							<td>站點名稱</td>
							<td>首班車</td>
							<td>末班車</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>島嶼入口</td>
							<td>9:00</td>
							<td>22:00</td>
						</tr>
						<tr>
							<td>璀璨綠洲</td>
							<td>9:00</td>
							<td>22:00</td>
						</tr>
						<tr>
							<td>嗨游洋外</td>
							<td>9:00</td>
							<td>22:00</td>
						</tr>
						<tr>
							<td>失落小島</td>
							<td>9:00</td>
							<td>22:00</td>
						</tr>
						<tr>
							<td>露營區</td>
							<td>9:00</td>
							<td>22:00</td>
						</tr>
						<tr>
							<td>遊客中心</td>
							<td>9:00</td>
							<td>22:00</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BusMap;
