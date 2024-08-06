import React, { useState } from 'react';

const EventCard = () => {
    const [events, setEvents] = useState([
        {
            imgSrc: '/homepage/event1.jpeg',
            location: '嗨游洋外',
            eventName: '海底奇景',
            eventDes: '藍藍的海，你期待看見什麼？',
        },
        {
            imgSrc:'/homepage/event3.png',
            location: '熱帶雨林',
            eventName: '神秘叢林',
            eventDes: '探險叢林，發現未知的秘密。',
        },
        {
            imgSrc: '/homepage/event4.png',
            location: '宇宙深處',
            eventName: '星際探索',
            eventDes: '探索無垠的宇宙，體驗奇幻之旅。',
        },
    ]);

    return (
        <div>
            {events.map((event, index) => (
                <swiper-slide>
                    <div className="content" key={index}>
                        <div className="upperContent">
                            <img src={event.imgSrc} />
                            <div className="location">
                                <span>
                                    <img src="/homepage/map.png"/>
                                </span>
                                {event.location}
                            </div>
                        </div>
                        <div className="belowContent">
                            <p className="eventName">{event.eventName}</p>
                            <p className="eventDes">{event.eventDes}</p>
                            <div className="btnMore">
                                <a href="#">查看更多</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            ))}
        </div>
    );
}

export default EventCard;
