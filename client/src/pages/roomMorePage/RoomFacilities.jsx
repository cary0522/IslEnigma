// RoomFacilities.js
import React from 'react';
import { facilities } from './roomData';

const RoomFacilities = () => {
    return (
        <div id="roomFacilities">
            <h2>客房內設施</h2>
            <div className="facilitiesGrid">
                {facilities.map((facility, index) => (
                    <div key={index} className="facilityItem">
                        <div className="iconWrapper">
                            <i className={`fas fa-${facility.icon}`}></i>
                        </div>
                        <span>{facility.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomFacilities;