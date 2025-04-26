import { Home } from "../pages/home";
import { ProductDetailPage } from "../pages/productDetail";

export const appRoutes = [
    { path: '/', element: <Home /> },
    { path: '/productDetails', element: <ProductDetailPage /> },

]