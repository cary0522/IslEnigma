$(document).ready(() => {
    const newsItems = [
        {
            mainImage: './public/07poster_banner/banner (17).png',
            title: '「幻光森林」全新夜間光影秀',
            date: ' 2024 / 10 / 1 - 10 / 31',
            content: '準備迎接「幻光森林」的全新夜間光影秀！我們結合最先進的投影技術和音樂，為您呈現一場前所未有的視聽盛宴。在森林深處，光影交錯間，您將踏入一個充滿魔力的奇幻世界。每晚8點準時開演，持續90分鐘，讓您的感官體驗提升到新的高度。',
            subImage: './public/03rooms/room (47).png',
            subTitle: '露營區推出「星空帳篷」主題住宿',
            subDate: ' 2024 / 7 / 1 起 新推出!'
        },
        {
            mainImage: './public/03rooms/room (47).png',
            title: '露營區推出「星空帳篷」主題住宿',
            date: '2024 / 7 / 1 起 新推出!',
            content: '想要在星空下入眠嗎？「高級露營區」推出全新「星空帳篷」主題住宿。特製的透明帳篷頂部讓您躺在床上就能欣賞璀璨星空。每個帳篷都配備了望遠鏡和星圖，讓您輕鬆進行星空觀測。白天享受海島風光，夜晚沐浴星光，體驗難忘的露營之旅。',
            subImage: './public/07poster_banner/banner (10).webp',
            subTitle: '「海底隧道」引進稀有深海生物展',
            subDate: '2025 / 2 /1 - 4 / 30'
        },
        {
            mainImage: './public/07poster_banner/banner (10).webp',
            title: '「海底隧道」引進稀有深海生物展',
            content: '「海底隧道」即將迎來一批神秘的客人！我們與國際海洋研究所合作，引進了多種罕見的深海生物，包括發光的深海魚類和奇特的無脊椎動物。這些生物平時生活在數千米深的海底，現在您有機會近距離觀察它們的奇妙生態。',
            subImage: './public/07poster_banner/banner (17).png',
            subTitle: '「幻光森林」全新夜間光影秀',
            subDate: '2024 / 10 / 1 -  10 / 31'
        }
    ];
    let currentIndex = 0;

    // 更新主要內容區域
    const updateMainContent = (index) => {
        const item = newsItems[index];
        $('.mainImageItem img').attr('src', item.mainImage);
        $('.imageOverlay h3').text(item.title);
        $('.imageOverlay .time').html(item.date);
        $('.imageOverlay p').text(item.content);
    };

    // 更新子新聞區域
    const updateSubNews = (index) => {
        const nextIndex = (index + 1) % newsItems.length;
        const nextItem = newsItems[nextIndex];
        $('.subNews .imageItem img').attr('src', nextItem.subImage);
        $('.subNews .textItem p').text(nextItem.subTitle);
        $('.subNews .textItem .date').html(nextItem.subDate);
    };

    // 切換到下一個新聞
    const showNextNews = () => {
        currentIndex = (currentIndex + 1) % newsItems.length;
        updateContent();
    };

    // 切換到上一個新聞
    const showPrevNews = () => {
        currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
        updateContent();
    };

    // 更新所有內容
    const updateContent = () => {
        $('.mainContent').fadeOut(300, () => {
            updateMainContent(currentIndex);
            updateSubNews(currentIndex);
            $('.mainContent').fadeIn(300);
        });
    };

    // 綁定按鈕事件
    $('.btn-next').on('click', showNextNews);
    $('.btn-prev').on('click', showPrevNews);

    // 初始化顯示
    updateContent();
});
