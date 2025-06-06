import React from "react";
import { Slider } from "../components/home/imageSlider/slider";
import { MiniCards } from "../components/home/service/miniCards";
import { LatestDrops } from "../components/home/latestDrops/latestDrops";
import { OurProductCards } from "../components/home/ourProductCards/ourProduct";
import { Banner,FullBanner } from "../components/home/banner/banner";
import { FashionForU } from "../components/home/FashionForU/fashionForU";
import { BrandsIcons } from "../components/home/brands/brandsIcon";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { NewsLetter } from "../components/home/NewsLetterModal/newsLetterModal";
import { CookieBar } from "../components/home/cookieBar/cookieBar";
export const Home = ()=>{
    return(
       
        <div style={{overflow:'hidden'}}>
            <NewsLetter/>
            <Header/>
            <Slider/>
            <MiniCards/>
            <Banner/>
            <LatestDrops/>
            <FullBanner/>
            <OurProductCards/>
            <FashionForU/>
            <BrandsIcons/>
            <Footer/>
            <CookieBar/>
        </div>
    )
}

