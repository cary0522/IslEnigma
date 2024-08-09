const MiddleBox = () => {
  return (
    <div className="middleBox">
      <div className="logoBox">
        <img src="/footerDeco/footerLogo.png" alt="footer logo" />
      </div>
      <nav className="footerNav">
        <ul>
          <a href="/mappage">樂園設施</a>
        </ul>
        <ul>
          <a href="/ticketpage">訂票</a>
        </ul>
        <ul>
          <a href="">訂房</a>
        </ul>
        <ul>
          <a href="/restaurantpage">飲食購物</a>
        </ul>
        <ul>
          <a href="/boatpage">交通資訊</a>
        </ul>
        <ul>
          <a href="">關於我們</a>
        </ul>
        <ul>
          <a href="/infoEventPage">樂園資訊</a>
        </ul>
      </nav>
      <nav className="MobileFooterNav">
        <div>
          <ul>
            <a href="/mappage">樂園設施</a>
          </ul>
          <ul>
            <a href="/ticketpage">訂票</a>
          </ul>
          <ul>
            <a href="">訂房</a>
          </ul>
        </div>
        <div>
          <ul>
            <a href="/restaurantpage">飲食購物</a>
          </ul>
          <ul>
            <a href="/boatpage">交通資訊</a>
          </ul>
          <ul>
            <a href="">關於我們</a>
          </ul>
          <ul>
            <a href="/infoEventPage">樂園資訊</a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MiddleBox;
