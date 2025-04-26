import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/Footer/footer';
import { ActiveBreadcrumb } from '../components/productDetails/breadCrums/breadcrums';
import { ProductData } from '../components/productDetails/productData/productData';

export const ProductDetailPage = () => {
    return (
        <div>
            <Header />
            <ActiveBreadcrumb/>
            <ProductData/>
            <Footer />
        </div>
    )
}