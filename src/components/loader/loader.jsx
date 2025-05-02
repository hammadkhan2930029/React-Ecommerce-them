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
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>


    );
};