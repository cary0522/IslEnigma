import React from 'react';

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
            btnShowLeft: true,
            btnShowRight: true,
            contentShow1: false,
            modalVisible2: false,
            contentShow2: false,
            modalVisible3: false,
            contentShow3: false,
            modalVisible4: false,
            contentShow4: false,
            contentShow:false,
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleTriggerClick1 = this.handleTriggerClick1.bind(this);
        this.handleCloseClick1 = this.handleCloseClick1.bind(this);
        this.handleTriggerClick2 = this.handleTriggerClick2.bind(this);
        this.handleCloseClick2 = this.handleCloseClick2.bind(this);
        this.handleTriggerClick3 = this.handleTriggerClick3.bind(this);
        this.handleCloseClick3 = this.handleCloseClick3.bind(this);
        this.handleTriggerClick4 = this.handleTriggerClick4.bind(this);
        this.handleCloseClick4 = this.handleCloseClick4.bind(this);
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
    };

    handleTriggerClick1() {
        // console.log(this.state.contentShow)
        this.setState({
            contentShow1: true,
            modalVisible1: true,
        })
    };
    handleTriggerClick2() {
        // console.log(this.state.contentShow)
        this.setState({
            modalVisible2: true,
            contentShow2: true,
        })
    };
    handleTriggerClick3() {
        this.setState({
            modalVisible3: true,
            contentShow3: true,
        })
    };
    handleTriggerClick4() {
        this.setState({
            modalVisible4: true,
            contentShow4: true,
        })
    };
    handleCloseClick1() {
        this.setState({
            contentShow1: false,
            modalVisible1: false,
        })
    }
    handleCloseClick2() {
        this.setState({
            modalVisible2: false,
            contentShow2: false,
        })
    }
    handleCloseClick3() {
        this.setState({
            modalVisible3: false,
            contentShow3: false,
        })
    }
    handleCloseClick4() {
        this.setState({
            modalVisible4: false,
            contentShow4: false,
        })
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
            btnShowLeft,
            btnShowRight,
            modalVisible1,
            contentShow1,
            modalVisible2,
            contentShow2,
            modalVisible3,
            contentShow3,
            modalVisible4,
            contentShow4,

        } = this.state;

        return (
            <div className="wrap">
                <div className="newsBox" style={newsBoxStyle}>
                    <div className='modal-overlay'></div>
                    <div className="overlay" style={overlayStyle}>
                        <span className="deco">islEnigma</span>
                        <img src="/homepage/newsLogo.png" />
                    </div>
                    <div className="leftBox">
                        <span className="title">NEWS</span>
                        <div className="newsList" style={{ visibility: leftListBoxVisible ? 'visible' : 'hidden' }}>
                            <div className={`listBox ${modalVisible1 ? 'modal-visible' : ''}`} style={{ visibility: contentShow1 ? 'visible' : 'hidden' }}>
                                <div className="newsItem">
                                    <img src="/homepage/news1.png"
                                        width="280px" />
                                    <h2>【8/10 - 8/12 夏日狂歡節】</h2>
                                    <p>來參加我們的夏日狂歡節<br />
                                    享受各種精彩的表演<br />
                                    </p>
                                    <button className="btnClose" onClick={this.handleCloseClick1}>X</button>
                                </div>
                            </div>
                            <div className="listOutside">
                                <div>
                                    <span>NEW</span>
                                    <p className="date">2024.08.08</p>
                                </div>
                                <div>
                                    <h3>8/10 - 8/12 夏日狂歡節</h3>
                                    <button className="btnTrigger" onClick={this.handleTriggerClick1}>＋</button>
                                </div>
                            </div>
                            <div className={`listBox ${modalVisible2? 'modal-visible' : ''}`} style={{ visibility: contentShow2 ? 'visible' : 'hidden' }}>
                                <div className="newsItem">
                                    <img src="/homepage/poster.jpg"
                                        width="280px" />
                                    <h2>【7/15 - 7/21 設施維修公告】</h2>
                                    <p>本週將進行飛行塔之維修<br />
                                        維修期間其設施將暫停開放<br />
                                        我們將盡快完成維修<br />
                                    </p>
                                    <button className="btnClose" onClick={this.handleCloseClick2}>X</button>
                                </div>
                            </div>
                            <div className="listOutside">
                                <div>
                                    <span>NEW</span>
                                    <p className="date">2024.07.11</p>
                                </div>
                                <div>
                                    <h3>7/15 - 7/21 設施維修公告</h3>
                                    <button className="btnTrigger" onClick={this.handleTriggerClick2}>＋</button>
                                </div>
                            </div>
                            <div className={`listBox ${modalVisible3 ? 'modal-visible' : ''}`} style={{ visibility: contentShow3 ? 'visible' : 'hidden' }}>
                                <div className="newsItem">
                                    <img src="/homepage/news3.png"
                                        width="280px" />
                                    <h2>【安全須知】</h2>
                                    <p>為了您的安全<br />請遵守遊樂園的安全規則<br />
                                        不在設施運行時站立或扭動身體
                                    </p>
                                    <button className="btnClose" onClick={this.handleCloseClick3}>X</button>
                                </div>
                            </div>
                            <div className="listOutside">
                                <div>
                                    <span>INFO</span>
                                    <p className="date">2024.07.01</p>
                                </div>
                                <div>
                                    <h3>設施運行時請勿站立扭動</h3>
                                    <button className="btnTrigger" onClick={this.handleTriggerClick3}>＋</button>
                                </div>
                            </div>
                            <div className={`listBox ${modalVisible4 ? 'modal-visible' : ''}`} style={{ visibility: contentShow4 ? 'visible' : 'hidden' }}>
                                <div className="newsItem">
                                    <img src="/homepage/news4.png"
                                        width="280px" />
                                    <h2>【謎樣樂園遊園指南】</h2>
                                    <p>查看我們的遊園指南<br />了解各個區域的設施位置<br />餐飲選擇和衛生間分佈<br />讓您的遊園之旅更加順利</p>
                                    <button className="btnClose" onClick={this.handleCloseClick4}>X</button>
                                </div>
                            </div>
                            <div className="listOutside">
                                <div>
                                    <span>TIPS</span>
                                    <p className="date">2024.06.30</p>
                                </div>
                                <div>
                                    <h3>來查看謎樣樂園指南！</h3>
                                    <button className="btnTrigger" onClick={this.handleTriggerClick4}>＋</button>
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
                            <swiper-container className="mySwiper" effect="cards">
                                <swiper-slide>
                                    <div className="content">
                                        <div className="upperContent">
                                            <img src="/homepage/event2.png" />
                                            <div className="location"><span><img src="/homepage/map.png" /></span>海底隧道</div>
                                        </div>
                                        <div className="belowContent">
                                            <p className="eventName">深海生物觀察(VIP)</p>
                                            <p className="eventDes">藍藍的海，你期待看見什麼？</p>
                                            <div className="btnMore">
                                                <a href="/infoEventPage">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div className="content">
                                        <div className="upperContent">
                                            <img src="/homepage/bar.jpg" />
                                            <div className="location"><span><img src="/homepage/map.png" /></span>迷幻酒吧</div>
                                        </div>
                                        <div className="belowContent">
                                            <p className="eventName">品嚐特色雞尾酒</p>
                                            <p className="eventDes">一起發瘋喝醉吧！</p>
                                            <div className="btnMore">
                                                <a href="/infoEventPage">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div className="content">
                                        <div className="upperContent">
                                            <img src="/homepage/event3.png" />
                                            <div className="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
                                        </div>
                                        <div className="belowContent">
                                            <p className="eventName">彩虹飛龍跳傘</p>
                                            <p className="eventDes">玩這個沒有人在綁安全繩的</p>
                                            <div className="btnMore">
                                                <a href="/infoEventPage">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div className="content">
                                        <div className="upperContent">
                                            <img src="/homepage/event4.png" />
                                            <div className="location"><span><img src="/homepage/map.png" /></span>嗨游洋外</div>
                                        </div>
                                        <div className="belowContent">
                                            <p className="eventName">潛水體驗</p>
                                            <p className="eventDes">一起下去看海洋生物吧！</p>
                                            <div className="btnMore">
                                                <a href="/infoEventPage">查看更多</a>
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