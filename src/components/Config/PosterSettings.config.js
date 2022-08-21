import { NextArrow, PrevArrow } from "../Premier/Arrows.premier";

export const settings = {
    infinite: true,
    autoplay: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1080,
            settings : {
                infinite: true,
                autoplay: false,
                speed: 1500,
                slidesToShow: 5,
                slidesToScroll: 2,
                InitialSlide: 0,
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />,
            }
        },
        {
            breakpoint: 768,
            settings: {
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 2,
                swipeToSlide: true,
                arrows:false
            }
        },
        {
            breakpoint: 360, 
            settings: {
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: true,
                arrows:false
            }
        }

    ]
};
