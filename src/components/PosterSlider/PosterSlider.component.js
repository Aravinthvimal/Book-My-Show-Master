import React from "react";
import Slider from "react-slick";
import { BsChevronRight } from "react-icons/bs";

//Components
import Poster from "../Poster/Poster.component";
import {settings} from "../Config/PosterSettings.config";


const PosterStyle = (props) => {
    return (
        <>
        <div className="">
            <span className="flex text-left justify-between ml-2 mr-2 pb-4">
                <div>
                    <h1 className = {`font-semibold text-lg md:text-xl lg:text-2xl ${props.isDark ? "text-white" : "text-black" } `} > {props.title} 
                        <p className={` ml-4 px-2 pb-1 bg-viewcolor-400 text-lg md:text-lg lg:text-xl flex-1 inline text-white ${props.isNew ? "block" : "hidden"}`}> New </p>  
                    </h1>
                    <p className = {` text-lg md:text-xl lg:text-2xl ${props.isDark ? "text-white" : "text-gray-800" } `}> {props.subtitle} </p>
                </div>
                <div > 
                    <span className={`font-semibold text-sm pt-7 md:text-md lg:hidden ${props.isDark ? "text-white" : "text-viewcolor-300"} `}> 
                        View All <BsChevronRight className="relative -top-0.5 inline" /> 
                    </span> 
                </div>
            </span>
            <Slider {...settings}>
                {
                    props.images.map((data) => (
                        <Poster {...data} isDark = {props.isDark} />
                    ))
                }
            </Slider>  
        </div>
        </>
    )
};

export default PosterStyle;




