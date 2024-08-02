import { Outlet, useLocation } from "react-router-dom"
import "./BreadCrumb.css"

const BreadCrumb = () => {
  return (
    <main>
      <div className="breadcrumb">
        <div className="active-now">
          <img
            src="/shoppingCart/shoppingCartIcon.png"
            alt="/Shopping Cart Icon"
          />
        </div>
        <img
          className="breadcrumbArrow"
          src="/shoppingCart/breadcrumbArrow.png"
          alt="Breadcrumb Arrow"
        />
        <div>
          <img src="/shoppingCart/checkoutIcon.png" alt="Checkout Icon" />
        </div>
        <img
          className="breadcrumbArrow"
          src="/shoppingCart/breadcrumbArrow.png"
          alt="Breadcrumb Arrow"
        />
        <div>
          <img src="/shoppingCart/purchaseSuccess.png" alt="Purchase Success" />
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default BreadCrumb
