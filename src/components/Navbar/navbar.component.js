import React from "react";
import { BsChevronRight, BsChevronCompactDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.png";

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-2xl font-bold"> It All Starts Here! </h3>
                <span className="text-sm font-light flex items-center"> 
                    Madurai <BsChevronRight />
                </span>
            </div>
            <div className="w-6 h-6">
                <AiOutlineSearch className="w-full h-full" />
            </div>
        </div>
        </>
    )
};
const NavMd = () => {
    return (
        <>
        <div className="w-screen rounded-sm flex items-center bg-white gap-3 m-2">
            <AiOutlineSearch className=" text-gray-400 ml-3 w-4 h-4" />
            <input type="search" className="text-sm w-full focus:outline-none h-9" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
        </div>
        </>
    )
};
const NavLg = () => {
    return (
        <>
        <div className="container flex items-center justify-between mx-auto px-4">
            <div className="flex items-center w-1/2">
                <div className="w-48 h-12">
                    <img src={logo} alt="logo" className="h-full w-full" /> 
                </div> 
                <div className="w-full bg-white flex items-center gap-3 px-3 py-2 mt-4 mr-2 mb-4 ml-2 rounded-md ">
                    <AiOutlineSearch className=" text-gray-400 ml-3 w-4 h-4" />
                    <input type="search" className="text-sm w-full focus:outline-none h-5" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                </div>  
            </div>
            <div className="flex items-center gap-5 ">
                <span className="text-sm text-gray-300 font-light flex items-center transition duration-300 hover:text-white cursor-pointer "> 
                    Madurai <BsChevronCompactDown />
                </span>
                <button className="border-transparent px-4 py-1 text-sm rounded-lg text-white bg-red-500"> Sign In </button>
                <GiHamburgerMenu className="text-white cursor-pointer" />
            </div>
        </div>
        </>
    )
};

const NavSecLg = () => {
    return (
        <>
        <div className="container flex items-center justify-between mx-auto px-4">
            <div className="flex items-center w-1/2 text-sm gap-5 pl-4 text-gray-300 ">
                <a className="transition duration-300 hover:text-white" href="#"> Movies </a>
                <a className="transition duration-300 hover:text-white" href="#"> Stream 
                    <p className="absolute text-tiny text-viewcolor-500 top-20 pt-1 left-40 pl-2"> NEW </p> 
                </a>
                <a className="transition duration-300 hover:text-white" href="#"> Events </a>
                <a className="transition duration-300 hover:text-white" href="#"> Plays </a>
                <a className="transition duration-300 hover:text-white" href="#"> Sports </a>
                <a className="transition duration-300 hover:text-white" href="#"> Activities </a>
                <a className="transition duration-300 hover:text-white" href="#"> Buzz </a>
            </div>
            <div className="flex items-center gap-5 text-sm text-gray-300">
                <a className="transition duration-300 hover:text-white" href="#"> ListYourShow 
                    <p className="absolute text-tiny text-viewcolor-500 top-20 pt-1 right-64 pr-2 "> NEW </p>
                </a>
                <a className="transition duration-300 hover:text-white" href="#"> Corporates </a>
                <a className="transition duration-300 hover:text-white" href="#"> Offers </a>
                <a className="transition duration-300 hover:text-white" href="#"> Gift Cards </a>
            </div>
        </div>
        </>
    )
};

const NavSecSm = () => {
    return (
        <>
        <div className="container flex items-center mx-auto px-2">
            <a href="#" className=""> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/movies-v3-collection-202101080832.png" /> </a>
            <a href="#" className=""> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/stream-v3-new-tag-collection-202102040316.png" /> </a>
            <a href="#" className=""> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/events-v3-collection-202101080832.png" /> </a>
            <a href="#" className=""> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/sports-v3-collection-202101080832.png" /> </a>
            <a href="#" className=""> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/plays-v3-collection-202101080832.png" /> </a>
            <a href="#" className=""> <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/activities-v3-collection-202101080832.png" /> </a>
        </div>
        </>
    )
}

const Navbar = () => {
    return (
        <>
        <nav className="bg-navcolor-700 px-4 py-2">
            <div className="overflow-x-hidden md:hidden"> {
                // Mobile Screen
                <NavSm />
            }</div>
            <div className="hidden lg:hidden md:flex"> {
                // Tablet Screen
                <NavMd />
            }</div>
            <div className="hidden lg:flex flex-col"> {
                // Desktop Screen
                <NavLg />
            }</div>
        </nav>
        <nav className="hidden lg:block bg-navcolor-800 py-2">
            <div className="hidden lg:flex flex-col"> {
                // Desktop Screen
                <NavSecLg />
            }</div>
        </nav>
        <nav className="lg:hidden bg-gray-200 py-2">
            <div className="lg:hidden flex flex-col"> {
                // Tablet and Mobile screens
                <NavSecSm />
            }</div>
        </nav>
        </>
    )
};

export default Navbar;

