import React from "react";
import Slider from "react-slick";

// Components
import Stream from "../Stream/Stream.component";
import { NextArrow, PrevArrow } from "./Arrows.stream";

const StreamParent = () => {

    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const StreamParentData = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312969-wqtlxthueu-portrait.jpg",
            title: "Jiu Jitsu",
            genre: "1h 42m . Sci-fi . 18+",
            language: "English",
            about: "Every six years, Jiu-Jitsu fighters battle a vicious race of alien invaders. But when..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00303781-dnuuuzbrjr-portrait.jpg",
            title: "Breaking Surface",
            genre: "1h 22m . Action, Drama, Thriller . 13+",
            language: "Swedish",
            about: "During a winter dive on a remote part of the coast in Northern Norway, a rockfall..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312486-jvxbealjva-portrait.jpg",
            title: "Death of Me",
            genre: "1h 34m . Horror, Mystery, Thriller . 16+",
            language: "English",
            about: "A hungover couple makes a horrific discovery about the events of the previous night..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-zxawmtzeej-portrait.jpg",
            title: "Undercover Season 1",
            genre: "Crime, Drama, Thriller . 18+ ",
            language: "English, Hindi, Tamil, Telugu",
            about: "Martin Encounters a lot of challenges in order to completely become part of the criminal world..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313200-eszsydtsvh-portrait.jpg",
            title: "The Interview: Night of 26/11",
            genre: "1h 56m . Psychological, Thriller . 18+",
            language: "Hindi",
            about: "A veteran war correspondent finds himself drawn into an actress's intriguing world..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00070265-zshyhbkxfa-portrait.jpg",
            title: "Extremely Wicked...",
            genre: "1h 50m . Biography, Crime, Drama . 18+",
            language: "English",
            about: "A chronicle of the crimes of Ted Bundy from the perspective of Liz, his longtime girlfriend..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00300395-kycyeehnek-portrait.jpg",
            title: "How to Make Out",
            genre: "1h 38m . Comedy . U",
            language: "French",
            about: "Arthur, a young boy, falls for Ouassima but hesitates to even talk to her. Since he has..."
        },

        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313518-tdlwtehqnd-portrait.jpg",
            title: "The Assistant",
            genre: "1h 27m . Drama, Thriller, 16+",
            language: "English",
            about: "Jane, a recent college graduate and aspiring film producer, lands her dream job as a..."
        }
    ]

    return (
        <>
        <div className="">
            <Slider {...settings}>
                {
                    StreamParentData.map((data) => (
                        <Stream {...data} />
                    ))
                }
            </Slider>
        </div>

        </>
    );
    
};

export default StreamParent;

