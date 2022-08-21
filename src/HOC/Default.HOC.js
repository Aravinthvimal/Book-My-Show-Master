import React from "react";
import { Route } from "react-router-dom";

//Layouts 
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Component, ...rest}) => {
    //Component
    //Props -> Path, exact

    return (
        <>
        <Route {...rest} component = {(props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )}
        />
        </>
    );
};

export default DefaultHOC;

