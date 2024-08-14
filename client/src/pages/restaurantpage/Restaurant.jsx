// import "./Restaurant.css"

const Restaurant = () => {
  return (
    <div className="restaurantContainer">
      <header>
        <div className="banner" id="banner">
          <div className="bannerContainer">
            <div className="logoContainer">
              <img src="/restaurant/LogoType_Light_2.png" alt="Logo" />
            </div>
            <h1>—————&nbsp;飲食購物&nbsp;—————</h1>
          </div>
        </div>
      </header>

      <div className="carouselContainer">
        <div className="carousel">
          <div className="carouselItem">
            <img
              src="/restaurant/Starlit Bistro.png"
              className="carouselImg"
              alt="Starlit Bistro"
              onClick={() =>
                changeBannerBackground("/restaurant/Starlit Bistro.png")
              }
            />
            <div className="carouselText">Starlit Bistro</div>
          </div>
          <div className="carouselItem">
            <img
              src="/restaurant/Dreamweaver Cafe.png"
              className="carouselImg"
              alt="Dreamweaver Cafe"
              onClick={() =>
                changeBannerBackground("../img/Dreamweaver Cafe.png")
              }
            />
            <div className="carouselText">Dreamweaver Cafe</div>
          </div>
          <div className="carouselItem">
            <img
              src="/restaurant/Oceanic Delights.png"
              className="carouselImg"
              alt="Oceanic Delights"
              onClick={() =>
                changeBannerBackground("../img/Oceanic Delights.png")
              }
            />
            <div className="carouselText">Oceanic Delights</div>
          </div>
          <div className="carouselItem">
            <img
              src="/restaurant/Shadowplay Cafe.png"
              className="carouselImg"
              alt="Shadowplay Cafe"
              onClick={() =>
                changeBannerBackground("/restaurant/Shadowplay Cafe.png")
              }
            />
            <div className="carouselText">Shadowplay Cafe</div>
          </div>
          <div className="carouselItem">
            <img
              src="/restaurant/Trance Tavern.png"
              className="carouselImg"
              alt="Trance Tavern"
              onClick={() =>
                changeBannerBackground("/restaurant/Trance Tavern.png")
              }
            />
            <div className="carouselText">Trance Tavern</div>
          </div>
          <div className="carouselItem">
            <img
              src="/restaurant/ShoppingMall.png"
              className="carouselImg"
              alt="Shopping Mall"
              onClick={() =>
                changeBannerBackground("/restaurant/ShoppingMall.png")
              }
            />
            <div className="carouselText">Shopping Mall</div>
          </div>
        </div>
      </div>

      <main>
        <section className="sectionContainer">
          <div className="imageContainer">
            <img
              src="/restaurant/Starlit Bistro.png"
              className="image1"
              alt="Starlit Bistro"
            />
            <img
              src="/restaurant/Starlit Bistro food.png"
              className="image2"
              alt="Starlit Bistro food"
            />
          </div>
          <div className="contentContainer">
            <h2>星空餐廳</h2>
            <h3>提供國際美食，內部裝飾有星空天花板，營造夢幻氛圍。</h3>
            <p>
              餐廳內部裝飾有絢麗的星空天花板，燈光璀璨，營造出如夢似幻的用餐氛圍。在這裡，您可以享受到來自世界各地的美味佳餚，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳。
            </p>
            <div className="businessHourstime">
              <div>
                <p>營業時間</p>
              </div>
              <p>———————————</p>
            </div>
            <div className="timeAndBtn">
              <p>11:00~21:30</p>
              <a href="./restaurantPage.html" className="btn">
                查看更多&nbsp;&gt;
              </a>
            </div>
          </div>
        </section>

        <section className="sectionContainer">
          <div className="contentContainer rightAlign">
            <h2>夢境咖啡廳</h2>
            <h3>充滿夢幻元素的咖啡廳，環境舒適，提供手工咖啡和甜點。</h3>
            <p>
              咖啡廳的內部設計如夢似幻，柔和的燈光、精美的裝飾和舒適的座椅，為您營造出一個完美的休憩空間。在這裡，每一個角落都散發著溫馨和夢幻的氣息，讓您一踏入便仿佛進入了一個夢境世界，忘卻外界的喧囂與忙碌。我們每一杯咖啡都是由專業的咖啡師精心手工製作，選用上等的咖啡豆，經過細心烘焙，為您帶來最純粹的咖啡體驗，無論是濃郁的意式濃縮，還是香醇的拿鐵、卡布奇諾，或是充滿創意的特調咖啡，我們都將為您提供極致的味覺享受。每一口咖啡都凝聚了我們對品質的追求，讓您品味到咖啡的深厚韻味和豐富層次。除了精緻的咖啡，我們還提供各式各樣的美味甜點。無論是口感輕盈的慕斯蛋糕、香脆可口的餅乾，還是綿密濃郁的巧克力蛋糕，每一款甜點都是我們精心製作，為您帶來甜美的味蕾體驗。精緻且客製化的咖啡飲品，搭配上各式各樣的美味甜點，讓您在放鬆的同時，享受到味蕾的滿足，感受到宛如夢境般的美好時光。
            </p>
            <div className="businessHourstime rightItem">
              <p>———————————</p>
              <div>
                <p>營業時間</p>
              </div>
            </div>
            <div className="timeAndBtn">
              <a href="#" className="btn">
                查看更多&nbsp;&gt;
              </a>
              <p>11:00~21:30</p>
            </div>
          </div>
          <div className="imageContainer">
            <img
              src="/restaurant/Dreamweaver Cafe.png"
              className="image1"
              alt="Dreamweaver Cafe"
            />
            <img
              src="/restaurant/Dreamweaver Cafe food.png"
              className="image2"
              alt="Dreamweaver Cafe food"
            />
          </div>
        </section>

        <section className="sectionContainer">
          <div className="imageContainer">
            <img
              src="/restaurant/Oceanic Delights.png"
              className="image1"
              alt="Oceanic Delights"
            />
            <img
              src="/restaurant/Oceanic Delights food.png"
              className="image2"
              alt="Oceanic Delights food"
            />
          </div>
          <div className="contentContainer">
            <h2>海洋美饌</h2>
            <h3>專注於海鮮料理的餐廳，結合海洋主題設計。</h3>
            <p>
              餐廳內部裝潢以海洋元素為靈感，藍色的燈光和流動的水紋讓您彷彿置身於海底世界，牆壁上裝飾著栩栩如生的海洋生物壁畫，仿佛海洋中的一景一物都被搬到了您的眼前。柔和的燈光和精心設計的座位安排，營造出一個溫馨而富有情調的用餐環境，讓您在這裡享受一段美好的時光，讓您在美食的同時，體驗海洋的奇妙與美麗。在這裡，您可以品嚐到各種新鮮的海鮮料理，每一道菜品都由經驗豐富的廚師精心烹製，保證風味獨特，口感絕佳，從海鮮拼盤、烤扇貝到香煎鱸魚，再到經典的龍蝦料理，每一道菜品都將帶給您無與倫比的味覺享受。
            </p>
            <div className="businessHourstime">
              <div>
                <p>營業時間</p>
              </div>
              <p>———————————</p>
            </div>
            <div className="timeAndBtn">
              <p>11:00~21:30</p>
              <a href="./restaurantPage.html" className="btn">
                查看更多&nbsp;&gt;
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Restaurant
