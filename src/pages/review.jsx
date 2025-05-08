import React from "react";
import { Header } from "../components/header/header";
import {Footer} from '../components/Footer/footer'
import { Reviews_breadCrumbs } from "../components/Review/review_breadCrumbs/review_breadCrumbs";
import { Reviews } from "../components/Review/user_reviews/reviews";

export const Review = ()=>{
    return(
        <div>
            <Header/>
            <Reviews_breadCrumbs/>
            <Reviews/>
            <Footer/>
        </div>
    )
}