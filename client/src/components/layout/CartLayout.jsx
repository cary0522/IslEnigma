import { Outlet } from "react-router-dom"
import BreadCrumb from "../../pages/shoppingCartPage/BreadCrumb"

const CartLayout = () => {
  return (
    <>
      <BreadCrumb />
      <Outlet />
    </>
  )
}

export default CartLayout
