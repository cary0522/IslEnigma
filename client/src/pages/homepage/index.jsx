import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";

import "./homepage.scss"
import QuickLink from "./QuickLink";
import AboutUs from "./AboutUs";
import News from "./News";
import ParkMap from "./ParkMap";

function Homepage() {
    return (
        <>
            <div id="banner">
                <HomeBanner />
                <QuickLink />
            </div>
            <div id="aboutUs">
                <AboutUs />
            </div>
            <div id="newsArea">
                <News/>
            </div>
            <div id="parkMap">
                <ParkMap/>
            </div>
        </>
    )
}

export default Homepage;