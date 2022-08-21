import React from "react";

//Components 
import PlaysNavbar from "../components/Navbar/playsNavbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const PlaysLayout = (props) => {
    return (
        <>
            <PlaysNavbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default PlaysLayout;