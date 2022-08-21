import React from "react";
import Slider from "react-slick";

import { NextArrow,PrevArrow } from "./Arrows.cast";
import CastPoster from "../MovieCast/movieCast.component";

const Cast = (props) => {
 
    const settingsLg = {
        infinite: true,
        autoplay: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        InitialSlide: 0,
    }

    const settings = {
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }


    
    const CastImages = [
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
            name:"Simu Liu",
            role:"as Shang-Chi"
        },

        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
            name:"Awkwafina",
            role:"as Katy"
        },

        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg",
            name:"Tony Leung Chiu-wai",
            role:"as Wenwu / The Mandarin"
        },

        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
            name:"Michelle Yeoh",
            role:"as Jiang Nan"
        }
    ];
    
    return (
        <>
        <div className="hidden md:block container px-4 my-12 lg:ml-20 md:ml-0 md:w-11/12 lg:w-1/2">
            <h2 className="text-gray-800 font-bold text-2xl mb-8"> Cast </h2>
            <Slider {...settingsLg}>
                {
                    CastImages.map((data) => (
                        <CastPoster {...data} />
                    ))
                }
            </Slider>  
        </div>

        <div className="md:hidden container px-4 my-2 lg:my-12 lg:ml-20 w-full lg:w-1/2">
            <h2 className="text-gray-800 font-bold text-xl lg:text-2xl mb-4 lg:mb-8"> Cast </h2>
            <Slider {...settings}>
                {
                    CastImages.map((data) => (
                        <CastPoster {...data} />
                    ))
                }
            </Slider>  
        </div>
        </>
    )
};

export default Cast;