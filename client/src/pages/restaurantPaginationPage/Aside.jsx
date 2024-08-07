function Aside(){
    return(
        <aside>
        <div className="sidebar">
            <h2>餐飲設施</h2>
            <a href="#" data-id="1" onclick="loadRestaurantData('1')">
                <h4>星空餐廳</h4>
            </a>
            <a href="#" data-id="2" onclick="loadRestaurantData('2')">
                <h4>夢境咖啡廳</h4>
            </a>
            <a href="#" data-id="3" onclick="loadRestaurantData('3')">
                <h4>海洋珍饌</h4>
            </a>
            <a href="#" data-id="4" onclick="loadRestaurantData('4')">
                <h4>光影咖啡廳</h4>
            </a>
            <a href="#" data-id="5" onclick="loadRestaurantData('5')">
                <h4>迷幻酒吧</h4>
            </a>
            <a href="#" data-id="6" onclick="loadRestaurantData('6')">
                <h4>異域市集</h4>
            </a>
        </div>
    </aside>
    )
}

export default Aside;