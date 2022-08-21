import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import EntertainmentcardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PosterData from "../components/Config/PosterImages.config";
import Stream from "../components/Stream/Stream.component";
import StreamParent from "../components/StreamParent/StreamParent.component";

const HomePage = () => {

    const [PopularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    const [TrendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const requestTrendingMovies = async() => {
            const getTrendingMovies = await axios.get("/movie/top_rated");
            setTrendingMovies(getTrendingMovies.data.results);
        };
        requestTrendingMovies();
    }, []);

    const [UpcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const requestUpcomingMovies = async() => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        <>
        <div className="container mx-auto px-4 lg:pt-8">
            <div>
                <span className="flex items-center justify-between mr-4 ">
                    <h1 className="font-bold text-grey-800 text-lg md:text-xl lg:text-2xl pl-2 md:pl-4 "> The best of Entertainment </h1>
                    <a className="text-sm md:text-md lg:hidden text-viewcolor-300"> View All <BsChevronRight className="relative -top-0.5 inline" /> </a>
                </span>
                <EntertainmentcardSlider />
            </div>
        </div>

        <div className="container hidden lg:block mx-auto px-4">
            <div className="flex items-center w-full h-full lg:py-12">
                <Stream />
            </div>
        </div>

        <div  className="container mx-auto px-4 lg:hidden w-full h-full">
            <div>
                <div className="flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-480:w-600/premieres-v6-collection-202104050255.png" alt="stream" className="w-full h-full" />
                </div>
                <div className="container px-4 bg-navcolor-750 " >
                    <StreamParent />
                </div>
            </div>
        </div>

        <div className="hidden lg:block bg-navcolor-750">
            <div className="flex px-6 py-2 md:px-6 md:py-4 lg:px-12 lg:py-8">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" className="w-full h-full"/>
            </div>
            <div className="container mx-auto px-4">
                <div className="w-full h-full"> 
                    <PosterSlider images={PopularMovies} title="Premiers" subtitle="Brand new releases every Friday" isDark={true} isNew={false} />
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 py-4">
            <div className="w-full h-full"> 
                <PosterSlider images={TrendingMovies} title="Online Streaming Events" subtitle="" isDark={false} isNew={false} />
            </div>
        </div>

        <div className="container mx-auto px-4 py-4">
            <div className="w-full h-full"> 
                <PosterSlider images={UpcomingMovies} title="Outdoor Events"  subtitle="" isDark={false} isNew={true} />
            </div>
        </div>
    </>  

    );
};

export default HomePage;