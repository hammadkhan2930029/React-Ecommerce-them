import { Home } from "../pages/home";
import { ProductDetailPage } from "../pages/productDetail";
import { ProductData } from "../components/productDetails/productData/productData";
import { Cart } from "../pages/cart";
import { CartData } from "../components/cart/cartData/cartData";
import { CheckOut } from "../pages/checkOut";
import { AboutUs } from "../pages/aboutUs";
import { ContactUs } from "../pages/contactUs";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Forget_pwd } from "../pages/forgetPwd";
import { LoginForm } from "../components/login/loginForm/loginForm";
import { Review } from "../pages/review";
import { Profile } from "../pages/profile";
import { Blogs } from "../pages/blogs";
import { Blogs_card } from "../components/Blogs/blogs_card/blogs_card";
import { Blog_details_page } from "../components/Blogs/blogsDetails/detailPage/detailPage";
import { FashionForU } from "../components/home/FashionForU/fashionForU";
import { Shop } from "../pages/shop";
import { ShopComponent } from "../components/Shop/shopComponent/shopComponent";

export const appRoutes = [
    { path: '/', element: <Home /> },
    { path: '/productDetails', element: <ProductDetailPage /> },
    { path: '/productData', element: <ProductData/> },
    { path: '/cart', element: <Cart/> },
    { path: '/fashionForU', element: <FashionForU/> },
    { path: '/shop', element: <Shop/> },

    { path: '/cartData', element: <CartData/> },
    { path: '/checkOut', element: <CheckOut/> },
    { path: '/aboutUs', element: <AboutUs/> },
    { path: '/contactus', element: <ContactUs/> },
    { path: '/login', element: <Login/> },
    { path: '/loginForm', element: <LoginForm/> },
    { path: '/register', element: <Register/> },
    { path: '/forgot_pwd', element: <Forget_pwd/> },
    { path: '/review', element: <Review/> },
    { path: '/profile', element: <Profile/> },
    { path: '/blogs', element: <Blogs/> },
    { path: '/blogs_card', element: <Blogs_card/> },
    { path: '/blogs_details_page', element: <Blog_details_page/> },
    { path: '/shopComponent', element: <ShopComponent/> },










]