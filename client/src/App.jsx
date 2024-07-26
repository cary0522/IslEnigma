import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout/Layout"
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCartPage"
import BreadCrumb from "./pages/shoppingCartPage/BreadCrumb"
import CheckOutPage from "./pages/checkoutPage/CheckOutPage"
import useCartStore from "./zustand/cartStore"
import { useState } from "react"
import ShoppingSuccessPage from "./pages/shoppingSuccessPage/ShoppingSuccessPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<ShoppingCart />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="shoppingSuccess" element={<ShoppingSuccessPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

const CartLayout = () => {
  return (
    <>
      <BreadCrumb />
      <Outlet />
    </>
  )
}

export default App
