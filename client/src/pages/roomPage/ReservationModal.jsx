const ReservationModal = ({ setToggleReservation }) => {
  return (
    <div id="quickReservationModal" class="quickModal">
      <div class="quickModalContent">
        <span
          class="closeQuickModal"
          onClick={() => {
            setToggleReservation(false)
          }}
        >
          &times;
        </span>
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
  )
}

export default ReservationModal
