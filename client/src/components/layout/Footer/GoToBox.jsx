const GoToBox = () => {
  return (
    <div className="goTopBox">
      <a className="goTop" href="#navbarAll">
        <img
          className="goTopArrow"
          src="/icon/topArrowHover.png"
          alt="go top arrow"
        />
        <p>BACK TOP</p>
        <img className="o" src="/footerDeco/circle.png" alt="circle decoration" />
        <svg
          viewBox="0 0 160 160"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle effect-3"
            cx="80"
            cy="80"
            r="75"
            fill="transparent"
          />
        </svg>
      </a>
    </div>
  )
}

export default GoToBox
