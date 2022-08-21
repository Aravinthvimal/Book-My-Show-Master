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
            <button className="absolute top-1/4 z-10 rounded-full text-white text-2xl md:text-3xl lg:text-4xl bg-gray-500" type="button"> <HiChevronRight /> </button>
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
            <button className="absolute top-1/4 z-10 rounded-full text-white text-2xl md:text-3xl lg:text-4xl bg-gray-500" type="button" > < HiChevronLeft/> </button>
        </div>
    );
}




