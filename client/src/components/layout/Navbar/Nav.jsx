import { useState } from "react";

const Nav = ({ toggleNavbar }) => {
  return (
    <nav className={toggleNavbar ? "navbar hidden" : "navbar active"}>
      <a href="./index">
        <picture className="logo-container">
          <source
            media="(min-width:1024px)"
            srcSet="/00logo/LogoType_Light_2.png"
          />
          <source
            media="(min-width:850px)"
            srcSet="/00logo/LogoType_Light_1.png"
          />
          <img src="/00logo/LOGO_Light_1.png" alt="Logo" className="logo" />
        </picture>
      </a>
      <div className="navRight">
        <ul className="navLink">
          <li className="navItem facility">
            <a href="/mappage">
              <img src="/00myIcon/facility.png" alt="樂園設施" />
              <p data-text="樂園設施">樂園設施</p>
            </a>
          </li>
          <li className="navItem ticket">
            <a href="/ticketpage">
              <img src="/00myIcon/ticket-info.png" alt="訂票資訊" />
              <p data-text="訂票資訊">訂票資訊</p>
            </a>
          </li>
          <li className="navItem book">
            <a href="#">
              <img src="/00myIcon/booking-info.png" alt="訂房資訊" />
              <p data-text="訂房資訊">訂房資訊</p>
            </a>
          </li>
          <li className="navItem food">
            <a href="/restaurantpage">
              <img src="/00myIcon/restaurant-info.png" alt="飲食購物" />
              <p data-text="飲食購物">飲食購物</p>
            </a>
          </li>
          <li className="navItem traffic">
            <a href="/boatpage">
              <img src="/00myIcon/traffic-info.png" alt="交通資訊" />
              <p data-text="交通資訊">交通資訊</p>
            </a>
          </li>
          <li className="navItem about">
            <a href="#">
              <img src="/00myIcon/about.png" alt="關於我們" />
              <p data-text="關於我們">關於我們</p>
            </a>
          </li>
          <li className="navItem info">
            <a href="/infoEventPage">
              <img src="/00myIcon/park-info.png" alt="樂園資訊" />
              <p data-text="樂園資訊">樂園資訊</p>
            </a>
          </li>
          <li className="navItem menber">
            <a href="/login">
              <img src="/00myIcon/menber.png" alt="登入" />
              <p data-text="會員">會員</p>
            </a>
          </li>
        </ul>
        <a href="/ticketpage">
          <img src="/00myIcon/ticket.png" alt="Ticket" className="ticketImg" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
