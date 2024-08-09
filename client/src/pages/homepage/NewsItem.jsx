import React, { useState } from 'react';

const NewsItem = ({ imageSrc, title, date, description, modalVisible, openModal, closeModal }) => {
    return (
            <div className="newsItem">
                <img src={imageSrc} width="280px" alt="Poster" />
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="btnClose" onClick={closeModal}>關閉</button>
            </div>
    );
};

export default NewsItem;
