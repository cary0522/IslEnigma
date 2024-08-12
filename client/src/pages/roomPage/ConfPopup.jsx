const ConfPopup = () => {
  return (
    <div id="cartConfirmationPopup" class="popupOverlay">
      <div class="popupContent">
        <img
          src="./public/00myIcon/booking-info.png"
          alt="Tent Icon"
          class="tentIcon"
        />
        <h2>謝謝您的訂購</h2>
        <p>
          您已訂購 "<span id="roomTypeName"></span>" 入住日期" "
          <span id="checkInDate"></span>" 退房日期" "
          <span id="checkOutDate"></span>"
        </p>
        <div class="socialLinks">
          <p>追蹤我們</p>
          <a href="#" class="socialIcon">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="socialIcon">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="socialIcon">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
        <button id="goToCartBtn" class="actionBtn">
          前往購物車
        </button>
        <button id="continueShoppingBtn" class="actionBtn secondary">
          繼續瀏覽
        </button>
      </div>
    </div>
  )
}

export default ConfPopup
