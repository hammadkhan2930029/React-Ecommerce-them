import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { Login_breadCrumbs } from "../components/login/login_breadCrumb/login_crumb";
import { LoginForm } from "../components/login/loginForm/loginForm";

export const Login=()=>{
    return(
        <div style={{overflow:'hidden'}}>
            <Header/>
            <Login_breadCrumbs/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}