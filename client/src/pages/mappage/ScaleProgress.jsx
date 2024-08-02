import React, { Component } from 'react'

function ScaleProgress({scaleNum,zoomIn,zoomOut}){
    return(
        <div id='scaleProgress'>
        <span onClick={zoomOut}>｜</span>
        <progress min='1' max='5' value={scaleNum}>
            </progress>
        <span onClick={zoomIn}>＋</span>
        </div>
        

    )
}

export default ScaleProgress;