import React from "react";

// Components
import Grid from "../Grid/Grid.component";

const GlidSlider = (props) => {
    return (
        <>
        <div>
            {
                props.images.map((data) => (
                    <Grid {...data} isDark = {props.isDark} />
                ))
            }
        </div>
        </>
    )
};

export default GlidSlider;