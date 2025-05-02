import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { Register_breadCrumbs } from "../components/RegisterationFrom/registerBreadCrumbs/register_crumb";
import { RegisterForm } from "../components/RegisterationFrom/regiterForm/registerForm";


export const Register = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Register_breadCrumbs/>
            <RegisterForm/>
            <Footer />
        </div>
    )
}