import React from "react";
import Slider from "react-slick";

import CastPoster from "../MovieCast/movieCast.component";
import { NextArrow, PrevArrow } from "../Cast/Arrows.cast";

const Crew = (props) => {
 
    const settingsLg = {
        infinite: true,
        autoplay: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
    
    const CrewImages = [
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg",
            name:"Destin Cretton",
            role:"Director"
        },

        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            name:"Kevin Fiege",
            role:"Producer"
        },

        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg",
            name:"Jonathan Schwartz",
            role:"Producer"
        },

        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg",
            name:"Bill Pope",
            role:"Cinematographer"
        }
    ];
    
    return (
        <>
        <div className="hidden md:block container px-4 my-12 lg:ml-20 md:ml-0 md:w-11/12 lg:w-1/2">
            <h2 className="text-gray-800 font-bold text-2xl mb-8"> Crew </h2>
            <Slider {...settingsLg}>
                {
                    CrewImages.map((data) => (
                        <CastPoster {...data} />
                    ))
                }
            </Slider>  
        </div>

        <div className="md:hidden container px-4 my:4 lg:my-12 lg:ml-20 w-full lg:w-1/2">
            <h2 className="text-gray-800 font-bold text-xl lg:text-2xl mb-8"> Crew </h2>
            <Slider {...settings}>
                {
                    CrewImages.map((data) => (
                        <CastPoster {...data} />
                    ))
                }
            </Slider>  
        </div>

        </>
    )
};

export default Crew;