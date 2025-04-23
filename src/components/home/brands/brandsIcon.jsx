import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppImages } from "../../../constants/AppImages";
import './brandsIcon.css';
import { motion, useInView } from "framer-motion";
import { Spa } from "@mui/icons-material";

const cardData = [
    { icon: AppImages.icon1 },
    { icon: AppImages.icon2 },
    { icon: AppImages.icon3 },
    { icon: AppImages.icon4 },
    { icon: AppImages.icon5 },
    { icon: AppImages.icon6 },

];

export const BrandsIcons = () => {


    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: false });
    // ---------------------------------
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <motion.div
            ref={refOne}
            initial={{ opacity: 0, y: 100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <motion.div className="brand_tag">
                <span className="heading_1">#Whowerewhat</span>
            </motion.div>
            <motion.div>
                <Slider {...settings}>
                    {cardData.map((item, index) => (
                        <div key={index} className="brands_icon_main">
                            <div className="icon_div">
                                <img src={item.icon} className="brand_icon" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </motion.div>

        </motion.div>


    );
};