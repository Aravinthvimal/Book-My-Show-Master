import React from "react";

const Stream = (props) => {
    return (
        <>
        <div className="flex flex-col items-center lg:hidden gap-3 w-full h-full">
            <div className="flex justify-between content-evenly mx-0 pt-6">
                <div className="pr-4 w-1/2">
                    <img className=" w-full h-11/12 rounded-lg" src={props.src} alt={props.title} />
                </div>
                <div className="flex flex-col h-full mx-auto pr-4 text-white w-1/2 ">
                    <h3 className="text-lg md:text-3xl font-bold "> {props.title} </h3>
                    <p className="text-xs md:text-lg"> {props.genre} </p>
                    <p className="text-xs md:text-lg"> {props.language} </p>
                    <p className="text-xs md:text-lg pt-4"> {props.about} </p>
                </div>
            </div>
            <div className="mb-12 mt-4 text-center w-10/12 h-3/4 rounded-md text-white bg-red-500">
                <button className="text-lg font-semibold py-2"> Buy or Rent </button>
            </div>
        </div>
        </>
    )
};

export default Stream;