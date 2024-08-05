import React, { useState, useEffect } from 'react';
import './infolnfo.scss';

const InfoInfo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState([]);
    const [modalContent, setModalContent] = useState(null);
    const itemsPerPage = 12;

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                {
                    icon: 'fas fa-ticket-alt',
                    title: '入園資格',
                    content: '限18歲以上成年人，成人票：$2000',
                    link: '#',
                    details: '本園區僅限18歲以上成年人入園，需出示有效身份證件。成人單日門票價格為新台幣2,000元。VIP票可享優先入園等特權，詳情請查看官網或聯繫客服。'
                },
                {
                    icon: 'fas fa-clock',
                    title: '營業時間',
                    content: '園區：09:00-20:00，設施：09:00-19:30',
                    link: '#',
                    details: '園區全年無休。園區開放時間：09:00-20:00，設施開放時間：09:00-19:30，營地營業時間：08:00-24:00。建議提早入園以充分體驗所有設施。'
                },
                {
                    icon: 'fas fa-map-marker-alt',
                    title: '地點',
                    content: '神秘海島，位於台灣東北太平洋',
                    link: '#',
                    details: 'islEnigma位於神秘海島上，遊客需在指定港口搭乘專屬接駁船（接Boat）前往。主要港口均設有接駁站，購票後即可獲得詳細交通資訊。<img class="img" src="../../public/00info/map.png" alt="a">'
                },
                {
                    icon: 'fas fa-ship',
                    title: '交通',
                    content: '專屬接駁船，園內有遊園車服務',
                    link: '#',
                    details: '搭乘專屬接駁船抵達島嶼。島上設有園內遊園車，每小時一班，方便遊覽各大主題區。接駁船班次頻繁，請依照購票時獲得的時間表搭乘。'
                },
                {
                    icon: 'fas fa-exclamation-triangle',
                    title: '遺失物處理政策',
                    content: '園內設有遺失物品管理中心',
                    link: '#',
                    details: '如果您在園區內遺失了物品，請立即前往遺失物品管理中心報告。工作人員將協助您尋找遺失物品。您也可以撥打園區客服熱線報告遺失情況。找到的遺失物品將在管理中心保存30天，請及時領取。'
                },
                {
                    icon: 'fa-solid fa-hippo',
                    title: '園區動物勿碰',
                    content: '請勿觸碰園區內的動物',
                    link: '#',
                    details: '為了您的安全和動物的健康，請勿觸碰或餵食園區內的所有動物。所有動物均由專業飼養員照料。若遇到任何動物相關問題，請立即聯繫園區工作人員。'
                },
                {
                    icon: 'fas fa-utensils',
                    title: '餐飲',
                    content: '多家特色餐廳和主題咖啡廳',
                    link: '#',
                    details: '園內提供多樣化的餐飲選擇，包括星空餐廳、海洋美饌、夢境咖啡廳等。所有餐廳均提供素食選項。部分高級餐廳需提前預訂。園內禁止攜帶外食。<img class="img" src="../../public/00info/food (73).png" alt="a">'
                },
                {
                    icon: 'fas fa-wheelchair',
                    title: '無障礙設施',
                    content: '全面無障礙通行，提供免費輪椅租借',
                    link: '#',
                    details: '園區全面無障礙通行，大部分設施適合行動不便者使用。提供免費輪椅租借服務（需押證件）。如需特殊協助，請提前聯繫客服中心。'
                },
                {
                    icon: 'fas fa-child',
                    title: '年齡限制',
                    content: '僅限18歲以上成年人入園',
                    link: '#',
                    details: '本園區專為成年人設計，所有設施和體驗均不適合未成年人。入園時請出示有效身份證件，以確保您符合入園資格。'
                },
                {
                    icon: 'fas fa-umbrella-beach',
                    title: '季節活動',
                    content: '每季主題活動，限定體驗',
                    link: '#',
                    details: '園區每季都有特色主題活動，如夏季的「幻光海洋節」、冬季的「星空幻境季」等。部分限定體驗可能需要額外預約或付費，請關注官方公告。'
                },
                {
                    icon: 'fas fa-camera',
                    title: '攝影政策',
                    content: '大部分區域允許拍照，特定區域有限制',
                    link: '#',
                    details: '大多數區域允許拍照和錄影，但禁止使用閃光燈。部分特殊體驗如「海洋探險」VR區域禁止拍攝。進行商業攝影需提前申請許可。請尊重他人隱私。'
                },
                {
                    icon: 'fas fa-suitcase',
                    title: '寄物服務',
                    content: '入口處和園內提供收費寄物櫃',
                    link: '#',
                    details: '園區入口、主要景點區域和餐飲區都設有自助儲物櫃。小型櫃（30x30x50cm）：每4小時$100，中型櫃（45x45x70cm）：每4小時$150，大型櫃（60x60x90cm）：每4小時$200。<img class="img" src="../../public/00info/locker.png" alt="a">'
                },
                {
                    icon: 'fas fa-paw',
                    title: '寵物政策',
                    content: '除導盲犬外，禁止攜帶寵物入園',
                    link: '#',
                    details: '為確保所有遊客的安全和體驗質量，除導盲犬外，禁止攜帶任何寵物入園。園區入口處設有寵物寄存服務，費用為每隻寵物每天$500。'
                },
                {
                    icon: 'fas fa-first-aid',
                    title: '醫療服務',
                    content: '園內設有醫務室，提供基本醫療協助',
                    link: '#',
                    details: '園區內設有多個醫療站，由專業醫護人員24小時駐守。如有緊急情況，請聯繫最近的工作人員或撥打園內緊急熱線。建議購買旅遊保險。'
                },
                {
                    icon: 'fas fa-smoking-ban',
                    title: '吸煙政策',
                    content: '園區大部分區域禁煙，設有指定吸煙區',
                    link: '#',
                    details: '為維護環境和他人健康，園區內除指定吸煙區外，所有區域均嚴禁吸煙。違規吸煙可能被要求離園。指定吸煙區位置請參考園區地圖或諮詢工作人員。'
                },
                {
                    icon: 'fas fa-wifi',
                    title: 'Wi-Fi服務',
                    content: '園區提供免費Wi-Fi',
                    link: '#',
                    details: '園區全區提供免費Wi-Fi服務。連接名稱：IslEnigma_Free，密碼可在遊客中心或服務櫃檯索取。某些特殊體驗區可能會要求暫時關閉設備，以獲得最佳體驗。'
                },
                {
                    icon: 'fas fa-credit-card',
                    title: '支付方式',
                    content: '接受現金、信用卡和行動支付',
                    link: '#',
                    details: '園區內接受新台幣現金、主要信用卡（Visa、MasterCard、JCB）、及主流行動支付方式。部分設施和商店可能不接受大面額鈔票，建議準備適量零錢。'
                },
                {
                    icon: 'fas fa-language',
                    title: '語言服務',
                    content: '提供中、英服務',
                    link: '#',
                    details: '園區主要標識均有中、英語言。提供中文、英文導覽服務（需預約）。部分特殊體驗可能僅提供中文服務，請在預訂時確認。'
                },
                {
                    icon: 'fas fa-user-shield',
                    title: '安全措施',
                    content: '24小時保安巡邏，設有監控系統',
                    link: '#',
                    details: '園區設有24小時保安巡邏和全覆蓋的監控系統。所有員工均經過嚴格的安全培訓。遇到可疑情況請立即報告給工作人員。貴重物品請妥善保管或使用保險箱服務。'
                },
                {
                    icon: 'fa-solid fa-campground',
                    title: '住宿選擇',
                    content: '提供多種主題住宿體驗',
                    link: '#',
                    details: '園區提供多種特色住宿：星空夢幻帳篷（$12,000/晚）、海洋之眼套房（$15,000/晚）、叢林樹屋（$18,000/晚）、幻境派對營地（$30,000/晚）。所有房型含早餐和園區門票。'
                },
                {
                    icon: 'fas fa-cocktail',
                    title: '特色體驗',
                    content: '多種感官刺激和主題體驗',
                    link: '#',
                    details: '園區提供多種特色體驗，如「幻光森林」夜間光影秀、「海洋探險」4D劇場、「彩虹飛龍」高空跳傘等。部分體驗需額外預約或付費，請查看官網或現場諮詢。'
                },
                {
                    icon: 'fas fa-moon',
                    title: '夜間活動',
                    content: '豐富的夜間表演和體驗',
                    link: '#',
                    details: '夜晚的園區別有風味，提供「幻光森林」夜間光影秀（每晚20:00和21:30）、星空觀測活動、夜間海洋生物觀察等。部分活動需提前預約，請關注官方公告。'
                },
                {
                    icon: 'fas fa-tshirt',
                    title: '著裝建議',
                    content: '建議穿著舒適、防滑的服裝和鞋子',
                    link: '#',
                    details: '建議穿著舒適、透氣的衣物和防滑鞋子。部分設施可能會濺水，可攜帶防水外套或替換衣物。晚間活動可能較涼，建議攜帶外套。某些主題餐廳可能有著裝要求。'
                },
                {
                    icon: 'fas fa-sun',
                    title: '防曬措施',
                    content: '室外活動建議做好防曬',
                    link: '#',
                    details: '園區有許多戶外活動，建議攜帶並經常使用防曬用品。園內商店有販售防曬用品。部分區域提供遮陽設施，但仍建議攜帶帽子或陽傘。請隨時補充水分，保持身體舒適。'
                },
                {
                    icon: 'fas fa-volume-up',
                    title: '噪音水平',
                    content: '部分設施音量較大，提供耳塞服務',
                    link: '#',
                    details: '某些刺激性設施或表演的音量可能較大。園區在這些區域免費提供耳塞。對噪音敏感的遊客可以在入園時向服務人員索取耳塞，或選擇避開這些區域。'
                },
                {
                    icon: 'fas fa-hand-holding-water',
                    title: '飲水設施',
                    content: '園內設有多處飲水機',
                    link: '#',
                    details: '為了環保和方便遊客，園內設有多處飲水機。建議自備水壺，可在園內隨時補充飲用水。所有餐廳也提供免費的飲用水。請保持充足水分，特別是在炎熱天氣或參與刺激性活動後。'
                },
                {
                    icon: 'fas fa-restroom',
                    title: '洗手間設施',
                    content: '園區各處均設有洗手間',
                    link: '#',
                    details: '園區內每個主題區都設有清潔的洗手間設施，包括無障礙洗手間。所有洗手間均配備了尿布更換台。如需求助或特殊協助，請聯繫附近的工作人員。'
                },
                {
                    icon: 'fas fa-shoe-prints',
                    title: '步行指南',
                    content: '園區面積大，建議穿舒適鞋子',
                    link: '#',
                    details: '園區佔地72公頃，有大量步行機會。建議穿著舒適、防滑的鞋子。園內提供地圖指南，標註了休息區和捷徑。如感疲勞，可搭乘園內接駁車在主要景點間移動。'
                },
                {
                    icon: 'fas fa-memory',
                    title: '紀念品服務',
                    content: '特色紀念品店和客製化服務',
                    link: '#',
                    details: '園區設有多家主題紀念品商店，提供獨特的islEnigma限定商品。部分商品提供客製化服務，如刻字或印製照片。某些特殊體驗還提供專屬紀念品，建議在體驗後選購。<a class="btn button">查看商店</a>'
                },
                {
                    icon: 'fas fa-assistive-listening-systems',
                    title: '聽力輔助',
                    content: '提供聽力輔助設備租借服務',
                    link: '#',
                    details: '為聽力障礙遊客提供免費的聽力輔助設備租借服務。包括助聽器和字幕設備，適用於大部分表演和導覽活動。請在遊客服務中心出示相關證件辦理租借。'
                },
                {
                    icon: 'fas fa-landmark',
                    title: '主題區介紹',
                    content: '三大主題區各具特色',
                    link: '#',
                    details: '園區分為三大主題區：1. 璀璨綠洲：包括幻光森林、星空餐廳等。2. 嗨游洋外：提供海洋探險4D劇場、珊瑚礁之旅等。3. 失落小島：神秘主題，包括古文明密室逃脫等。每個區域都有獨特的景觀和體驗。'
                },
                {
                    icon: 'fas fa-person-booth',
                    title: '隱私政策',
                    content: '尊重遊客隱私，謹慎處理個資',
                    link: '#',
                    details: '我們高度重視遊客的隱私權。所有收集的個人資料僅用於改善服務質量和必要的聯絡用途。不會向第三方出售或共享您的個人信息。詳細隱私政策請參閱官網。'
                },
                {
                    icon: 'fas fa-recycle',
                    title: '環保政策',
                    content: '實施多項環保措施，鼓勵遊客參與',
                    link: '#',
                    details: '園區實施嚴格的環保政策，包括廢棄物分類回收、使用可再生能源、節水措施等。我們鼓勵遊客攜帶可重複使用的水壺，並參與我們的環保活動。共同為保護環境盡一份心力。'
                },
                {
                    icon: 'fas fa-hand-holding-heart',
                    title: '特殊需求服務',
                    content: '為特殊需求遊客提供貼心服務',
                    link: '#',
                    details: '我們致力於為所有遊客提供愉快的體驗。如您有任何特殊需求（如飲食限制、行動不便等），請提前與我們聯繫。我們的專業團隊將為您量身定制服務方案。'
                },
                {
                    icon: 'fas fa-comment-dots',
                    title: '意見回饋',
                    content: '歡迎提供寶貴意見，不斷改進服務',
                    link: '#',
                    details: '我們非常重視遊客的意見。園區內設有多個意見箱，您也可以通過官網或App提交反饋。對於任何建議或投訴，我們承諾在3個工作日內回覆。您的意見是我們持續改進的動力。'
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: '特別節日安排',
                    content: '節日期間有特殊活動和延長營業時間',
                    link: '#',
                    details: '在主要節日（如春節、聖誕節等）期間，園區會推出特別活動和表演。通常會延長營業時間，並可能有特別的票價優惠。具體安排請關注官方公告或詢問客服。'
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: '教育項目',
                    content: '提供特殊的成人教育和體驗活動',
                    link: '#',
                    details: '除了娛樂設施，我們還提供多種教育性質的活動，如海洋生態保護講座、藝術創作工作坊、心理健康講座等。這些活動旨在提供成人繼續教育和自我提升的機會。請查看活動日程安排。'
                },
                {
                    icon: 'fas fa-person-booth',
                    title: '隱私政策',
                    content: '尊重遊客隱私，謹慎處理個資',
                    link: '#',
                    details: '我們高度重視遊客的隱私權。所有收集的個人資料僅用於改善服務質量和必要的聯絡用途。不會向第三方出售或共享您的個人信息。詳細隱私政策請參閱官網。'
                },
                {
                    icon: 'fas fa-user-shield',
                    title: '安全措施',
                    content: '24小時保安巡邏，設有監控系統',
                    link: '#',
                    details: '園區設有24小時保安巡邏和全覆蓋的監控系統。所有員工均經過嚴格的安全培訓。遇到可疑情況請立即報告給工作人員。貴重物品請妥善保管或使用保險箱服務。'
                }
            ];
            setCardData(data);
        };

        fetchData();
    }, []);
    const displayCards = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = cardData.slice(startIndex, endIndex);

        return pageItems.map((item, index) => (
            <div className="col" key={index}>
                <div className="card" onClick={() => openModal(item)}>
                    <div className="iconContainer">
                        <i className={item.icon}></i>
                    </div>
                    <div className="cardContent">
                        <h5 className="cardTitle">{item.title}</h5>
                        <div className="lineCircle">
                            <div className="cardLine"></div>
                        </div>
                        <p className="cardText">{item.content}</p>
                        <a href={item.link} className="btnLink" onClick={(e) => handleLinkClick(e, item)}>了解更多</a>
                    </div>
                </div>
            </div>
        ));
    };

    const setupPagination = () => {
        const pageCount = Math.ceil(cardData.length / itemsPerPage);
        return Array.from({ length: pageCount }, (_, i) => (
            <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
                <a className="page-link" href="#" onClick={(e) => handlePageChange(e, i + 1)}>{i + 1}</a>
            </li>
        ));
    };

    const handlePageChange = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const handleLinkClick = (e, item) => {
        e.stopPropagation(); // 防止觸發卡片的點擊事件
        openModal(item); // 直接打開模態框
    };

    const openModal = (item) => {
        setModalContent(item);
        const modal = new window.bootstrap.Modal(document.getElementById('detailModal'));
        modal.show();
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div id="infoPage" className="infoPage">
            <div className="container">
                <ul className="pagination justify-content-center my-4" id="paginationTop">
                    {setupPagination()}
                </ul>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="infoCards">
                    {cardData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                        <div className="col" key={index}>
                            <div className="card" onClick={() => openModal(item)}>
                                <div className="iconContainer">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="cardContent">
                                    <h5 className="cardTitle">{item.title}</h5>
                                    <div className="lineCircle">
                                        <div className="cardLine"></div>
                                    </div>
                                    <p className="cardText">{item.content}</p>
                                    <a href="#" className="btnLink" onClick={(e) => handleLinkClick(e, item)}>了解更多</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <ul className="pagination justify-content-center my-4" id="paginationBottom">
                    {setupPagination()}
                </ul>
            </div>

            {modalContent && (
                <>
                    <div className="modal show" style={{ display: 'block' }} onClick={closeModal}>
                        <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="detailModalLabel">{modalContent.title}</h5>
                                    <button type="button" className="btn-close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p dangerouslySetInnerHTML={{ __html: modalContent.details }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" show"></div>
                </>
            )}
        </div>
    );
};

export default InfoInfo;