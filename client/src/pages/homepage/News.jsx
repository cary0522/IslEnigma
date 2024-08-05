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
            modalVisible: false,
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
            });
        } else if (target === 'rightBox') {
            this.setState({
                newsBoxStyle: { transform: 'translateX(-50%)' },
                overlayStyle: !this.state.isMb ? { transform: 'translateX(106.5%) translateY(-50%) scale(0.7)', opacity: '0.6' } : {},
                rightBackVisible: true,
                leftBackVisible: false,
                rightListBoxVisible: true,
            });
        } else if (target === 'overlay') {
            this.setState({
                newsBoxStyle: { transform: 'translateX(-25%)' },
                overlayStyle: { opacity: '1' },
                leftBackVisible: false,
                rightBackVisible: false,
                leftListBoxVisible: false,
                rightListBoxVisible: false,
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
        } = this.state;

        return (
            <div className="wrap">
                <div className="newsBox" style={newsBoxStyle}>
                    <div className={`modal-overlay ${modalVisible ? 'overlay-visible' : ''}`} onClick={this.closeModal}></div>
                    <div className="overlay" style={overlayStyle}>
                        <span className="deco">islEnigma</span>
                        <img src="/homepage/newsLogo.png" alt="Logo" />
                    </div>
                    <div className="leftBox">
                        <span className="title">NEWS</span>
                        <div className="newsList">
                            <div className={`listBox ${modalVisible ? 'modal-visible' : ''}`}>
                                <div className="newsItem">
                                    <img src="/homepage/poster.jpg" width="280px" alt="Poster" />
                                    <h2>【7/15 - 7/21 設施維修公告】</h2>
                                    <p>
                                        本週將進行維修的設施包括飛行塔和旋轉木馬
                                        <br />
                                        維修期間這些設施將暫停開放，我們將盡快完成維修以恢復正常運營
                                        <br />
                                        感謝您的理解與支持！
                                    </p>
                                    <button className="btnClose" onClick={this.closeModal}>關閉</button>
                                </div>
                            </div>
                            <div className="listOutside">
                                <div>
                                    <span>news</span>
                                    <p className="date">2023.07.11</p>
                                </div>
                                <div>
                                    <h3>7/15 - 7/21 設施維修公告</h3>
                                    <button className="btnTrigger" onClick={this.openModal}>＋</button>
                                </div>
                            </div>
                        </div>
                        <div className="logoImgBox">
                            <img src="/homepage/newsLogo.png" alt="Logo" />
                        </div>
                        <div className="btnShowLeft">
                            <button className="toggleBtn" data-target="leftBox" onClick={() => this.handleToggle('leftBox')}>
                                {"<"}
                            </button>
                        </div>
                        <div className="leftBack" style={{ visibility: leftBackVisible ? 'visible' : 'hidden' }}>
                            <a href="#" className="toggleBtn" data-target="overlay" onClick={() => this.handleToggle('overlay')}>
                                回主選單
                            </a>
                        </div>
                    </div>
                    <div className="rightBox">
                        <span className="title">EVENTS</span>
                        <div className="logoImgBox">
                            <img src="/homepage/newsLogo.png" alt="Logo" />
                        </div>
                        <div className="eventList" style={{ visibility: rightListBoxVisible ? 'visible' : 'hidden' }}>
                            <swiper-container className="mySwiper" effect="cards">
                                <swiper-slide>
                                    <div className="content">
                                        <div className="upperContent">
                                            <img src="/homepage/event2.png" alt="Event" />
                                            <div className="location">
                                                <span>
                                                    <img src="/homepage/map.png" alt="Map" />
                                                </span>
                                                嗨游洋外
                                            </div>
                                        </div>
                                        <div className="belowContent">
                                            <p className="eventName">海底奇景</p>
                                            <p className="eventDes">藍藍的海，你期待看見什麼？</p>
                                            <div className="btnMore">
                                                <a href="#">查看更多</a>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                        <div className="btnShowRight">
                            <button className="toggleBtn" data-target="rightBox" onClick={() => this.handleToggle('rightBox')}>
                                {'>'}
                            </button>
                        </div>
                        <div className="rightBack" style={{ visibility: rightBackVisible ? 'visible' : 'hidden' }}>
                            <a href="#" className="toggleBtn" data-target="overlay" onClick={() => this.handleToggle('overlay')}>
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
