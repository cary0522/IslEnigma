const newsData = [
    {
        title: "「迷幻酒吧」新品上市：「幻境雞尾酒」系列",
        date: "2024 / 11 /1 起",
        content: "全新「幻境雞尾酒」系列，結合獨特香料和視覺效果，帶來味蕾的奇幻旅程。"
    },
    {
        title: "「彩虹飛龍」夜間跳傘體驗開放預約",
        date: "2024 / 12 / 1 起，每週五、六晚間",
        content: "在星光下俯衝，體驗刺激的夜間跳傘，欣賞島嶼夜景。"
    },
    {
        title: "「失落小島」新增「古文明密室逃脫」遊戲",
        date: "2025 / 1 / 15 起",
        content: "60分鐘內解開謎題，揭開古老文明的秘密，挑戰智慧與團隊合作。"
    },
    {
        title: "「夢境咖啡廳」推出「味覺幻象」下午茶",
        date: "2025 / 10 / 15 起",
        content: "顛覆對食物的認知，每一口都是味蕾的探索和驚喜。"
    },
    {
        title: "「海洋美饌」舉辦「深海美食節」",
        date: "2025 / 11 / 1 - 11 / 30",
        content: "國際廚師呈現深海食材創新料理，體驗獨特的沉船主題用餐氛圍。"
    },
    {
        title: "跨年特別活動：「時空漩渦」倒數派對",
        date: "2024 / 12 / 31 21:00 至2025 / 1 / 1日 02:00",
        content: "在不同時空主題區域穿梭，迎接新年，有機會贏得全年無限次入園大獎。"
    }
];

function loadNews() {
    const scrollableArea = document.querySelector('.scrollable-area');
    scrollableArea.innerHTML = ''; // 清空現有內容

    newsData.forEach((news, index) => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <div class="news-image">
                <img src="./public/07poster_banner/banner (${index + 1}).webp" alt="${news.title}">
            </div>
            <div class="news-content">
                <h4 class="news-title">${news.title}</h4>
                <p class="news-date">${news.date}</p>
                <p class="news-excerpt">${news.content}</p>
            </div>
        `;
        scrollableArea.appendChild(newsItem);

        // 添加分隔線，除了最後一個項目
        if (index < newsData.length - 1) {
            const hr = document.createElement('hr');
            scrollableArea.appendChild(hr);
        }
    });
}

// 在頁面加載完成後執行 loadNews 函數
document.addEventListener('DOMContentLoaded', loadNews);