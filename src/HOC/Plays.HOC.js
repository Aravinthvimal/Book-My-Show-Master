import React from "react";
import { Route } from "react-router-dom";

//Layouts 
import PlaysLayout from "../layouts/Plays.layout";

const PlaysHOC = ({component: Component, ...rest}) => {
    //Component
    //Props -> Path, exact

    return (
        <>
        <Route {...rest} component = {(props) => (
            <PlaysLayout>
                <Component {...props} />
            </PlaysLayout>
        )}
        />
        </>
    );
};

export default PlaysHOC;



