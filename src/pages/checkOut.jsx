import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/Footer/footer";
import { CheckOut_Breadcrumb } from "../components/checkout/breadCrumb/checkOut_crumb";
import { CheckOutData } from "../components/checkout/checkOutData/checkOutData";

export const CheckOut = ()=>{
    return(
        <div>
            <Header/>
            <CheckOut_Breadcrumb/>
            <CheckOutData/>
            <Footer/>

        </div>
    )
}