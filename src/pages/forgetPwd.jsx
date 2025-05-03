import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { Forget_breadCrumbs } from "../components/forgetPwd/forget_breadCrumbs/breadcrumbs";
import { Forgot_form } from "../components/forgetPwd/forgotPwdForm/forgotForm";



export const Forget_pwd = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Forget_breadCrumbs/>
            <Forgot_form/>
            
            <Footer />
        </div>
    )
}