import Main from "./Main";
import BottomContent from "./BottomContent";
import Title from "./Title";
import TimeAndBtn from "./TimeAndBtn";
import Dropdown from "./Dropdown";
import "./restaurantPaginationPage.scss";
import { useEffect, useState } from "react";

function RestaurantPaginationPage() {

let [data,setData]=useState([]);
useEffect(()=>{
    fetch("./restaurants.json")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        const restaurant = data.restaurants.find((r) => r.id === id);
        if (restaurant) {
            setData(restaurant)
            // console.log(restaurant);
            document.getElementById("restaurantName").innerText = restaurant.name;
            document.getElementById("restaurantHours").innerText =
                restaurant.hours;
            document.getElementById("restaurantDescription").innerText =
                restaurant.description;

            const carousel = document.getElementById("restaurantCarousel");
            carousel.innerHTML = "";
            restaurant.images.forEach((imageUrl) => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = "Restaurant Image";
                carousel.appendChild(img);
            });
            document.getElementById("restaurantImage").src = restaurant.mainImage;
        } else {
            // console.log(id);
        }
    });
},[])


	return (
		<div className="restPagination">
			<Title />
			<Main restaurants={data} />
			<BottomContent restaurants={data} />
			<Dropdown restaurants={data} />
			<TimeAndBtn />
		</div>
	);
}

export default RestaurantPaginationPage;
