import React from "react";
import { launchRazorPay } from "../../pages/Movie.page";
import { FcLike } from "react-icons/fc";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
 
const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="Shang-Chi and the Legend of the Ten Rings" />
        </div>
         
        <div className="hidden md:block lg:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="Shang-Chi and the Legend of the Ten Rings" />
        </div>

        <div className="relative hidden lg:block" style={{height: "32rem"}} >

            <div className="absolute h-full w-full z-10 " style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />

            <div className="absolute z-30 w-60 h-5/6 top-10 left-20">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="hero-poster"
                className="h-full w-full rounded-xl" />
            </div>

            <div className="absolute z-30 top-10 left-1/4 w-70 text-white">
                <h3 className=" w-full text-4xl font-bold max-w-md pb-8 "> Shang-Chi and the Legend of the Ten Rings </h3>
                <div className="flex flex-row gap-2 pb-4">
                    <FcLike className="relative -top-1 w-8 h-8"/>
                    <p className=" text-xl font-semibold"> 91% </p>
                    <p className="relative top-1 font-semibold" > 35.8K ratings </p>
                    <BsChevronRight className="relative w-3 h-3 top-3" />
                </div>
                <div className="flex bg-ratecolor-750 p-2 pb-2 pl-8 rounded-xl">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl"> Add your ratings & reviews </h3>
                        <p className="font-semibold text-gray-400 text-lg"> Your ratings matter </p>
                    </div>
                    <div>
                        <button className="relative left-12 top-3 bg-gray-100 text-lg font-semibold text-gray-700 p-1 px-4 rounded-lg"> Rate now </button>
                    </div> 
                </div>
                <div className="relative pt-8">
                    <div className="flex flex-row gap-1 text-black font-semibold bg-white w-max px-2 cursor-pointer rounded-sm">
                        <p className="hover:underline"> 2D, </p>
                        <p className="hover:underline"> 3D, </p>
                        <p className="hover:underline"> IMAX 2D, </p>
                        <p className="hover:underline"> MX4D, </p>
                        <p className="hover:underline"> 4DX </p>
                    </div>
                </div>
                <div className="relative pt-2">
                    <div className="flex flex-row gap-1 text-black font-semibold bg-white w-max px-2 cursor-pointer rounded-sm ">
                        <p className="hover:underline"> English, </p>
                        <p className="hover:underline"> Kannada, </p>
                        <p className="hover:underline"> Tamil, </p>
                        <p className="hover:underline"> Hindi, </p>
                        <p className="hover:underline"> Telugu, </p>
                        <p className="hover:underline"> Malayalam </p>
                    </div>
                </div>
                <div className="relative pt-4 pb-4 font-semibold" style={{fontSize:"17px"}}>
                    <p> 2h 12m • Action, Adventure, Fantasy • UA • 3 Sep, 2021 </p>
                </div>
                <div className="mb-12 py-3 text-center w-6/12 h-3/4 rounded-md text-lg text-white bg-viewcolor-300">
                    <button onClick={launchRazorPay} className="font-semibold"> Book tickets </button>
                </div>
            </div>

            <div className="absolute z-30 top-10 left-3/4 w-70 text-white">
                <button className="text-lg pl-2 font-semibold relative left-56 bg-black opacity-50 py-2 px-4"> <AiOutlineShareAlt className="w-6 h-6 relative -top-0.5 inline" /> Share </button>
            </div>
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="Shang-Chi and the Legend of the Ten Rings" 
            className="w-full h-full" />
        </div>
        </>
    )
};

export default MovieHero;

