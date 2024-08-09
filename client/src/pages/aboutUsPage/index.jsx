import React, { useEffect, useState } from "react";
import AboutUsBanner from "./AboutUsBanner";

import "./aboutUs.scss"
import Origin from "./Origin";
import Purpose from "./Purpose";
import ESG from "./ESG";

function AboutUsPage() {
    return (
        <>
            <div id="aboutUsBanner">
                <AboutUsBanner />
            </div>
            <div id="originArea">
                <Origin />
            </div>
            <div id="purposeArea">
                <Purpose />
            </div>
            <div id="esgArea">
                <ESG />
            </div>
        </>
    )
}

export default AboutUsPage;