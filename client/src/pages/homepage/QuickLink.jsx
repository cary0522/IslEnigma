const QuickLink = () => {
    return (
        <div id="quickLinkBox">
            <div class="qLink imgHover">
                <a href="#" target="_blank">
                    <img src="/homepage/ticket.png" />
                    <p>票價資訊</p>
                </a>
            </div>
            <div class="qLink imgHover">
                <a href="#" target="_blank">
                    <img src="/homepage/traffic.png" />
                    <p>交通資訊</p>
                </a>
            </div>
            <div class="qLink imgHover">
                <a href="#" target="_blank">
                    <img src="/homepage/fac.png" />
                    <p>設施介紹</p>
                </a>
            </div>
            <div class="qLink imgHover">
                <a href="#" target="_blank">
                    <img src="/homepage/food.png" />
                    <p>餐飲美食</p>
                </a>
            </div>
        </div>
    )
}

export default QuickLink;