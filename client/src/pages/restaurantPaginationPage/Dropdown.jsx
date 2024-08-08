function Dropdown({ restaurants, loadRestaurantData }) {
	return (
		<div className="dropdown ">
			<select
				onChange={(e) => {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
					loadRestaurantData(e.target.value);
				}}
			>
				<option value="1">星空餐廳</option>
				<option value="2">夢境咖啡廳</option>
				<option value="3">海洋珍饌</option>
				<option value="4">光影咖啡廳</option>
				<option value="5">迷幻酒吧</option>
				<option value="6">異域市集</option>
			</select>
		</div>
	);
}

export default Dropdown;
