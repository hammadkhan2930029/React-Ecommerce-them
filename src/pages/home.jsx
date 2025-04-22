import React from "react";
import { Header } from "../components/home/header/header";
import { Slider } from "../components/home/imageSlider/slider";
import { MiniCards } from "../components/home/service/miniCards";
import { LatestDrops } from "../components/home/latestDrops/latestDrops";
import { OurProductCards } from "../components/home/ourProductCards/ourProduct";
import { Banner,FullBanner } from "../components/home/banner/banner";

export const Home = ()=>{
    return(
       
        <div style={{overflow:'hidden'}}>
            <Header/>
            <Slider/>
            <MiniCards/>
            <Banner/>
            <LatestDrops/>
            <FullBanner/>
            <OurProductCards/>
        </div>
    )
}