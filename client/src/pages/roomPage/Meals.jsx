const FourMealsPlan = () => {
  return (
    <section id="roomONFM" class="roomONFM">
      <div class="roomONFMVerticalTitle left">
        <h2>Delicious.</h2>
      </div>
      <div class="roomONFMContent">
        <div class="roomONFMTitleContainer">
          <h2 class="roomONFMTitle">一泊四食專屬 | 豪華露營體驗模式</h2>
          <p class="roomONFMDescription">
            只要訂閱露營住宿，就包含所有的餐點。所有餐點已由頂尖的廚師團隊為您準備就緒，為您省去準備餐飲的時間與麻煩。這樣的豪華露營體驗模式，讓您能真正的放鬆享受、真正的品嚐精緻美饌。
          </p>
        </div>
        <div class="roomONFMContainer">
          <div class="roomONFMItem" data-meal="breakfast">
            <img
              src="./public/03rooms/room (56).png"
              alt="Breakfast"
              class="roomONFMImage"
            />
            <div class="roomONFMItemTitle">
              Breakfast
              <p>
                晨曦微露，早餐桌上精緻Buffet，讓您以飽滿的活力擁抱新的一天。
              </p>
            </div>
            <div class="roomONFMItemVerticalTitle">Breakfast</div>
          </div>
          <div class="roomONFMItem" data-meal="picnic">
            <img
              src="./public/03rooms/room (34).png"
              alt="Picnic"
              class="roomONFMImage"
            />
            <div class="roomONFMItemTitle">
              Picnic
              <p>林間野餐，徜徉在大自然的懷抱，享受悠閒時光與陽光的溫暖。</p>
            </div>
            <div class="roomONFMItemVerticalTitle">Picnic</div>
          </div>
          <div class="roomONFMItem" data-meal="classicLunch">
            <img
              src="./public/03rooms/room (71).png"
              alt="Classic Lunch"
              class="roomONFMImage"
            />
            <div class="roomONFMItemTitle">
              Classic Lunch
              <p>經典午餐，匯聚山海鮮美滋味，為您的味蕾帶來驚喜。</p>
            </div>
            <div class="roomONFMItemVerticalTitle">Classic Lunch</div>
          </div>
          <div class="roomONFMItem" data-meal="dinner">
            <img
              src="./public/03rooms/room (52).png"
              alt="Dinner"
              class="roomONFMImage"
            />
            <div class="roomONFMItemTitle">
              Dinner
              <p>
                夜幕低垂，晚餐的精緻佳餚伴隨星空與蟲鳴，譜出露營的浪漫樂章。{" "}
              </p>
            </div>
            <div class="roomONFMItemVerticalTitle">Dinner</div>
          </div>
          <div class="roomONFMItem" data-meal="campfireBBQ">
            <img
              src="./public/03rooms/room (43).png"
              alt="Campfire BBQ"
              class="roomONFMImage"
            />
            <div class="roomONFMItemTitle">
              Campfire BBQ
              <p>圍繞營火，享受烤肉的歡愉，讓溫暖的火光點亮歡笑與美好回憶。</p>
            </div>
            <div class="roomONFMItemVerticalTitle">Campfire BBQ</div>
          </div>
        </div>
      </div>
      <div class="roomONFMVerticalTitle right">
        <h2>FOOD.</h2>
      </div>
    </section>
  )
}

export default FourMealsPlan
