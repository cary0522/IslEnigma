import FirstRow from "./FirstRow"
import "./Footer.css"
import SecondRow from "./SecondRow"
import ThirdRow from "./ThirdRow"

const Footer = () => {
  return (
    <div id="footer">
      <div className="wrap">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    </div>
  )
}

export default Footer
