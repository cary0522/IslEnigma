import { useEffect, useRef, useState } from "react"

import "./Navbar.css"
// import 音樂
import sound from "../../../assets/music/music.mp3"

//icons
import * as Icon from "react-bootstrap-icons"
import { CiShoppingCart } from "react-icons/ci"
import { IoPersonOutline } from "react-icons/io5"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { TfiYoutube } from "react-icons/tfi"
import { FaLine } from "react-icons/fa"
import { IoTicketSharp } from "react-icons/io5"

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // 音樂: 我用audio播不出來所以用這個方法
  const music = useRef(new Audio(sound))

  const togglePlayPause = () => {
    if (isPlaying) {
      music.current.pause()
    } else {
      music.current.currentTime = 0.5
      music.current
        .play()
        .then(() => {
          console.log("撥放音樂")
        })
        .catch((error) => {
          console.error(error)
        })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div id="navbarAll" className="navbarAll">
      <header>
        <div className="topNav">
          <div className="headerLeft">
            <button
              id="hamburgerBtn"
              className="hamburgerBtn"
              onClick={() => {
                setToggleHamburgerMenu(!toggleHamburgerMenu)
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="musicContainer">
              <button className="btn music">
                music
                <div
                  id="mainMusicSwitcher"
                  className={
                    isPlaying ? "musicSwitcher active" : "musicSwitcher"
                  }
                  onClick={togglePlayPause}
                >
                  <div className="ball"></div>
                </div>
              </button>
            </div>
            <div className="languageDropdown">
              <button className="btn language">
                Language<i className="bi bi-chevron-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">中文</a>
                <a href="#">English</a>
              </div>
            </div>
          </div>
          <a href="#">
            <img
              className="topLogo"
              src="/00logo/LogoType_Light_1.png"
              alt=""
            />
          </a>
          <div className="headerRight">
            <a href="/cart" className="btnShoppingCart">
              <CiShoppingCart />
            </a>
            <a href="/login" className="btnLogin">
              <IoPersonOutline />

              <span>Login</span>
            </a>
          </div>
          <button
            id="toggleNavbar"
            className="toggleNavbar"
            onClick={() => {
              setToggleNavbar(!toggleNavbar)
            }}
          >
            <Icon.ChevronDoubleUp />
          </button>
        </div>
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
                <a href="#">
                  <img src="/00myIcon/restaurant-info.png" alt="飲食購物" />
                  <p data-text="飲食購物">飲食購物</p>
                </a>
              </li>
              <li className="navItem traffic">
                <a href="#">
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
                <a href="#">
                  <img src="/00myIcon/park-info.png" alt="樂園資訊" />
                  <p data-text="樂園資訊">樂園資訊</p>
                </a>
              </li>
              <li className="navItem menber">
                <a href="#">
                  <img src="/00myIcon/menber.png" alt="登入" />
                  <p data-text="會員">會員</p>
                </a>
              </li>
            </ul>
            <a href="/ticketpage">
              <img
                src="/00myIcon/ticket.png"
                alt="Ticket"
                className="ticketImg"
              />
            </a>
          </div>
        </nav>
      </header>
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
          <a href="#">
            <Icon.Building /> 樂園設施 <span>&gt;</span>
          </a>
          <a href="#">
            <Icon.TicketPerforated />
            訂票資訊 <span>&gt;</span>
          </a>
          <a href="#">
            <Icon.House /> 訂房資訊 <span>&gt;</span>
          </a>
          <a href="#">
            <Icon.Cart3 /> 飲食購物 <span>&gt;</span>
          </a>
          <a href="#">
            <Icon.CarFront /> 交通資訊 <span>&gt;</span>
          </a>
          <a href="#">
            <Icon.InfoCircle /> 關於islEnigma <span>&gt;</span>
          </a>
          <a href="#">
            <Icon.PatchQuestion /> 樂園資訊 <span>&gt;</span>
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
      <audio id="backgroundMusic" loop>
        <source src="/music/music_EventDeparture.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Navbar
