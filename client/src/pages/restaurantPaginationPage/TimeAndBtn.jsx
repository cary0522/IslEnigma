import Button from '/src/components/common/Button.jsx';

function TimeAndBtn() {
	return (
		<div className="col-12 col-md-6 timeAndBtn">
			<a href="/restaurantpage" className="btn">
            <Button btnContent={'返回飲食購物 >'} />
			</a>
		</div>
	);
}

export default TimeAndBtn;
