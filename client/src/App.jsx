import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"

import "./App.css"
import Layout from "./components/layout/Layout"
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCartPage"
import CheckOutPage from "./pages/checkoutPage/CheckOutPage"

import ShoppingSuccessPage from "./pages/shoppingSuccessPage/ShoppingSuccessPage"
import CartLayout from "./components/layout/CartLayout"
import Restaurant from "./pages/restaurantPage/Restaurant"
import Rooms from "./pages/roomPage/Rooms"
import Login from "./pages/loginPage/Login"
import Register from "./pages/registerPage/Register"
//toast
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { member } = useAuthContext()

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/register"
            element={member ? <Navigate to="/rooms" /> : <Register />}
          />

          <Route
            path="/login"
            element={member ? <Navigate to="/rooms" /> : <Login />}
          />
          <Route path="cart" element={<CartLayout />}>
            <Route
              index
              element={!member ? <Navigate to="/login" /> : <ShoppingCart />}
            />
            <Route
              path="checkout"
              element={!member ? <Navigate to="/login" /> : <CheckOutPage />}
            />
            <Route
              path="shoppingSuccess"
              element={
                !member ? <Navigate to="/login" /> : <ShoppingSuccessPage />
              }
            />
          </Route>
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="rooms" element={<Rooms />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
