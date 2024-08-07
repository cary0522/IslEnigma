import { Outlet, Route, Routes, useLocation } from "react-router-dom"

import "./App.css"
import Layout from "./components/layout/Layout"
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCartPage"
import CheckOutPage from "./pages/checkoutPage/CheckOutPage"

import ShoppingSuccessPage from "./pages/shoppingSuccessPage/ShoppingSuccessPage"
import CartLayout from "./components/layout/CartLayout"
import Restaurant from "./pages/restaurantPage/Restaurant"
import Rooms from "./pages/roomPage/Rooms"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<ShoppingCart />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="shoppingSuccess" element={<ShoppingSuccessPage />} />
        </Route>
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="rooms" element={<Rooms />} />
      </Route>
    </Routes>
  )
}

export default App
