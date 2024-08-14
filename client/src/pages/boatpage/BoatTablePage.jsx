function BoatTablePage() {
	return (
		<div className="boatTablePage">
			<div className="boatH1">
				<h1>接 Boat 時刻表</h1>
				<p>
					港口至謎樣島嶼的專屬郵輪，每一小時一班，總行程約 60
					分，隔一小時開船。{" "}
				</p>
			</div>

			<div className="scheduleContainer">
				<div>
					<div className="routeTitle">港口→謎樣島嶼</div>
					<table>
						<tbody>
							<tr>
								<td>07:00→08:00</td>
							</tr>
							<tr>
								<td>09:00→10:00</td>
							</tr>
							<tr>
								<td>11:00→12:00</td>
							</tr>
							<tr>
								<td>13:00→14:00</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<div className="routeTitle">謎樣島嶼→港口</div>
					<table>
						<tbody>
							<tr>
								<td>12:00→13:00</td>
							</tr>
							<tr>
								<td>14:00→15:00</td>
							</tr>
							<tr>
								<td>16:00→17:00</td>
							</tr>
							<tr>
								<td>18:00→19:00</td>
							</tr>
							<tr>
								<td>20:00→21:00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default BoatTablePage;
