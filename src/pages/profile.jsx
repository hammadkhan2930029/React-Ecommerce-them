import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { Profile_breadCrumbs } from "../components/profile/profile_breadCrumbs/profileBreadCrumbs";
import { ProfileComponent } from "../components/profile/profileComponents/profileComponents";

export const Profile = ()=>{
    return(
        <div>
            <Header/>
            <Profile_breadCrumbs/>
            <ProfileComponent/>
            <Footer/>
        </div>
    )
}