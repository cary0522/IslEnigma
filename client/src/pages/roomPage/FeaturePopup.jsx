//icons
import { useEffect, useRef, useState } from "react"
import { FaCircleArrowRight } from "react-icons/fa6"
import { FaCircleArrowLeft } from "react-icons/fa6"

import { slidesData } from "./data/slidesData"

const FeaturePopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalData, setModalData] = useState(null)
  const carouselRef = useRef(null)
  const carouselSlideRef = useRef(null)

  const slideCount = slidesData.length

  useEffect(() => {
    const updateCarousel = () => {
      if (carouselRef.current) {
        const length = carouselSlideRef.current.scrollWidth
        const offset = -currentIndex * length
        carouselRef.current.style.transform = `translateX(${offset}px)`
        console.log(length)
      }
    }
    updateCarousel()
  }, [currentIndex, length])

  const nextSlide = () => {
    if (currentIndex < slidesData.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section id="roomFeature">
      <div className="featureHeader">
        <h2 className="featureTitle">
          特色 | <span>Stellar Sea Glamping</span>
        </h2>
        <div className="decoLine"></div>
        <p className="featureSubtitle">說走就走，免裝備高級海島露營</p>
      </div>
      <div className="carouselButtonContainer">
        <button className="carouselButton prev" onClick={prevSlide}>
          <FaCircleArrowLeft />
        </button>
        <div className="featureCarousel">
          <div className="carouselContainer" ref={carouselRef}>
            {slidesData.map((data, index) => (
              <div className="carouselSlide" key={index} ref={carouselSlideRef}>
                <div className="imgContainer">
                  <img src={data.imgSrc} alt={data.title} />
                  <div className="overlay">
                    <span className="slideCaption">{data.title}</span>
                    <div className="hoverOverlay">
                      <span>查看更多</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`carouselButton next ${
            slideCount - (currentIndex + 3) < 0 ? "disabled" : ""
          }`}
          onClick={nextSlide}
        >
          <FaCircleArrowRight />
        </button>
      </div>
    </section>
  )
}

export default FeaturePopup
