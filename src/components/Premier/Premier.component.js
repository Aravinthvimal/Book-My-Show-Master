import React from "react";
import Slider from "react-slick";

//Component
import Poster from "../Poster/Poster.component";

//Config
import { settings, settingsLg } from "../Config/PosterSettings.config";
import PosterData from "../Config/PosterImages.config";

const Premier = () => {

    return (
        <>
        <div className="hidden lg:block">
            <Slider {...settingsLg}>
                {
                    PosterData.map((data) => (
                        <Poster {...data} />
                    ))
                }
            </Slider>  
        </div>

        <div className="lg:hidden">
            <Slider {...settings}>
                {
                    PosterData.map((data) => (
                        <Poster {...data} isDark />
                    ))
                }
            </Slider>  
        </div>

        </>
    );
};

export default Premier;
