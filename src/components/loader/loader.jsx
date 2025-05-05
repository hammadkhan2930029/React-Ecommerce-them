import React from "react";
import './loader.css'
import { ThreeCircles } from 'react-loader-spinner'
export const Loader = () => {
    return (
        <div className="loader">

            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#c10037"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>


    );
};