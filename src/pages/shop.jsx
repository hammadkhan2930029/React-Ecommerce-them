import { Footer } from "../components/Footer/footer"
import { Header } from "../components/header/header"
import { Shop_breadCrumbs } from "../components/Shop/shopBreadCrumb/shopBreadcrumb"
import { ShopComponent } from "../components/Shop/shopComponent/shopComponent"
export const Shop = () => {
    return (
        <div>
            <Header/>
            <Shop_breadCrumbs/>
            <ShopComponent/>
            <Footer/>

        </div>
    )
}