import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Components
import { NextArrow, PrevArrow } from "./Arrows.herocarousal";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className=" w-full h-48 md:h-96 px-2 py-2 md:px-4 focus:outline-none">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="carousal" className="w-full h-full rounded-md focus:outline-none" />
                        </div>
                    ))
                }
            </HeroSlider>
        </div>

        <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-4 focus:outline-none">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="carousal" className="w-full h-full rounded-md focus:outline-none "/>
                        </div>
                    ))
                }
            </HeroSlider>
        </div>
        </>
    );
};

export default HeroCarousal;

