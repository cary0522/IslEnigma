import React, { Component } from "react";
import Banner from "./Banner";
import MapImg from "./MapImg";
import BoatTablePage from './BoatTablePage'
import AboutBoatPage from "./AboutBoatPage"
import BusMap from './BusMap'

import './boatpage.scss'

function BoatPage() {
	return (
		<div className="boatPage">
			<Banner />
            <MapImg />
            <BoatTablePage />
            <AboutBoatPage />
            <BusMap />
		</div>
	);
}

export default BoatPage;
