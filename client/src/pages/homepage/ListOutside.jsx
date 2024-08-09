
import React, { useState } from 'react';


const ListOutside = ({ date, title, openModal}) => {
    return (
        <div className="listOutside">
            <div>
                <span>news</span>
                <p className="date">{date}</p>
            </div>
            <div>
                <h3>{title}</h3>
                <button className="btnTrigger" onClick={openModal}>＋</button>
            </div>
        </div>
    );
};

export default ListOutside;