import React from 'react';
// components
import Banner from './Banner';
import InfoInfo from './InfoInfo';

//css
// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';
// 引入 Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const InfoInfoPage = () => {
    return (
        <div className='infoInfoPage'>

            <Banner />
            <InfoInfo />

        </div>
    );
};

export default InfoInfoPage;

