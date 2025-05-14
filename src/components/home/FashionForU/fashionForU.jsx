import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppImages } from "../../../constants/AppImages";
import './fashionForU.css'
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";


const cardData = [
    {
        img: AppImages.img1,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.img2,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.img3,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.img4,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.img5,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },



];

export const FashionForU = () => {
    const navigate = useNavigate()
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: false });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <motion.div>
            <motion.div className="fashionHeadings"
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                <span className="h5">From The Blog</span>
                <span className="h1">Fashion For u</span>
                <span className="bottomLine"></span>
            </motion.div>
            <motion.div
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                <Slider {...settings}>

                    {cardData.map((item, index) => (
                        <motion.div key={index} className="carousel" onClick={()=> navigate('/blogs')}>

                            <motion.div className="carousel_main">
                                <motion.div className="div_img">
                                    <img src={item.img} className="carousel_card_img" />
                                </motion.div>
                                <motion.div className="carousel_text">
                                    <span className="date">{item.date}</span>
                                    <span className="description">{item.description}</span>

                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </Slider>
            </motion.div>
        </motion.div>

    );
};