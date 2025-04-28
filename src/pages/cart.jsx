import React from "react";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/header/header";
import { CartBreadcrumb } from "../components/cart/cartBreadCrumb/cartBreadCrumb";
import { CartData } from "../components/cart/cartData/cartData";

export const Cart = () => {
    return (
        <div>
            <Header />
            <CartBreadcrumb/>
            <CartData/>
            <Footer />

        </div>
    )

}