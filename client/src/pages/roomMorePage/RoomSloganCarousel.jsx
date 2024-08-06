import React, { useState, useEffect, useCallback } from "react";

const RoomSloganCarousel = () => {
  const originalSlogans = [
    {
      image: "../../public/roomMorePage/room (28).png",
      title: "Unplug, Unwind, Indulge:",
      subtitle: "Island Glamping at Its Finest",
    },
    {
      image: "../../public/roomMorePage/room (36).png",
      title: "Experience Nature:",
      subtitle: "Island Glamping at Its Finest",
    },
    {
      image: "../../public/roomMorePage/room (39).png",
      title: "Unplug, Unwind, Indulge:",
      subtitle: "Island Glamping at Its Finest",
    },
    {
      image: "../../public/roomMorePage/room (28).png",
      title: "Unplug, Unwind, Indulge:",
      subtitle: "Island Glamping at Its Finest",
    },
    {
      image: "../../public/roomMorePage/room (36).png",
      title: "Experience Nature:",
      subtitle: "Island Glamping at Its Finest",
    },
  ];

  // Add the first two slogans to the end of the array to create a seamless loop
  const slogans = [...originalSlogans, originalSlogans[0], originalSlogans[1]];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    setIsTransitioning(true);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((activeIndex + 1) % slogans.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, goToSlide, slogans.length]);

  useEffect(() => {
    if (activeIndex === slogans.length - 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500); // This should match your CSS transition time
      return () => clearTimeout(timer);
    }
  }, [activeIndex, slogans.length]);

  return (
    <div className="roomSlogan">
      <div
        className={`roomSlogan__container ${
          isTransitioning ? "transitioning" : ""
        }`}
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
        onTransitionEnd={() => setIsTransitioning(false)}
      >
        {slogans.map((slogan, index) => (
          <div
            key={index}
            className={`roomSlogan__slide ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img src={slogan.image} alt={`Room Slogan ${index + 1}`} />
            <div className="roomSlogan__content">
              <h2>{slogan.title}</h2>
              <h3>{slogan.subtitle}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="roomSlogan__indicators">
        {originalSlogans.map((_, index) => (
          <span
            key={index}
            className={`roomSlogan__indicator ${
              index === activeIndex % originalSlogans.length ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RoomSloganCarousel;
