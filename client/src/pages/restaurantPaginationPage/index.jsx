import Main from "./Main";
import BottomContent from "./BottomContent";
import Title from "./Title";
import TimeAndBtn from "./TimeAndBtn";
import Dropdown from "./Dropdown";
import "./restaurantPaginationPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantPaginationPage() {
	let [image1, setImage1] = useState("");
	let [image2, setImage2] = useState("");
	let [image3, setImage3] = useState("");
	let [data, setData] = useState([]);
	let loadRestaurantData = (id) => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		fetch("/public/restaurants.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const restaurant = data.restaurants.find((r) => r.id === id);
				if (restaurant) {
					setData(restaurant);
					document.getElementById("restaurantName").innerText = restaurant.name;
					document.getElementById("restaurantHours").innerText =
						restaurant.hours;
					document.getElementById("restaurantDescription").innerText =
						restaurant.description;

					setImage1(restaurant.images[0]);
					setImage2(restaurant.images[1]);
					setImage3(restaurant.images[2]);
					document.getElementById("restaurantImage").src = restaurant.mainImage;
				}
			});
		// const {urlId} = useParams();
		// console.log('urlId:',{urlId})
	};
	
	const { urlId } = useParams();
	useEffect(()=>{		
		let firstData = async ()=>{
			await loadRestaurantData(urlId);
		}
		firstData();
	},[urlId])

	return (
		<div className="restPagination">
			<Title />
			<Main
				restaurants={data}
				image1={image1}
				image2={image2}
				image3={image3}
			/>
			<BottomContent restaurants={data} />
			<Dropdown restaurants={data} loadRestaurantData={loadRestaurantData} />
			<TimeAndBtn />
		</div>
	);
}

export default RestaurantPaginationPage;
