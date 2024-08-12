import WeatherBox from "./WeatherBox"

const HomeBanner = () => {
    return (
        <div className="wrap">
            <div className="bannerImgBox">
                <img src="/homepage/bannerMove.gif" />
            </div>
            <div className="logoBox">
                <img src="/homepage/logo.png" />
            </div>
            <WeatherBox />
        </div>
    )
}

export default HomeBanner;