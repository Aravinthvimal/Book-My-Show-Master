import React from "react";

const Grid = (props) => {
    return (
        <>
            <div className="border-box w-full">
                <div className="float-left w-5/12 md:w-1/4 lg:w-1/5 mr-6 lg:mr-8 mb-4 flex flex-col">
                    <div>
                        <img className="w-full h-72 rounded-sm lg:rounded-lg" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
                        alt={props.original_name} />
                    </div>
                    <div className="mb-8 mt-4">
                        <h3 className={ `truncate font-semibold text-md md:text-xl ${props.isDark ? "text-white" : "text-gray-800 md:text-black"}` }> {props.original_name} </h3>
                        <p className="font-semibold text-sm md:text-base text-gray-600"> Ratings : {props.vote_average} </p>
                        <p className="text-gray-500 text-sm md:text-base uppercase"> {props.original_language} | {props.adult ? "18+" : "UA"} </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Grid;