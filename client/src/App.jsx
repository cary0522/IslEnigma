import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout/Layout"
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCartPage"
import CheckOutPage from "./pages/checkoutPage/CheckOutPage"
import MapPage from './pages/mappage';
import TicketPage from './pages/ticketpage';
import RestaurantPage from "./pages/restaurantpage"
import BoatPage from './pages/boatpage'

import ShoppingSuccessPage from "./pages/shoppingSuccessPage/ShoppingSuccessPage"
import CartLayout from "./components/layout/CartLayout"
import Hello from "./Hello"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<ShoppingCart />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="shoppingSuccess" element={<ShoppingSuccessPage />} />
        </Route>
        <Route path="/mappage" element={< MapPage />} />
        <Route path="/ticketpage" element={< TicketPage />} />
        <Route path="/restaurantpage" element={< RestaurantPage />} />
        <Route path="/boatpage" element={< BoatPage />} />
      </Route>
    </Routes>
  )
}

export default App;
