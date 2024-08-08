import Aside from "./Aside";
import MainContent from "./MainContent";

function Main({ loadRestaurantData,image1,image2,image3 }) {


	return (
		<div className="displayFlex">
			<Aside loadRestaurantData={loadRestaurantData} />
			<MainContent image1={image1} image2={image2} image3={image3} />
		</div>
	);
}

export default Main;
