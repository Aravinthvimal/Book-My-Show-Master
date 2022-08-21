import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrows.entertainment";

const EntertainmentcardSlider = () => {
    const EntertainmentImages = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTE1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png"
    ];

    const settingsLg = {
        infinite: true,
        autoplay: false,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 5,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        InitialSlide: 0,
        swipeToSlide: true,
        touchMove:true,
        arrows: false
    }

    return (
        <>
        <div className="lg:hidden"> 
            <Slider {...settings}> 
                {
                    EntertainmentImages.map((image) => (
                        <div className="w-full h-25 px-1 py-4 md:px-2">
                            <img className="w-full h-full rounded-lg outline-none border-none" src={image} alt="EntertainmentImage" /> 
                        </div>
                    ))
                }
            </Slider>
        </div>

        <div className="hidden lg:block"> 
            <Slider {...settingsLg}> 
                {
                    EntertainmentImages.map((image) => (
                        <div className="w-full h-25 px-3 py-4 ">
                            <img className="w-full h-full rounded-lg outline-none border-none" src={image} alt="EntertainmentImage" /> 
                        </div>
                    ))
                }
            </Slider>
        </div>
        </>
    )
}

export default EntertainmentcardSlider;
