const RoomTypes = () => {
  return (
    <section id="roomTypes">
      <div class="typeHeader">
        <h2 class="typeTitle">
          房型 | <span>Choose Your Favorite Glamping Tent</span>
        </h2>
        <div class="decoLine"></div>
        <p class="typeSubtitle">謎樣露營，提供最好的休息露營體驗</p>
      </div>
      <div class="roomGrid">
        <div class="roomCard" data-room-type="1">
          <div class="roomNumber">01</div>
          <div class="roomImage">
            <div class="roomCarousel"></div>
            <h3>草原步調</h3>
            <div class="imageIndicators">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="roomInfo">
            <h4>簡約帳篷 | 草原步調</h4>
            <div class="decorativeLine"></div>
            <p>擁抱自然簡約風，享受寧靜草原夜景</p>
            <p>NT$12000/晚</p>
            <button class="moreButton">
              <a href="../room_more.html">查看更多+</a>
            </button>
          </div>
        </div>

        <div class="roomCard" data-room-type="2">
          <div class="roomNumber">02</div>
          <div class="roomImage">
            <div class="roomCarousel"></div>
            <h3>沉靜海洋</h3>
            <div class="imageIndicators">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="roomInfo">
            <h4>豪華帳棚 | 沉靜海洋</h4>
            <div class="decorativeLine"></div>
            <p>聆聽海浪聲，感受奢華露營體驗</p>
            <p>NT$15,000/晚</p>
            <button class="moreButton">
              <a href="../room_more.html">查看更多+</a>
            </button>
          </div>
        </div>

        <div class="roomCard" data-room-type="3">
          <div class="roomNumber">03</div>
          <div class="roomImage">
            <div class="roomCarousel"></div>
            <h3>島嶼蹤跡</h3>
            <div class="imageIndicators">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="roomInfo">
            <h4>高級帳篷 | 島嶼蹤跡</h4>
            <div class="decorativeLine"></div>
            <p>探索島嶼秘境，高級舒適盡在此處</p>
            <p>NT$18000/晚</p>
            <button class="moreButton">
              <a href="../room_more.html">查看更多+</a>
            </button>
          </div>
        </div>

        <div class="roomCard" data-room-type="4">
          <div class="roomNumber">04</div>
          <div class="roomImage">
            <div class="roomCarousel"></div>
            <h3>夢幻星空</h3>
            <div class="imageIndicators">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="roomInfo">
            <h4>圓球帳篷 | 夢幻星空</h4>
            <div class="decorativeLine"></div>
            <p>仰望星空，圓形設計帶來獨特體驗</p>
            <p>NT$20000/晚</p>
            <button class="moreButton">
              <a href="../room_more.html">查看更多+</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomTypes
