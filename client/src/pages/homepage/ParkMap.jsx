import React, { useState } from 'react';

const sections = {
    oasis: {
        image: "/homepage/lightArea1.png",
        attractions: [
            { name: "夢幻瀑布", img: "/homepage/waterfall.png" },
            { name: "光影迷宮", img: "/homepage/maze.png" },
            { name: "閃耀花園", img: "/homepage/garden.png" },
            { name: "幻光森林", img: "/homepage/forest.png" }
        ]
    },
    ocean: {
        image: "/homepage/lightArea2.png",
        attractions: [
            { name: "海洋探險", img: "/homepage/advanture.png" },
            { name: "海底隧道", img: "/homepage/tunnel.png" },
            { name: "彩虹飛龍", img: "/homepage/dragon.png" },
            { name: "珊瑚礁之旅", img: "/homepage/coral.png" }
        ]
    },
    island: {
        image: "/homepage/lightArea3.png",
        attractions: [
            { name: "激流勇進", img: "/homepage/river.png" },
            { name: "飛行塔", img: "/homepage/tart.png" },
            { name: "旋轉木馬", img: "/homepage/horse.png" },
            { name: "雲霄飛車", img: "/homepage/rollerCoaster.png" }
        ]
    }
};

const ParkMap = () => {
    //預設綠洲為第一筆
    const [currentSection, setCurrentSection] = useState('oasis'); 
    const [mainImage, setMainImage] = useState(sections.oasis.image);
    const [attractions, setAttractions] = useState(sections.oasis.attractions);

    const showSection = (sectionKey) => {
        const sectionData = sections[sectionKey];
        setCurrentSection(sectionKey);
        setMainImage(sectionData.image);
        setAttractions(sectionData.attractions);
    };

    return (
        <div id="parkMap">
            <div className="wrap">
                <div className="parkMapBox">
                    <div className="titleBox">
                        <p className="title">人氣設施</p>
                    </div>
                    <div className="upperBox">
                        <p>三大園區</p>
                        <div className="map">
                            <img src={mainImage} className="mainImage"/>
                        </div>
                        <div className="mapCtrl">
                            <div className="btnControl">
                                <a onClick={() => showSection('oasis')}>璀璨綠洲</a>
                            </div>
                            <div className="btnControl">
                                <a onClick={() => showSection('ocean')}>嗨游洋外</a>
                            </div>
                            <div className="btnControl">
                                <a onClick={() => showSection('island')}>失落小島</a>
                            </div>
                        </div>
                    </div>
                    <div className="belowBox">
                        <div className="cardBox" id="cardBox">
                            <div className="itemBox">
                                {attractions.map((attraction, index) => (
                                    <div key={index} className="card">
                                        <img src={attraction.img} className="attractionImage" />
                                        <p>{attraction.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="btnMore">
                                <a href="#">查看更多{'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParkMap;
