import React from 'react';
import NewsItem from './NewsItem';
import EventCard from './EventCard';
import ListOutside from './ListOutside';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMb: window.innerWidth >= 375 && window.innerWidth <= 1311,
            newsBoxStyle: {},
            overlayStyle: {},
            leftBackVisible: false,
            rightBackVisible: false,
            leftListBoxVisible: false,
            rightListBoxVisible: false,
            modalVisible: false,
            btnShowLeft: true,
            btnShowRight: true,
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleEscape = this.handleEscape.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('keydown', this.handleEscape);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('keydown', this.handleEscape);
    }

    handleResize() {
        this.setState({
            isMb: window.innerWidth >= 375 && window.innerWidth <= 1311,
        });
    }

    handleToggle(target) {
        if (target === 'leftBox') {
            this.setState({
                newsBoxStyle: { transform: 'translateX(0%)' },
                overlayStyle: !this.state.isMb ? { transform: 'translateX(-100%) translateY(-50%) scale(0.7)', opacity: '0.6' } : {},
                leftBackVisible: true,
                rightBackVisible: false,
                leftListBoxVisible: true,
                btnShowLeft: false,
                btnShowRight: true,
            });
        } else if (target === 'rightBox') {
            this.setState({
                newsBoxStyle: { transform: 'translateX(-50%)' },
                overlayStyle: !this.state.isMb ? { transform: 'translateX(106.5%) translateY(-50%) scale(0.7)', opacity: '0.6' } : {},
                rightBackVisible: true,
                leftBackVisible: false,
                rightListBoxVisible: true,
                btnShowLeft: true,
                btnShowRight: false,
            });
        } else if (target === 'overlay') {
            this.setState({
                newsBoxStyle: { transform: 'translateX(-25%)' },
                overlayStyle: { opacity: '1' },
                leftBackVisible: false,
                rightBackVisible: false,
                leftListBoxVisible: false,
                rightListBoxVisible: false,
                btnShowLeft: true,
                btnShowRight: true,
            });
        }
    }

    openModal() {
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
    }

    handleEscape(event) {
        if (event.key === 'Escape') {
            this.closeModal();
        }
    }

    render() {
        const {
            isMb,
            newsBoxStyle,
            overlayStyle,
            leftBackVisible,
            rightBackVisible,
            leftListBoxVisible,
            rightListBoxVisible,
            modalVisible,
            btnShowLeft,
            btnShowRight,
        } = this.state;

        return (
            <div className="wrap">
                <div className="newsBox" style={newsBoxStyle}>
                    <div className={`modal-overlay ${modalVisible ? '' : 'overlay-visible'}`} onClick={this.closeModal}></div>
                    <div className="overlay" style={overlayStyle}>
                        <span className="deco">islEnigma</span>
                        <img src="/homepage/newsLogo.png" />
                    </div>
                    <div className="leftBox">
                        <span className="title">NEWS</span>
                        <div className="newsList" style={{ visibility: leftListBoxVisible ? 'visible' : 'hidden' }}>
                            <div class="listBox">
                                <div class="newsItem">
                                    <img src="./image/poster.jpg"
                                        width="280px"/>
                                        <h2>【7/15 - 7/21 設施維修公告】</h2>
                                        <p>本週將進行維修的設施包括飛行塔和旋轉木馬<br />
                                            維修期間這些設施將暫停開放，我們將盡快完成維修以恢復正常運營<br />
                                            感謝您的理解與支持！
                                        </p>
                                        <button class="btnClose">關閉</button>
                                </div>
                            </div>
                            <div class="listOutside">
                                <div>
                                    <span>news</span>
                                    <p class="date">2023.07.11</p>
                                </div>
                                <div>
                                    <h3>7/15 - 7/21 設施維修公告</h3>
                                    <button class="btnTrigger">＋</button>
                                </div>
                            </div>
                            <div class="listBox">
                                <div class="newsItem">
                                    <img src="https://i.pinimg.com/736x/2e/e8/d0/2ee8d03a2b5cd5f9afa6aba460630a77.jpg"
                                        width="100px"/>
                                        <h2>這是消息一的標題</h2>
                                        <p>這裡可以放消息一的內文，一大堆內文呦</p>
                                        <button class="btnClose">關閉</button>
                                </div>
                            </div>
                            <div class="listOutside">
                                <div>
                                    <span>news</span>
                                    <p class="date">2023.07.11</p>
                                </div>
                                <div>
                                    <h3>樂園設施維修公告一覽表</h3>
                                    <button class="btnTrigger">＋</button>
                                </div>
                            </div>
                            <div class="listBox">
                                <div class="newsItem">
                                    <img src="https://i.pinimg.com/736x/2e/e8/d0/2ee8d03a2b5cd5f9afa6aba460630a77.jpg"
                                        width="100px"/>
                                        <h2>這是消息一的標題</h2>
                                        <p>這裡可以放消息一的內文，一大堆內文呦</p>
                                        <button class="btnClose">關閉</button>
                                </div>
                            </div>
                            <div class="listOutside">
                                <div>
                                    <span>news</span>
                                    <p class="date">2023.07.11</p>
                                </div>
                                <div>
                                    <h3>樂園設施維修公告一覽表</h3>
                                    <button class="btnTrigger">＋</button>
                                </div>
                            </div>
                            <div class="listBox">
                                <div class="newsItem">
                                    <img src="https://i.pinimg.com/736x/2e/e8/d0/2ee8d03a2b5cd5f9afa6aba460630a77.jpg"
                                        width="100px"/>
                                        <h2>這是消息一的標題</h2>
                                        <p>這裡可以放消息一的內文，一大堆內文呦</p>
                                        <button class="btnClose">關閉</button>
                                </div>
                            </div>
                            <div class="listOutside">
                                <div>
                                    <span>news</span>
                                    <p class="date">2023.07.11</p>
                                </div>
                                <div>
                                    <h3>樂園設施維修公告一覽表</h3>
                                    <button class="btnTrigger">＋</button>
                                </div>
                            </div>
                            <div class="listBox">
                                <div class="newsItem">
                                    <img src="https://i.pinimg.com/736x/2e/e8/d0/2ee8d03a2b5cd5f9afa6aba460630a77.jpg"
                                        width="100px"/>
                                        <h2>這是消息一的標題</h2>
                                        <p>這裡可以放消息一的內文，一大堆內文呦</p>
                                        <button class="btnClose">關閉</button>
                                </div>
                            </div>
                            <div class="listOutside">
                                <div>
                                    <span>news</span>
                                    <p class="date">2023.07.11</p>
                                </div>
                                <div>
                                    <h3>樂園設施維修公告一覽表</h3>
                                    <button class="btnTrigger">＋</button>
                                </div>
                            </div>
                        </div>
                        <div className="logoImgBox">
                            <img src="/homepage/newsLogo.png" />
                        </div>
                        <div className="btnShowLeft">
                            {btnShowLeft && (
                                <button className="toggleBtn" data-target="leftBox" onClick={() => this.handleToggle('leftBox')}>
                                    {"<"}
                                </button>
                            )}
                        </div>
                        <div className="leftBack" style={{ visibility: leftBackVisible ? 'visible' : 'hidden' }}>
                            <a className="toggleBtn" data-target="overlay" onClick={() => this.handleToggle('overlay')}>
                                回主選單
                            </a>
                        </div>
                    </div>
                    <div className="rightBox">
                        <span className="title">EVENTS</span>
                        <div className="logoImgBox">
                            <img src="/homepage/newsLogo.png" />
                        </div>
                        <div className="eventList" style={{ visibility: rightListBoxVisible ? 'visible' : 'hidden' }}>
                            <swiper-container class="mySwiper" effect="cards">
                                <swiper-slide>
                                    <div class="content">
                                        <div class="upperContent">
                                            <img src="/homepage/event2.png" />
                                            <div class="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
                                        </div>
                                        <div class="belowContent">
                                            <p class="eventName">海底奇景</p>
                                            <p class="eventDes">藍藍的海，你期待看見什麼？</p>
                                            <div class="btnMore">
                                                <a href="#">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="content">
                                        <div class="upperContent">
                                            <img src="/homepage/bar.jpg" />
                                            <div class="location"><span><img src="/homepage/map.png" /></span>失落小島</div>
                                        </div>
                                        <div class="belowContent">
                                            <p class="eventName">調酒DIY</p>
                                            <p class="eventDes">一起發瘋喝醉吧</p>
                                            <div class="btnMore">
                                                <a href="#">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="content">
                                        <div class="upperContent">
                                            <img src="/homepage/fac.png" />
                                            <div class="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
                                        </div>
                                        <div class="belowContent">
                                            <p class="eventName">愛麗鯊鯊在哪裡！</p>
                                            <p class="eventDes">下海體驗被鯊魚包圍的感覺（？</p>
                                            <div class="btnMore">
                                                <a href="#">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="content">
                                        <div class="upperContent">
                                            <img src="/homepage/event3.png" />
                                            <div class="location"><span><img src="/homepage/map.png" /></span>？？</div>
                                        </div>
                                        <div class="belowContent">
                                            <p class="eventName">有夠高</p>
                                            <p class="eventDes">沒有人跳水在綁安全繩的</p>
                                            <div class="btnMore">
                                                <a href="#">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="content">
                                        <div class="upperContent">
                                            <img src="/homepage/event4.png" />
                                            <div class="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
                                        </div>
                                        <div class="belowContent">
                                            <p class="eventName">潛水</p>
                                            <p class="eventDes">還可以餵食熱帶魚魚</p>
                                            <div class="btnMore">
                                                <a href="#">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                        <div className="btnShowRight">
                            {btnShowRight && (
                                <button className="toggleBtn" data-target="rightBox" onClick={() => this.handleToggle('rightBox')}>
                                    {'>'}
                                </button>
                            )}
                        </div>
                        <div className="rightBack" style={{ visibility: rightBackVisible ? 'visible' : 'hidden' }}>
                            <a className="toggleBtn" data-target="overlay" onClick={() => this.handleToggle('overlay')}>
                                回主選單
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;


{/* <swiper-container class="mySwiper" effect="cards">
    <swiper-slide>
        <div class="content">
            <div class="upperContent">
                <img src="/homepage/event2.png" />
                <div class="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
            </div>
            <div class="belowContent">
                <p class="eventName">海底奇景</p>
                <p class="eventDes">藍藍的海，你期待看見什麼？</p>
                <div class="btnMore">
                    <a href="#">查看更多</a>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="content">
            <div class="upperContent">
                <img src="/homepage/bar.jpg" />
                <div class="location"><span><img src="/homepage/map.png" /></span>失落小島</div>
            </div>
            <div class="belowContent">
                <p class="eventName">調酒DIY</p>
                <p class="eventDes">一起發瘋喝醉吧</p>
                <div class="btnMore">
                    <a href="#">查看更多</a>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="content">
            <div class="upperContent">
                <img src="/homepage/fac.png" />
                <div class="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
            </div>
            <div class="belowContent">
                <p class="eventName">愛麗鯊鯊在哪裡！</p>
                <p class="eventDes">下海體驗被鯊魚包圍的感覺（？</p>
                <div class="btnMore">
                    <a href="#">查看更多</a>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="content">
            <div class="upperContent">
                <img src="/homepage/event3.png" />
                <div class="location"><span><img src="/homepage/map.png" /></span>？？</div>
            </div>
            <div class="belowContent">
                <p class="eventName">有夠高</p>
                <p class="eventDes">沒有人跳水在綁安全繩的</p>
                <div class="btnMore">
                    <a href="#">查看更多</a>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="content">
            <div class="upperContent">
                <img src="/homepage/event4.png" />
                <div class="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
            </div>
            <div class="belowContent">
                <p class="eventName">潛水</p>
                <p class="eventDes">還可以餵食熱帶魚魚</p>
                <div class="btnMore">
                    <a href="#">查看更多</a>
                </div>
            </div>
        </div>
    </swiper-slide>
</swiper-container> */}
