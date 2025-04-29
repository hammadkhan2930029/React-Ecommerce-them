import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { About_breadCrumbs } from "../components/AboutUs/bread_crumb/about_breadCrumbs";
import { AboutUs_banner } from "../components/AboutUs/AboutUs_banner/aboutUs_banner";

export const AboutUs = ()=>{
    return(
        <>
        <Header/>
        <About_breadCrumbs/>
        <AboutUs_banner/>
        <Footer/>
        </>
    )
}