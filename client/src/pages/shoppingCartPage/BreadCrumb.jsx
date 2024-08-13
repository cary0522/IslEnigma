import { Outlet, useLocation } from "react-router-dom"
// import "./ShoppingCartPage.css"

import arrow from "/shoppingCart/breadcrumbArrow.png"
import cartIcon from "/shoppingCart/shoppingCartIcon.png"
import checkoutIcon from "/shoppingCart/checkoutIcon.png"

import successIcon from "/shoppingCart/purchaseSuccess.png"
const BreadCrumb = () => {
  const location = useLocation()
  console.log(location.pathname)

  let pageName = ""

  switch (true) {
    case location.pathname.includes("checkout"):
      pageName = "checkOutPage"
      break

    case location.pathname.includes("cart"):
      pageName = "shoppingCart"
      break

    case location.pathname.includes("success"):
      pageName = "shoppingSuccess"
      break

    default:
      pageName = ""
  }

  return (
    <>
      <main id={pageName} className="main">
        <div class="breadcrumb">
          <div className={pageName === "shoppingCart" ? "activeNow" : ""}>
            <img src={cartIcon} alt="購物車" />
          </div>
          <img src={arrow} alt="箭頭" class="breadcrumbArrow" />
          <div className={pageName === "checkOutPage" ? "activeNow" : ""}>
            <img src={checkoutIcon} alt="結帳" />
          </div>
          <img src={arrow} alt="箭頭" class="breadcrumbArrow" />
          <div className={pageName === "shoppingSuccess" ? "activeNow" : ""}>
            <img src={successIcon} alt="購買成功" />
          </div>
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default BreadCrumb
