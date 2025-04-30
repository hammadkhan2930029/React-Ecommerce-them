import React from 'react'
import './multikart_member.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AppImages } from '../../../constants/AppImages';

const cardData = [
    {
        img: AppImages.owner1,
        description: 'Hileri Keol',
        date: 'CEO & Founder of company'

    },
    {
        img: AppImages.owner2,
        description: 'Hileri Keol',

        date: 'CEO & Founder of company'

    },
    {
        img: AppImages.owner3,
        description: 'Hileri Keol',

        date: 'CEO & Founder of company'

    },
    {
        img: AppImages.owner4,
        description: 'Hileri Keol',

        date: 'CEO & Founder of company'

    },
    {
        img: AppImages.owner2,
        description: 'Hileri Keol',

        date: 'CEO & Founder of company'
    },



];
export const MultiKart_member = () => {

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
        <div className='multikart_main'>
            <div className='headings_A'>
                <span className='multikart_h1'>Multikart Team Member </span>
                <span className='bottomline'></span>
            </div>
            <div className='multikart_div'>
                <Slider {...settings}>

                    {cardData.map((item, index) => (
                        <motion.div key={index} className="multikart_card_main">

                            <motion.div className="multikart_card">
                               <div className='multikart_img_div'>
                                <img src={item.img} className='multikart_img'/>
                               </div>
                                <span className='multikart_text1'>{item.description}</span>
                                <span className='multikart_text2'>{item.date}</span>

                            </motion.div>
                           
                        </motion.div>
                    ))}
                </Slider>


            </div>
           
        </div>

    )
}

