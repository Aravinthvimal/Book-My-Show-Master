import React from "react";

const CastPoster = (props) => {
    return (
        <>
        <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 md:w-32 md:h-32">
                <img className="rounded-full w-full h-full object-center object-cover" src={props.src} atl={props.name} />
            </div>
            <h3 className="sm:text-sm md:text-lg lg:text-lg font-semibold text-black w-28"> {props.name} </h3>
            <p className="sm:text-xs md:text-base lg:text-base text-gray-500"> {props.role} </p>
        </div>
        </>
    );
};

export default CastPoster;