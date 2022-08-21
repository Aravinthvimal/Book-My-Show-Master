import React from "react";
import Cast from "../components/Cast/Cast.component";
import Crew from "../components/Crew/Crew.component";
import MovieHero from "../components/MovieHero/MovieHero.component";
import offerIcon from "./offericon.png";

// RazorPay
export const launchRazorPay = () => {
    let options = {
        key: "rzp_test_WpZXEP59ItolZQ",
        amount: 500 * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Successful")
        },
        theme: {color: "#c4242d"}
    };
    
    let rzp = new window.Razorpay(options);
    rzp.open();

};


const MoviePage = () => {
    return (
        <>
        <MovieHero />
        <div className="lg:my-12 my-8 container px-4 lg:w-3/4 lg:ml-20">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-xl md:text-2xl"> About the movie </h2>
                <p className="text-xs font-semibold text-gray-700 md:text-lg lg:font-normal"> Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
            </div>
            <div className="my-8">
                <hr />
            </div>
            <div>
                <h1 className="text-gray-800 font-bold text-xl md:text-2xl pb-4"> Applicable Offers </h1>
                <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 lg:pr-3 pr-1 w-full lg:w-96">
                    <img className="h-5 lg:h-6" src={offerIcon}/>
                    <div className="flex flex-col items-start">
                        <h3 className="relative -top-1 text-gray-900 md:text-lg text-md font-semibold"> Filmy Pass </h3>
                        <p className="text-gray-600 -top-1 md:text-base text-sm"> Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99 </p>
                    </div>
                </div>
            </div>
            <div className="my-8">
                <hr />
            </div>
        </div>
        <Cast />
        <div className="my-12 container px-4 lg:w-3/4 lg:ml-20">
            <div className="my-8 ">
                <hr />
            </div>
        </div>
        <Crew />
        <div className="my-12 container px-4 lg:w-3/4 lg:ml-20">
            <div className="my-8 ">
                <hr />
            </div>
        </div>
        </>
    )
};

export default MoviePage;
