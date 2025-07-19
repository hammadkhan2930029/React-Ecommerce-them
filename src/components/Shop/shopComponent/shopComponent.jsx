import React, { useState } from "react";
import './shopComponent.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import { AppImages } from "../../../constants/AppImages";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiSlider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import { ProductCards } from "../productCards/productCards";
import CategoryDrawer from "../categoryDrawer/categoryDrawer";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useScreenWidth from "../../../hooks/screenWidth";
import { Category } from "@mui/icons-material";

const cardData = [
    { icon: AppImages.shopIcon1 },
    { icon: AppImages.shopIcon2 },
    { icon: AppImages.shopIcon3 },
    { icon: AppImages.shopIcon4 },
    { icon: AppImages.shopIcon5 },
    { icon: AppImages.shopIcon6 },
    { icon: AppImages.shopIcon7 },
    { icon: AppImages.shopIcon8 },
    { icon: AppImages.shopIcon9 },
    { icon: AppImages.shopIcon11 },
    { icon: AppImages.shopIcon12 },


];
function valuetext(value) {
    return `$${value}`;
}


export const ShopComponent = () => {
    const screenWidth = useScreenWidth()
    const [openDrawer, setOpendrawer] = useState(false)

    const [value1, setValue1] = React.useState(2);
    
    const [ expandedAccordians,setExpandedAccordians]=useState({
        category:true,
        brand:true,
        rating:true,
        colors:true,
        price:true
    })
    const toggleAccordian = (key)=>{
        setExpandedAccordians(prev => ({
            ...prev,
            [key]:!prev[key]
        }))
    }

    const [value, setValue] = React.useState([0, 1500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // ----------------------------------------

    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: false });
    // ---------------------------------
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1440, // Large desktop
            settings: {
                slidesToShow: 7,
            },
        },
        {
            breakpoint: 1280, // Standard desktop
            settings: {
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 1024, // Small desktop / large tablet
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 900, // Tablet landscape
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768, // Tablet portrait
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 600, // Large mobile
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 430, // Small mobile
            settings: {
                slidesToShow: 3,
            },
        },
    ],
};

    return (
        <div className="main_shop">
            <div className="icons_slider">
                <motion.div
                    ref={refOne}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .8 }}>

                    <motion.div>
                        <Slider {...settings}>
                            {cardData.map((item, index) => (
                                <div key={index} className="shop_brands_icon_main">
                                    <div className="shop_icon_div">
                                        <img src={item.icon} className="shop_brand_icon" />
                                        <span>Category</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </motion.div>

                </motion.div>
            </div>
            {screenWidth < 991 && (
                <div className="filter_div">
                    <button className="filter" onClick={() => setOpendrawer(true)}><FilterAltIcon /> Filter</button>

                </div>
            )}
            <div className="product_aera">
                {screenWidth < 991 ? null : (
                    <div className="side_bar_category">
                        <Accordion expanded={expandedAccordians.category} onChange={() => toggleAccordian('category')} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <span className="category_name">Category</span>
                            </AccordionSummary>
                            <div className="checkBox_div">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </div>

                        </Accordion>

                        {/* ------------------------- */}
                        <Accordion expanded={expandedAccordians.brand} onChange={() => toggleAccordian('brand')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <span className="category_name">Brand</span>
                            </AccordionSummary>
                            <div className="checkBox_div">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </div>

                        </Accordion>
                        {/* ----------------------------- */}
                        <Accordion expanded={expandedAccordians.colors} onChange={() => toggleAccordian('colors')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <span className="category_name">Colors</span>
                            </AccordionSummary>
                            <div className="checkBox_div">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </div>

                        </Accordion>
                        {/* ------------------------------------- */}
                        <Accordion expanded={expandedAccordians.rating} onChange={() => toggleAccordian('rating')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <span className="category_name">Rating</span>
                            </AccordionSummary>
                            <div className="priceRange_div">

                                <Rating
                                    name="simple-controlled"
                                    value={value1}
                                    onChange={(event, newValue) => {
                                        setValue1(newValue);
                                    }}
                                />
                            </div>

                        </Accordion>
                        {/* ----------------------------------------------- */}
                        <Accordion expanded={expandedAccordians.price} onChange={() => toggleAccordian('price')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <span className="category_name">Price</span>
                            </AccordionSummary>
                            <div className="priceRange_div">
                                <MuiSlider
                                    getAriaLabel={() => 'Price range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={1500}
                                    getAriaValueText={valuetext}
                                    color='#c10037'

                                />
                            </div>

                        </Accordion>


                    </div>
                )}
                <div className="product">
                    <ProductCards />
                </div>

            </div>
            <CategoryDrawer open={openDrawer} onClose={() => setOpendrawer(false)} />
        </div>
    )
}