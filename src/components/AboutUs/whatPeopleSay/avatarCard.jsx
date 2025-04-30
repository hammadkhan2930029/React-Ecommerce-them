import React from 'react'
import './avatarCard.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppImages } from '../../../constants/AppImages';
import { motion, useInView } from "framer-motion";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const cardData = [
    {
        img: AppImages.owner1,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.owner2,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.owner3,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.owner4,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },
    {
        img: AppImages.owner1,
        description: 'London Fashion clothing and ideas for valentines day',
        date: '25 January 2021'
    },



];
export const AvatarCard = () => {

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
        <div className='avatar_main'>
            <div className='headings_A'>
                <span className='avatar_h4'>Latest Testimonials</span>
                <span className='avatar_h1'>What People Say </span>
                <span className='bottomline'></span>
            </div>
            <div className='avatar_div'>
                <Slider {...settings}>

                    {cardData.map((item, index) => (
                        <motion.div key={index} className="avatar_card_main">

                            <motion.div className="avatar_card">
                                <Stack direction="row" spacing={2}>
                                   
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={item.img}
                                        sx={{ width: 150, height: 150 }}
                                    />
                                </Stack>
                                <span className='avatar_text1'>Mark Junco</span>
                                <span className='avatar_text2'>Designer</span>

                            </motion.div>
                            <motion.div className="avatar_text_div">
                                <span className='avatar_description'>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                    and I will give you a complete account of the system, and expound the actual
                                    teachings.</span>

                            </motion.div>
                        </motion.div>
                    ))}
                </Slider>


            </div>
           
        </div>

    )
}

