import { Link } from "react-router-dom";
// import "./TotalPrice.css"
import { useEffect, useState } from "react";
const totalPrice = ({ cartItems, ticketQuantity }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => {
        const roomPrice = item.room?.price || 0;
        const ticketPrice = item.ticket?.price || 0;
        const itemPrice = roomPrice || ticketPrice;
        return acc + roomPrice + ticketPrice * ticketQuantity;
      }, 0);
      setTotalPrice(total);
    } else {
    }
  }, [cartItems, ticketQuantity]);

  return (
    <div className="totalPriceContainer">
      <div className="totalPrice">
        <span>小記:</span> <span>NT${totalPrice}</span>
      </div>
      <div className="onSale"></div>
      {cartItems && cartItems.length > 0 && (
        <Link to="checkout">
          <button className="btn buyNow">結帳頁面</button>
        </Link>
      )}
      {cartItems && cartItems.length === 0 && (
        <div className="btn noItem">結帳頁面</div>
      )}
    </div>
  );
};

export default totalPrice;
