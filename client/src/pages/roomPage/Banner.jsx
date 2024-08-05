const Banner = () => {
  return (
    <div id="roomBanner" class="bannerWrapper">
      <div class="leftButtons">
        <div class="containerMain">
          <div class="drop dropOne">
            <div class="content">
              <h2>
                <i class="fa-solid fa-campground"></i>
              </h2>
              <a href="#">草原步調</a>
            </div>
          </div>
          <div class="drop dropTwo">
            <div class="content">
              <h2>
                <i class="fa-solid fa-disease"></i>
              </h2>
              <a href="#">海洋之眼</a>
            </div>
          </div>
          <div class="drop dropThree">
            <div class="content">
              <h2>
                <i class="fa-solid fa-bridge-water"></i>
              </h2>
              <a href="#">島嶼蹤跡</a>
            </div>
          </div>
          <div class="drop dropFour">
            <div class="content">
              <h2>
                <i class="fa-brands fa-galactic-republic"></i>
              </h2>
              <a href="#">夢幻星空</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bannerContent">
        <div class="bannerLogo">
          <img src="./public/00logo/LogoType_Light_2.png" alt="神秘樂園logo" />
        </div>
        <div class="bannerTextGroup">
          <span class="bannerLine"></span>
          <p class="bannerTitle">訂房資訊</p>
          <span class="bannerLine"></span>
        </div>
        <p class="bannerTagline">
          在
          ISLENIGMA，每一刻都是驚喜，每一夜都是冒險。準備好揭開島嶼的神秘面紗，開啟您的奇幻之旅了嗎？
        </p>
        <div class="bannerButtons">
          <a href="#roomTypes" class="primaryButton">
            <i class="fa-solid fa-tents"></i>查看房型
          </a>
          <a class="primaryButton">
            <i class="fa-regular fa-calendar-plus"></i>快速預約
          </a>
        </div>
      </div>
      <div class="footprints">
        <i class="fas fa-shoe-prints footprint footprint-left"></i>
        <i class="fas fa-shoe-prints footprint footprint-right"></i>
        <i class="fas fa-shoe-prints footprint footprint-left"></i>
        <i class="fas fa-shoe-prints footprint footprint-right"></i>
      </div>
      <div id="quickReservationModal" class="quickModal">
        <div class="quickModalContent">
          <span class="closeQuickModal">&times;</span>
          <div class="modalLeft">
            <h2>
              露營訂房<i class="bi bi-calendar-week-fill"></i>
            </h2>
            <div id="reservationCalendar"></div>
          </div>
          <div class="modalRight">
            <div class="reservationForm">
              <div class="dateInputs">
                <div class="dateInput">
                  <label for="checkInDate">入住日期:</label>
                  <input type="text" id="checkInDate" readonly />
                </div>
                <div class="dateInput">
                  <label for="checkOutDate">退房日期:</label>
                  <input type="text" id="checkOutDate" readonly />
                </div>
              </div>
              <div class="guestInputs">
                <div class="inputGroup">
                  <label>床數</label>
                  <div class="numberInput">
                    <button class="decrease">-</button>
                    <input
                      type="number"
                      id="bedCount"
                      value="1"
                      min="0"
                      max="4"
                      readonly
                    />
                    <button class="increase">+</button>
                  </div>
                </div>
                <div class="inputGroup">
                  <label>人數</label>
                  <div class="numberInput">
                    <button class="decrease">-</button>
                    <input
                      type="number"
                      id="guestCount"
                      value="1"
                      min="0"
                      max="10"
                      readonly
                    />
                    <button class="increase">+</button>
                  </div>
                </div>
                <div class="totalPrice">
                  <span>NT$</span>
                  <input type="text" id="totalPriceInput" value="0" readonly />
                </div>
              </div>
              <div class="roomTypeSelectWrapper">
                <select id="roomTypeSelect" class="roomTypeSelect">
                  <option value="" disabled selected>
                    選擇房型
                  </option>
                  <option value="Grass">簡約帳篷 | 草原步調</option>
                  <option value="Ocean">豪華帳棚 | 沉靜海洋</option>
                  <option value="Isle">高級帳篷 | 島嶼蹤跡</option>
                  <option value="Starry">圓球帳篷 | 夢幻星空</option>
                </select>
              </div>
              <button id="searchResults">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
