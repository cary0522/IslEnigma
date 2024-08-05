//icons
import { useEffect, useRef, useState } from "react"
import { FaCircleArrowRight } from "react-icons/fa6"
import { FaCircleArrowLeft } from "react-icons/fa6"

const slidesData = [
  {
    imgSrc: "/03rooms/room (24).png",
    title: "專屬衛浴",
    englishTitle: "Private Bathroom",
    description:
      "在 isleNigma 的豪華露營區，每個帳篷都配備了專屬的五星級衛浴設施。享受雨林般的淋浴體驗，浸泡在寬敞的按摩浴缸中，或使用我們精心挑選的有機盥洗用品。我們的衛浴空間不僅保證您的私密性，還能讓您在大自然中享受極致的舒適。",
    equipmentUsage: "淋浴、浴缸、有機盥洗用品",
    dates: "全年開放，建議提前預訂",
    details: "包含專屬管家服務，24小時隨時為您提供協助",
    limit: "每日限量帳篷，請及早預訂",
    promoText: "神秘島嶼奢華露營體驗",
    tags: "#私人衛浴 #奢華露營 #自然體驗",
  },
  {
    imgSrc: "/03rooms/room (24).png",
    title: "專屬衛浴",
    englishTitle: "Private Bathroom",
    description:
      "在 isleNigma 的豪華露營區，每個帳篷都配備了專屬的五星級衛浴設施。享受雨林般的淋浴體驗，浸泡在寬敞的按摩浴缸中，或使用我們精心挑選的有機盥洗用品。我們的衛浴空間不僅保證您的私密性，還能讓您在大自然中享受極致的舒適。",
    equipmentUsage: "淋浴、浴缸、有機盥洗用品",
    dates: "全年開放，建議提前預訂",
    details: "包含專屬管家服務，24小時隨時為您提供協助",
    limit: "每日限量帳篷，請及早預訂",
    promoText: "神秘島嶼奢華露營體驗",
    tags: "#私人衛浴 #奢華露營 #自然體驗",
  },
  {
    imgSrc: "/03rooms/room (24).png",
    title: "專屬衛浴",
    englishTitle: "Private Bathroom",
    description:
      "在 isleNigma 的豪華露營區，每個帳篷都配備了專屬的五星級衛浴設施。享受雨林般的淋浴體驗，浸泡在寬敞的按摩浴缸中，或使用我們精心挑選的有機盥洗用品。我們的衛浴空間不僅保證您的私密性，還能讓您在大自然中享受極致的舒適。",
    equipmentUsage: "淋浴、浴缸、有機盥洗用品",
    dates: "全年開放，建議提前預訂",
    details: "包含專屬管家服務，24小時隨時為您提供協助",
    limit: "每日限量帳篷，請及早預訂",
    promoText: "神秘島嶼奢華露營體驗",
    tags: "#私人衛浴 #奢華露營 #自然體驗",
  },
  {
    imgSrc: "/03rooms/room (24).png",
    title: "專屬衛浴",
    englishTitle: "Private Bathroom",
    description:
      "在 isleNigma 的豪華露營區，每個帳篷都配備了專屬的五星級衛浴設施。享受雨林般的淋浴體驗，浸泡在寬敞的按摩浴缸中，或使用我們精心挑選的有機盥洗用品。我們的衛浴空間不僅保證您的私密性，還能讓您在大自然中享受極致的舒適。",
    equipmentUsage: "淋浴、浴缸、有機盥洗用品",
    dates: "全年開放，建議提前預訂",
    details: "包含專屬管家服務，24小時隨時為您提供協助",
    limit: "每日限量帳篷，請及早預訂",
    promoText: "神秘島嶼奢華露營體驗",
    tags: "#私人衛浴 #奢華露營 #自然體驗",
  },
  {
    imgSrc: "/03rooms/room (24).png",
    title: "專屬衛浴",
    englishTitle: "Private Bathroom",
    description:
      "在 isleNigma 的豪華露營區，每個帳篷都配備了專屬的五星級衛浴設施。享受雨林般的淋浴體驗，浸泡在寬敞的按摩浴缸中，或使用我們精心挑選的有機盥洗用品。我們的衛浴空間不僅保證您的私密性，還能讓您在大自然中享受極致的舒適。",
    equipmentUsage: "淋浴、浴缸、有機盥洗用品",
    dates: "全年開放，建議提前預訂",
    details: "包含專屬管家服務，24小時隨時為您提供協助",
    limit: "每日限量帳篷，請及早預訂",
    promoText: "神秘島嶼奢華露營體驗",
    tags: "#私人衛浴 #奢華露營 #自然體驗",
  },
]

const FeaturePopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalData, setModalData] = useState(null)
  const carouselRef = useRef(null)
  const carouselSlideRef = useRef(null)

  const slideWidth = 300
  const slideCount = slidesData.length

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${300}px)`
    const updateCarousel = () => {
      if (carouselRef.current) {
        const offset = -currentIndex * slideWidth
        carouselRef.current.style.transform = `translateX(${offset}px)`
      }
    }
    updateCarousel()
  }, [currentIndex, slideWidth])

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
              <div className="carouselSlide" key={index}>
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
