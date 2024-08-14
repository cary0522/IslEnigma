import Contact from "./Contact"
import FAQ from "./FAQ"
import MobileFaq from './MobileFaq'
import GoToBox from "./GoToBox"
import JoinUs from "./JoinUs"
import MiddleBox from "./MiddleBox"
import MobileContact from "./MobileContact"

const SecondRow = () => {
  return (
    <div className="secondRow">
      <FAQ />
      <Contact />
      <MiddleBox />
      <MobileFaq />
      <MobileContact />
      <JoinUs />
      <GoToBox />
    </div>
  )
}

export default SecondRow
