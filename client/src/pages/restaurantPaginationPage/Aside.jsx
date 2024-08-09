function Aside(){
    return(
        <aside>
        <div className="sidebar">
            <h2>餐飲設施</h2>
            <a href="/restaurantpage/pagination/1" data-id="1" >
                <h4>星空餐廳</h4>
            </a>
            <a href="/restaurantpage/pagination/2" data-id="2">
                <h4>夢境咖啡廳</h4>
            </a>
            <a href="/restaurantpage/pagination/3" data-id="3">
                <h4>海洋珍饌</h4>
            </a>
            <a href="/restaurantpage/pagination/4" data-id="4">
                <h4>光影咖啡廳</h4>
            </a>
            <a href="/restaurantpage/pagination/5" data-id="5">
                <h4>迷幻酒吧</h4>
            </a>
            <a href="/restaurantpage/pagination/6" data-id="6">
                <h4>異域市集</h4>
            </a>
        </div>
    </aside>
    )
}

export default Aside;