// RoomList.js
import React from 'react';
import RoomItem from './RoomItem';
import { rooms } from './roomData';

const RoomList = () => {
    return (
        <div id="roomMore">
            {rooms.map((room, index) => (
                <RoomItem key={index} room={room} index={index} />
            ))}
        </div>
    );
};

export default RoomList;
