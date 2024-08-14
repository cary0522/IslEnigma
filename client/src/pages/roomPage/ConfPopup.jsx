// 在 ConfPopup.jsx 中
const ConfPopup = () => {
  const handleClose = () => {
    const popup = document.getElementById("cartConfirmationPopup");
    if (popup) {
      popup.classList.remove("active");
    }
  };

  return (
    <div id="cartConfirmationPopup" className="popupOverlay">
      <div className="popupContent">
        <img
          src="./public/00myIcon/booking-info.png"
          alt="Tent Icon"
          className="tentIcon"
        />
        <h2>謝謝您的訂購</h2>
        <p>
          您已訂購 "<span id="roomTypeName"></span>" 入住日期" "
          <span id="checkInDate"></span>" 退房日期" "
          <span id="checkOutDate"></span>"
        </p>
        <div className="socialLinks">
          <p>追蹤我們</p>
          <a href="#" className="socialIcon">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="socialIcon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="socialIcon">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
        <a href="/login" id="goToCartBtn" className="actionBtn">
          前往購物車
        </a>
        <button
          id="continueShoppingBtn"
          className="actionBtn secondary"
          onClick={handleClose}
        >
          繼續瀏覽
        </button>
      </div>
    </div>
  );
};

export default ConfPopup;
