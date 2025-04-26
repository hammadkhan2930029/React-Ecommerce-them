import React from 'react'
import { AppImages } from '../../../constants/AppImages';
import './latestDrops.css';
import { motion, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const productDetails = [
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg1,
    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg3,
    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg7,
    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg5,
    },
];

export const LatestDrops = ({ deviceType }) => {
    const navigate = useNavigate()
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div>
            <motion.div
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <span className="text1">Exclusive</span>
                <span className="text2">Latest Drops</span>
                <span className="line"></span>
                <span className="text3">
                    Looking for the latest trends in clothing, shoes and accessories? Welcome to our 'Latest Drops' edit, bringing you all the latest styles from all your fave brands.
                </span>
            </motion.div>


            <motion.div className='main' 
             ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }} >

                {productDetails.map((product, index) => (
                    <motion.div className="latestProduct" key={index} onClick={()=> navigate('/productDetails')}>
                        <motion.div className="imgmotion.div">
                            <img src={product.image} className="latestCardImg" alt={product.title} />
                        </motion.div>
                        <motion.div className="latestCardText_div">
                            <motion.div className='tag_div'>

                                <span className='tag'>Exclusive</span>
                            </motion.div>
                            <span className="latestCardText1">{product.title}</span>
                            <span className="latestCardText2">{product.category}</span>
                            <span className="latestCardText1">RS.{product.price}</span>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    );
};
