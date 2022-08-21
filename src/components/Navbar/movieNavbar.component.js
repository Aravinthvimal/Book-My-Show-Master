import React from "react";
import { BsChevronRight, BsChevronCompactDown, BsChevronLeft } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.png";

const NavSm = () => {
    return (
        <>
        <div className="flex items-center justify-between">
            <div>
                <span className="text-md font-semibold font-light flex items-center"> 
                <BsChevronLeft className="relative mr-4" /> Chehre 
                </span> 
            </div>
            <div className="w-6 h-6">
                <AiOutlineShareAlt className="w-full h-full" />
            </div>
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

const Navbar = () => {
    return (
        <>
        <nav className="bg-gray-100 lg:bg-navcolor-700 px-4 py-2">
            <div className="overflow-x-hidden md:hidden "> {
                // Mobile Screen
                <NavSm />
            }</div>
            <div className="hidden lg:hidden md:block"> {
                // Tablet Screen
                <NavSm />
            }</div>
            <div className="hidden lg:flex"> {
                // Desktop Screen
                <NavLg />
            }</div>
        </nav>
        </>
    )
};

export default Navbar;

