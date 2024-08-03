import * as Icon from "react-bootstrap-icons"

import { FaFacebook } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { TfiYoutube } from "react-icons/tfi"
import { FaLine } from "react-icons/fa"
import { IoTicketSharp } from "react-icons/io5"

const HamburgerMenu = ({
  toggleHamburgerMenu,
  isPlaying,
  togglePlayPause,
  setToggleHamburgerMenu,
}) => {
  return (
    <div
      id="hamburgerMenu"
      className={toggleHamburgerMenu ? "hamburgerMenu open" : "hamburgerMenu"}
    >
      <div className="menuHeader">
        <span
          id="closeBtn"
          className="closeBtn"
          onClick={() => {
            setToggleHamburgerMenu(false)
          }}
        >
          &times;
        </span>
        <a href="./index">
          <img
            src="/00logo/LogoType_Light_1.png"
            alt="Logo"
            className="menuLogo"
          />
        </a>
        <a href="/cart" className="cartIcon">
          <i className="bi bi-cart"></i>
        </a>
      </div>
      <div className="systemButtons">
        <div className="btn musicContainer">
          <span>music</span>
          <div
            id="menuMusicSwitcher"
            className={isPlaying ? "musicSwitcher active" : "musicSwitcher"}
            onClick={togglePlayPause}
          >
            <div className="ball"></div>
          </div>
        </div>
        <div className="btn languageDropdown">
          <span>Language</span>
          <div className="dropdown-content">
            <a href="#">中文</a>
            <a href="#">English</a>
          </div>
        </div>
      </div>
      <nav className="menuItems">
        <a href="/mappage">
          <Icon.Building /> <span>樂園設施</span> <span>&gt;</span>
        </a>
        <a href="/ticketpage">
          <Icon.TicketPerforated />
          <span> 訂票資訊</span> <span>&gt;</span>
        </a>
        <a href="#">
          <Icon.House /> <span>訂房資訊</span> <span>&gt;</span>
        </a>
        <a href="/restaurantpage">
          <Icon.Cart3 /> <span>飲食購物</span> <span>&gt;</span>
        </a>
        <a href="#">
          <Icon.CarFront />
          <span> 交通資訊</span> <span>&gt;</span>
        </a>
        <a href="#">
          <Icon.InfoCircle /> <span>關於islEnigma</span>
          <span>&gt;</span>
        </a>
        <a href="#">
          <Icon.PatchQuestion />
          <span> 樂園資訊</span> <span>&gt;</span>
        </a>
      </nav>
      <div className="menuFooter">
        <div className="socialIcons">
          <a href="#">
            <FaFacebook size={40} />
          </a>
          <a href="#">
            <BsInstagram size={40} />
          </a>
          <a href="#">
            <TfiYoutube size={40} />
          </a>
          <a href="#">
            <FaLine size={40} />
          </a>
        </div>
        <div className="copyright">
          <a href="/about">©bluepen team</a>
        </div>
      </div>
      <a href="#" className="ticketIcon">
        <IoTicketSharp size={30} />
      </a>
    </div>
  )
}

export default HamburgerMenu
