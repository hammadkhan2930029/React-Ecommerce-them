import React, { useState } from 'react'
import { AppImages } from '../../../constants/AppImages';
import './ourProduct.css';
import { motion, useInView,AnimatePresence } from "framer-motion";



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
        image: AppImages.cardimg4,
    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg5,
    },
];
const productDetailsNewArivals = [
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
        image: AppImages.cardimg4,
    },

];
const productDetailsOnSale = [

    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg4,
    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.cardimg5,
    },
];

const productMap = {
    1: { data: productDetails, tag: "Featured", key: "featured" },
    2: { data: productDetailsNewArivals, tag: "New Arrival", key: "newarrival" },
    3: { data: productDetailsOnSale, tag: "On Sale", key: "onsale" },
};

const renderProductList = ({ data, tag, key }) => (
    <div className='ourProduct_main'>

    <motion.div
        key={key}
        className="our_main"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
    >
        {data.map((product, index) => (
            <motion.div className="latestProduct" key={index}>
                <motion.div className="imgMotionDiv">
                    <img src={product.image} className="latestCardImg" alt={product.title} />
                </motion.div>
                <motion.div className="latestCardText_div">
                    <motion.div className="tag_div">
                        <span className="tag">{tag}</span>
                    </motion.div>
                    <span className="latestCardText1">{product.title}</span>
                    <span className="latestCardText2">{product.category}</span>
                    <span className="latestCardText1">RS.{product.price}</span>
                </motion.div>
            </motion.div>
        ))}
    </motion.div>
    </div>

);

export const OurProductCards = () => {

    const [select, setSelect] = useState(1)
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: false });

  
  

  
    return (
        <motion.div>
            <motion.div
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}
                className='ourProductHeadings'>
                <span className="text_1">Our Products</span>
                <span className="text_2">Everyday Casual</span>
                <span className="line"></span>
                <div className='textBtn_div'>
                    <span className={select == 1 ? 'selected_textBtn' :"textBtn"} onClick={() => setSelect(1)}>Featured</span>
                    <span className={select == 2 ? 'selected_textBtn' :"textBtn"} onClick={() => setSelect(2)}>New Arrivals</span>
                    <span className={select == 3 ? 'selected_textBtn' :"textBtn"} onClick={() => setSelect(3)}>On Sale</span>
                </div>
            </motion.div>
         
            <AnimatePresence mode="wait">
                {renderProductList(productMap[select])}
            </AnimatePresence>

        </motion.div>
    );
};
