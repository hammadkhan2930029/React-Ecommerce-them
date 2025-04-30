import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { About_breadCrumbs } from "../components/AboutUs/bread_crumb/about_breadCrumbs";
import { AboutUs_banner } from "../components/AboutUs/AboutUs_banner/aboutUs_banner";
import { AvatarCard } from "../components/AboutUs/whatPeopleSay/avatarCard";
import { MiniCards } from "../components/home/service/miniCards";
import { MultiKart_member } from "../components/AboutUs/multikart_members/multikart_member";

export const AboutUs = ()=>{
    return(
        <>
        <Header/>
        <About_breadCrumbs/>
        <AboutUs_banner/>
        <AvatarCard/>
        <MultiKart_member/>
        <MiniCards/>
        <Footer/>
        </>
    )
}