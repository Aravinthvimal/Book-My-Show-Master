import React from "react";

//Props => src, title, subtitle, isDark(bool)
const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col pt-2 gap-2 px-1 md:px-2 lg:px-2">
            <div className="w-full h-22 md:h-48 lg:h-80"> 
                <img className="h-full w-full rounded-lg" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
                alt={props.original_title} />
            </div>
            <div className="px-2">
                <h3 className = { `font-semibold text-xs md:text-lg lg:text-xl ${props.isDark ? "text-white" : "text-gray-700"}` }> 
                    {props.title}
                </h3>
                <p className = { `text-xs md:text-sm lg:text-md pb-12 truncate ${props.isDark ? "text-white" : "text-gray-800"}` }>
                    {props.overview}
                </p>
            </div>
        </div>
        </>
    );
};

export default Poster;