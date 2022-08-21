import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";


export function NextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style, float:"right", paddingRight:"6%"}}
            onClick={onClick}
        >
            <button className="absolute lg:pr-8 top-2/4 z-10 text-white text-2xl md:text-5xl lg:text-5xl bg-black opacity-50 rounded-l-lg" type="button"> <HiChevronRight /> </button>
        </div>
    );
}

export function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style, zIndex:"1"}}
            onClick={onClick}
        >
            <button className="absolute top-2/4 z-10 text-white text-2xl md:text-5xl lg:text-5xl bg-black opacity-50 rounded-r-lg " type="button" > < HiChevronLeft/> </button>
        </div>
    );
}




