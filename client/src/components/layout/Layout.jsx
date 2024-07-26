import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"
import useCartStore from "../../zustand/cartStore"
import { useEffect } from "react"

const Layout = () => {
  // const { cartItems, loading, fetchCartData, setCartItems } = useCartStore()

  // useEffect(() => {
  //   fetchCartData()
  // }, [])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
