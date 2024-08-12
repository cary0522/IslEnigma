const QuickLink = () => {
    return (
        <div id="quickLinkBox">
            <div className="qLink imgHover">
                <a href="/ticketpage" target="_blank">
                    <img src="/homepage/ticket.png" />
                    <p>票價資訊</p>
                </a>
            </div>
            <div className="qLink imgHover">
                <a href="/boatpage" target="_blank">
                    <img src="/homepage/traffic.png" />
                    <p>交通資訊</p>
                </a>
            </div>
            <div className="qLink imgHover">
                <a href="/mappage" target="_blank">
                    <img src="/homepage/fac.png" />
                    <p>設施介紹</p>
                </a>
            </div>
            <div className="qLink imgHover">
                <a href="/restaurantpage" target="_blank">
                    <img src="/homepage/food.png" />
                    <p>餐飲美食</p>
                </a>
            </div>
        </div>
    )
}

export default QuickLink;