import React from 'react'

function BtnDown(){
    return(
        <a href='#divBookingWay' className='btnDown'>
            <svg width={'30px'} height={'30px'} xmlns="http://www.w3.org/2000/svg" className='btnDwnTriangle'>
                <defs>
                    <filter id='f1' width={"30px"} height={"30px"} >
                        <feOffset result='offOut' in="SourceGraphic" dx="1" dy="1" />
                        <feGaussianBlur result="blurOut" in="offOut" seddeviation="50px" />
                        <feBlend in='SourceGraphic' in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                <polygon points='0 0 , 30 0 , 15 30' className='svgPolygon' filter='url(#f1)' />
            </svg>
        </a>
    )
}

export default BtnDown;