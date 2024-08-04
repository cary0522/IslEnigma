$(document).ready(function () {
    const rooms = [
        {
            roomTypeEng: "Grass Tempo",
            roomType: "簡約帳篷 | 草原步調",
            roomSlogan: "擁抱自然簡約風，享受寧靜草原夜景",
            roomDesc: "簡約帳篷位於寬闊的草原上，讓您親近大自然，享受寧靜的時光。帳篷內部簡約舒適，配備必要的現代化設施，為您提供舒適的住宿體驗。在這裡，您可以欣賞美麗的日出日落，感受微風拂面，聆聽蟲鳴鳥叫，真正放鬆身心。",
            roomTags: ["#草原景觀", "#簡約舒適", "#親近自然"],
            roomDetails: [
                { icon: "fa-users", text: "適合人數", subtext: "2-4人" },
                { icon: "fa-expand-arrows-alt", text: "空間坪數", subtext: "15坪" },
                { icon: "fa-bed", text: "舒適床鋪", subtext: "雙人床" },
                { icon: "fa-shower", text: "獨立衛浴", subtext: "淋浴間" },
                { icon: "fa-wifi", text: "免費Wi-Fi", subtext: "高速網絡" },
                { icon: "fa-coffee", text: "咖啡茶飲", subtext: "自助吧台" },
                { icon: "fa-temperature-low", text: "空調", subtext: "恆溫控制" },
                { icon: "fa-solid fa-couch", text: "高級家具", subtext: "訂製" },

            ],
            roomMemo: "***適合2-4人入住，提供額外加床服務",
            images: ['./public/03rooms/room (26).png', './public/03rooms/room (12).jpeg', './public/03rooms/room (32).png', "./public/03rooms/room (2).jpg"]
        },
        {
            roomTypeEng: "Ocean Serenity",
            roomType: "豪華帳棚 | 沉靜海洋",
            roomSlogan: "聆聽海浪聲，感受奢華露營體驗",
            roomDesc: "豪華帳棚坐落於海岸線附近，為您帶來奢華的海濱露營體驗。寬敞的內部空間配備高級設施，讓您在舒適中欣賞壯麗的海景。您可以在私人露台上觀賞日出日落，聆聽海浪的韻律，享受無與倫比的寧靜與奢華。",
            roomTags: ["#海景第一排", "#奢華設施", "#私密空間"],
            roomDetails: [
                { icon: "fa-users", text: "適合人數", subtext: "2-4人" },
                { icon: "fa-expand-arrows-alt", text: "空間坪數", subtext: "25坪" },
                { icon: "fa-hot-tub", text: "私人按摩浴缸", subtext: "海景浴缸" },
                { icon: "fa-utensils", text: "海景餐廳", subtext: "提供特別點心" },
                { icon: "fa-cocktail", text: "調酒服務", subtext: "房內點單" },
                { icon: "fa-concierge-bell", text: "24小時", subtext: "專屬服務" },
                { icon: "fa-umbrella-beach", text: "私人沙灘", subtext: "專屬區域" },
                { icon: "fa-solid fa-water", text: "海景", subtext: "第一線" }
            ],
            roomMemo: "***最多可容納4人，贈送海洋防曬備品一組",
            images: ['./public/03rooms/room (13).jpg', './public/03rooms/room (10).jpeg', './public/03rooms/room (24).jpeg', './public/03rooms/room (64).png']
        },
        {
            roomTypeEng: "Island Trails",
            roomType: "高級帳篷 | 島嶼蹤跡",
            roomSlogan: "探索島嶼秘境，高級舒適盡在此處",
            roomDesc: "高級帳篷位於島嶼的核心地帶，為冒險愛好者提供舒適的大本營。帳篷配備現代化設施，讓您在探索島嶼秘境後有一個放鬆身心的溫馨港灣。從這裡出發，您可以輕鬆地探索島上的自然美景和文化遺產。",
            roomTags: ["#探險基地", "#自然美景", "#文化體驗"],
            roomDetails: [
                { icon: "fa-users", text: "適合人數", subtext: "4-6人" },
                { icon: "fa-expand-arrows-alt", text: "空間坪數", subtext: "25坪" },
                { icon: "fa-hiking", text: "專業嚮導", subtext: "每日行程" },
                { icon: "fa-bicycle", text: "自行車", subtext: "隨營附" },
                { icon: "fa-camera", text: "攝影裝備", subtext: "專業器材" },
                { icon: "fa-map-marked-alt", text: "探險地圖", subtext: "每日更新" },
                { icon: "fa-first-aid", text: "急救設備", subtext: "安全保障" },
                { icon: "fa-solid fa-campground", text: "營火晚會", subtext: "文化交流" }

            ],
            roomMemo: "***適合多人入住，提供島嶼探險套裝",
            images: ['./public/03rooms/room (7).png', './public/03rooms/room (15).jpeg', './public/03rooms/room (23).jpeg', './public/03rooms/room (59).png']
        },
        {
            roomTypeEng: "Starry Dome",
            roomType: "圓球帳篷 | 夢幻星空",
            roomSlogan: "仰望星空，倚看穹頂晨曦與夜色星空",
            roomDesc: "圓球帳篷是觀星愛好者的天堂。透明的穹頂設計讓您可以舒適地躺在床上，欣賞璀璨的星空。白天，您可以欣賞全景的自然風光；夜晚，則可以在溫暖的被窩中數星星。這裡提供了一個與宇宙親密接觸的獨特機會。",
            roomTags: ["#星空觀賞", "#全景視野", "#浪漫體驗"],
            roomDetails: [
                { icon: "fa-users", text: "適合人數", subtext: "2-3人" },
                { icon: "fa-expand-arrows-alt", text: "空間坪數", subtext: "18坪" },
                { icon: "fa-star", text: "天文望遠鏡", subtext: "專業設備" },
                { icon: "fa-moon", text: "星圖指南", subtext: "隨帳附贈" },
                { icon: "fa-lightbulb", text: "氛圍照明", subtext: "智能控制" },
                { icon: "fa-temperature-low", text: "恆溫控制", subtext: "全天候舒適" },
                { icon: "fa-couch", text: "觀星沙發", subtext: "舒適體驗" },
                { icon: "fa-glass-cheers", text: "香檳服務", subtext: "浪漫氛圍" }
            ],
            roomMemo: "***適合喜愛夜間探索的您，體驗專業天文導覽",
            images: ['./public/03rooms/room (1).jpeg', './public/03rooms/room (47).png', './public/03rooms/room (29).png', './public/03rooms/room (8).jpg']
        }
    ];

    function createRoomElement(room, index) {
        const roomId = room.roomTypeEng.toLowerCase().replace(/\s+/g, '');
        let imagesHTML = room.images.map((img, imgIndex) =>
            `<div class="carousel-item ${imgIndex === 0 ? 'active' : ''}">
            <img src="${img}" alt="房間圖片 ${imgIndex + 1}" class="d-block w-100">
         </div>`
        ).join('');

        let indicatorsHTML = room.images.map((img, imgIndex) =>
            `<button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="${imgIndex}" 
         ${imgIndex === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${imgIndex + 1}"></button>`
        ).join('');

        let tagsHTML = room.roomTags.map(tag => `<span class="tag">${tag}</span>`).join('');

        let detailsHTML = room.roomDetails.map(detail => `
        <div class="detailItem">
            <i class="fas ${detail.icon}"></i>
            <span>${detail.text}</span>
            <span>${detail.subtext}</span>
        </div>
    `).join('');

        let carouselHTML = `
        <div class="roomCarousel">
            <div id="carousel-${index}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    ${indicatorsHTML}
                </div>
                <div class="carousel-inner">
                    ${imagesHTML}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="thumbnails">
                ${room.images.slice(1).map((img, i) => `
                    <img src="${img}" alt="縮略圖 ${i + 2}" onclick="$('#carousel-${index}').carousel(${i + 1})">
                `).join('')}
            </div>
        </div>
    `;

        let infoHTML = `
        <div class="roomInfo">
            <h2 class="roomTypeEng">${room.roomTypeEng}</h2>
            <h3 class="roomType">${room.roomType}</h3>
            <p class="roomMoreSlogan">${room.roomSlogan}</p>
            <p class="roomDesc">${room.roomDesc}</p>
            <div class="roomTags">
                ${tagsHTML}
            </div>
            <div class="roomDetails">
                ${detailsHTML}
            </div>
            <div class="roomActions">
                <p class="roomMemo">${room.roomMemo}</p>
                <a href="#roomFacilities" class="checkFacilities">查看設備</a>
            </div>
        </div>
    `;


        // 根據索引決定佈局方向
        let content;
        if (index % 2 === 0) {
            // 偶數索引（0, 2）：圖左文右
            content = `
            <div class="roomCarousel">${carouselHTML}</div>
            <div class="roomInfo">${infoHTML}</div>
        `;
        } else {
            // 奇數索引（1, 3）：圖右文左
            content = `
           <div class="roomCarousel">${carouselHTML}</div>
            <div class="roomInfo">${infoHTML}</div>
            
        `;
        }

        return `
    <div id="${roomId}" class="roomItem ${index % 2 === 0 ? 'even' : 'odd'}">
        ${content}
    </div>
`;
    }


    // 插入房間資訊
    rooms.forEach((room, index) => {
        $('#roomMore').append(createRoomElement(room, index));
    });

    // 初始化所有輪播
    $('.carousel').carousel();

    // 點擊查看設備按鈕的事件處理
    $(document).on('click', '.checkFacilities', function () {
        console.log('查看設備按鈕被點擊');
    });
});
