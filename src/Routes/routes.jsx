import { Home } from "../pages/home";
import { ProductDetailPage } from "../pages/productDetail";
import { ProductData } from "../components/productDetails/productData/productData";
import { Cart } from "../pages/cart";
import { CartData } from "../components/cart/cartData/cartData";
import { CheckOut } from "../pages/checkOut";
import { AboutUs } from "../pages/aboutUs";
import { ContactUs } from "../pages/contactUs";
import { Login } from "../pages/login";

export const appRoutes = [
    { path: '/', element: <Home /> },
    { path: '/productDetails', element: <ProductDetailPage /> },
    { path: '/productData', element: <ProductData/> },
    { path: '/cart', element: <Cart/> },
    { path: '/cartData', element: <CartData/> },
    { path: '/checkOut', element: <CheckOut/> },
    { path: '/aboutUs', element: <AboutUs/> },
    { path: '/contactus', element: <ContactUs/> },
    { path: '/login', element: <Login/> },








]