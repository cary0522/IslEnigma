import React, { useState } from "react";
import LogoArea from "/src/components/common/LogoArea.jsx";
import imgLogo from "/images/logo.png";


function AboutUsBanner() {
    return (
        <div className="wrap">
            <div className="bannerImgBox">
                <img src="/aboutUs/banner.png" />
            </div>
            <div className="divOutside">
                <div className="logoBox">
                    <img src="/aboutUs/logo.png" />
                </div>
            </div>
            <div className="divOutside">
                <div className="divPageName">
                    <span className="linePageName"></span>
                    <h3>關於我們</h3>
                    <span className="linePageName"></span>
                </div>
            </div>
        </div>

    )
}
export default AboutUsBanner;
