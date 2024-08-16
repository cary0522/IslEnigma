import { Link } from "react-router-dom"
import Button from "/src/components/common/Button.jsx"

function TimeAndBtn() {
  return (
    <div className="col-12 col-md-6 timeAndBtn">
      <Link to="/restaurantpage" className="btn">
        <Button btnContent={"返回飲食購物 >"} />
      </Link>
    </div>
  )
}

export default TimeAndBtn
