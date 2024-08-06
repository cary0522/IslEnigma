import React, { useState, useEffect } from 'react';

const RoomSloganCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slogans = [
        {
            image: "./public/03rooms/room (28).png",
            title: "Unplug, Unwind, Indulge:",
            subtitle: "Island Glamping at Its Finest"
        },
        {
            image: "./public/03rooms/room (36).png",
            title: "Experience Nature:",
            subtitle: "Island Glamping at Its Finest"
        },
        {
            image: "./public/03rooms/room (39).png",
            title: "Unplug, Unwind, Indulge:",
            subtitle: "Island Glamping at Its Finest"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="roomSlogan">
            <div className="roomSlogan__container" style={{ transform: `translateX(-${activeIndex * 50}%)` }}>
                {slogans.map((slogan, index) => (
                    <div key={index} className={`roomSlogan__slide ${index === activeIndex ? 'active' : ''}`}>
                        <img src={slogan.image} alt={`Room Slogan ${index + 1}`} />
                        <div className="roomSlogan__content">
                            <h2>{slogan.title}</h2>
                            <h3>{slogan.subtitle}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="roomSlogan__indicators">
                {slogans.map((_, index) => (
                    <span
                        key={index}
                        className={`roomSlogan__indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default RoomSloganCarousel;