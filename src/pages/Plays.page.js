import axios from "axios";
import React, { useState, useEffect } from "react";
import Poster from "../components/Poster/Poster.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";
import GridSlider from "../components/GridSlider/GlidSlider.component";

const PlaysPage = () => {

    const [TrendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const requestTrendingMovies = async() => {
            const getTrendingMovies = await axios.get("/tv/popular");
            setTrendingMovies(getTrendingMovies.data.results);
        };
        requestTrendingMovies();
    }, []);

  return (
    <>
    <div className="bg-gray-100 lg:py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-row-reverse w-full">
                <div className="ml-20 md:ml-28 lg:ml-0 mt-4 lg:mt-0 w-full lg:w-11/12">
                    <h2 className="text-lg md:text-2xl font-bold">Plays in Madurai</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full my-3 lg:w-full">
                            <GridSlider images={TrendingMovies} subtitle="" isDark={false} isNew={false} />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block w-96">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <div>
                        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                        <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
                        <PlaysFilter title="Categories" tags={["Theatre"]}/>
                        <PlaysFilter title="Genres" tags={["Drama", "Adaptation", "Historical", "Online Streaming Plays"]}/>
                        <PlaysFilter title="More Filters" tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]}/>
                        <PlaysFilter title="Price" tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]}/>
                    </div>
                </div>
            </div>
            
        <div></div>

        </div>
    </div>
    </>
    )
};

export default PlaysPage;