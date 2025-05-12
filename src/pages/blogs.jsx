import React from "react";
import { Header } from "../components/header/header";
import { Footer } from '../components/Footer/footer'
import { Blogs_Breadcrumb } from "../components/Blogs/blogsBreadCrumbs/blogs_breadCrumbs";
import { Blogs_card } from "../components/Blogs/blogs_card/blogs_card";
export const Blogs = () => {
    return (
        <div>
            <Header />
            <Blogs_Breadcrumb/>
            <Blogs_card/>
            <Footer/>
        </div>
    )
}