import React from "react";

function Header(){
    return(
<div id="navbarAll" className="navbarAll">
    <header>
        {/* <!-- 主導航欄  --> */}
        <div className="topNav">
            {/* <!-- 左側按鈕 --> */}
            <div className="headerLeft">
                {/* <!-- 漢堡菜單按鈕  --> */}
                <button id="hamburgerBtn" className="hamburgerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {/* <!-- music播放控制 --> */}
                <div className="musicContainer">
                    <button className="btn music">music
                        <div id="mainMusicSwitcher" className="musicSwitcher">
                            <div className="ball"></div>
                        </div>
                    </button>
                </div>
                {/* <!-- languageDropdown --> */}
                <div className="languageDropdown">
                    <button className="btn language">Language<i className="bi bi-chevron-down"></i></button>
                    <div className="dropdown-content">
                        <a href="#">中文</a>
                        <a href="#">English</a>
                    </div>
                </div>
            </div>
            {/* <!-- mobile logo需要放在中間，手機板出現 --> */}
            <a href="#">
                <img className="topLogo" src="./public/00logo/LogoType_Light_1.png" alt="" />
            </a>
            {/* <!-- 右側按鈕 --> */}
            <div className="headerRight">
                <a href="/cart" className="btnShoppingCart">
                    <i className="bi bi-cart2"></i>
                </a>
                <a href="/login" className="btnLogin">
                    <i className="bi bi-person"></i>
                    <span>Login</span>
                </a>
            </div>
            {/* <!-- ------隱藏次要導覽列功能按鈕 --> */}
            <button id="toggleNavbar" className="toggleNavbar">
                <i className="bi bi-chevron-double-up"></i>
            </button>
        </div>
        {/* <!-- 次導覽欄 --> */}
        <nav className="navbar" >
            {/* <!-- 左側，logo(三種 1920-1024,1024-850,<850) --> */}
            <a href="./index">
                <picture>
                        <source media="(min-width:1024px)" srcSet="./public/00logo/LogoType_Light_2.png" />
                        <source media="(min-width:850px)" srcSet="./public/00logo/LogoType_Light_1.png" />
                        <img src="./public/00logo/LOGO_Light_1.png" alt="Logo" className="logo" />
                </picture>
            </a>
            {/* <!-- 右側按鈕 --> */}
            <div className="navRight">
                {/* <!-- 連結區 --> */}
                <ul className="navLink">
                    <li className="navItem facility">
                        <a href="#">
                            <img src="./public/00myIcon/facility.png" alt="樂園設施" />
                            <p data-text="樂園設施">樂園設施</p>
                        </a>
                    </li>
                    <li className="navItem ticket">
                        <a href="#">
                            <img src="./public/00myIcon/ticket-info.png" alt="訂票資訊" />
                            <p data-text="訂票資訊">訂票資訊</p>
                        </a>
                    </li>
                    <li className="navItem book">
                        <a href="#">
                            <img src="./public/00myIcon/booking-info.png" alt="訂房資訊"/>
                            <p data-text="訂房資訊">訂房資訊</p>
                        </a>
                    </li>
                    {/* <!-- food在下拉選單隱藏 --> */}
                    <li className="navItem food">
                        <a href="#">
                            <img src="./public/00myIcon/restaurant-info.png" alt="飲食購物"/>
                            <p data-text="飲食購物">飲食購物</p>
                        </a>
                    </li>
                    <li className="navItem traffic">
                        <a href="#" >
                            <img src="./public/00myIcon/traffic-info.png" alt="交通資訊"/>
                            <p data-text="交通資訊">交通資訊</p>
                        </a>
                    </li>
                    {/* <!-- about在下拉選單隱藏 --> */}
                    <li className="navItem about">
                        <a href="#">
                            <img src="./public/00myIcon/about.png" alt="關於我們"/>
                            <p data-text="關於我們">關於我們</p>
                        </a>
                    </li>
                    {/* <!-- info在下拉選單隱藏 --> */}
                    <li className="navItem info">
                        <a href="#">
                            <img src="./public/00myIcon/park-info.png" alt="樂園資訊"/>
                            <p data-text="樂園資訊">樂園資訊</p>
                        </a>
                    </li>
                    {/* <!-- menber在下拉選單出現 --> */}
                    <li className="navItem menber">
                        <a href="#">
                            <img src="./public/00myIcon/menber.png" alt="登入"/>
                            <p data-text="會員">會員</p>
                        </a>
                    </li>
                </ul>
                {/* <!-- 最右側快速訂票 --> */}
                <a href="/ticket">
                    <img src="public/00myIcon/ticket.png" alt="Ticket" className="ticketImg"/>
                </a>
            </div>
        </nav>
    </header>
{/* <!-- 漢堡選單(點開後出現側拉選單) --> */}
    <div id="hamburgerMenu" className="hamburgerMenu">
        {/* <!-- 頭部 --> */}
        <div className="menuHeader">
            <span id="closeBtn" className="closeBtn">&times;</span>
            <a href="./index"><img src="./public/00logo/LogoType_Light_1.png" alt="Logo" className="menuLogo" /></a>
            <a href="./cart" className="cartIcon"><i className="bi bi-cart"></i></a>
        </div>
        {/* <!-- 系統按鈕 --> */}
        <div className="systemButtons">
            <div className="btn musicContainer">
                <span>music</span>
                <div id="menuMusicSwitcher" className="musicSwitcher">
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
        {/* <!-- 側拉導覽列 --> */}
        <nav className="menuItems">
            <a href="#"><i className="bi bi-building"></i> 樂園設施 <span>&gt;</span></a>
            <a href="#"><i className="bi bi-ticket-perforated"></i> 訂票資訊 <span>&gt;</span></a>
            <a href="#"><i className="bi bi-house"></i> 訂房資訊 <span>&gt;</span></a>
            <a href="#"><i className="bi bi-cart3"></i> 飲食購物 <span>&gt;</span></a>
            <a href="#"><i className="bi bi-car-front"></i> 交通資訊 <span>&gt;</span></a>
            <a href="#"><i className="bi bi-info-circle"></i> 關於islEnigma <span>&gt;</span></a>
            <a href="#"><i className="bi bi-patch-question"></i> 樂園資訊 <span>&gt;</span></a>
        </nav>
        {/* <!-- 社交連結按鈕 --> */}
        <div className="menuFooter">
        <div className="socialIcons" >
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
            <a href="#"><i className="bi bi-line"></i></a>
        </div>
        <div className="copyright">
            <a href="/about">©bluepen team</a>
        </div>
        </div>
        {/* <!-- 側拉選單的右下訂票按鈕 --> */}
        <a href="#" className="ticketIcon">
            <i className="bi bi-ticket-perforated"></i>
        </a>
    </div>
{/* <!-- music demo--> */}
    <audio id="backgroundMusic" loop>
    <source src="./public/music/music_ EventDeparture.mp3" type="audio/mpeg" />
    </audio>
</div>
    )
}

export default Header;