import { useEffect, useRef, useState } from "react"
import SloganSlide from "./SloganSlide"
import { sloganData } from "./data/sloganData"

const Slogan = () => {
  const sloganContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  //設定計時器 每五秒換下一張
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sloganData.length - 2 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, []) /
    useEffect(() => {
      if (sloganContainerRef.current) {
        sloganContainerRef.current.style.transform = `translateX(${
          currentIndex * -50
        }%)`
      }
    }, [currentIndex])

  return (
    <section id="roomSlogan" className="roomSlogan">
      <div className="roomSlogan__container" ref={sloganContainerRef}>
        {sloganData.map((data, index) => (
          <SloganSlide key={index} data={data} index={index} />
        ))}
      </div>
      <div className="roomSlogan__indicators">
        {Array.from({ length: sloganData.length - 1 }).map((_, index) => (
          <span
            key={index}
            className={`roomSlogan__indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default Slogan
