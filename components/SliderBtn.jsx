"use client"


import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
import { useSwiper } from "swiper/react";

const SliderBtn = ({containerStyles, BtnStyles}) => {

    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={BtnStyles} onClick={()=> swiper.slidePrev()}>
                <PiCaretLeftBold />
            </button>
            <button className={BtnStyles} onClick={()=> swiper.slideNext()}>
                <PiCaretRightBold />
            </button>
        </div>
    );
};

export default SliderBtn;