import React, { useState } from 'react'
import { AppImages } from '../../../constants/AppImages';
import './productCards.css';
import { motion, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Snackbar from '@mui/material/Snackbar';
import useScreenWidth from '../../../hooks/screenWidth';
import { IconButton } from '@mui/material';
const productDetails = [
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,
    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
    {
        title: "Arabic Abaya",
        category: "Fashion",
        price: 2500,
        image: AppImages.placeholderImg,

    },
];

export const ProductCards = ({ deviceType }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 9
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastitem - itemsPerPage;
    const currentItems = productDetails.slice(indexOfFirstItem, indexOfLastitem)
    const totalPage = Math.ceil(productDetails.length / itemsPerPage)
    const totallenght = productDetails.length

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // -------------------------------------------
    const screenWidth = useScreenWidth()
    // ---------------------------------------------
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    // ------------------------------------------
    const navigate = useNavigate();
    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: true });
    const [click, setclick] = useState(false)
    return (
        <motion.div className='shop_latest_main'>
            <div style={{ display: 'flex', justifyContent: 'end', width: '95%' }}>
                <motion.div
                  
                    className={click ? 'searchBar' : null}>

                    {click &&
                        <motion.div
                            className='search'
                            ref={refOne}
                            initial={{ opacity: 0, x: 100 }}
                            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: .8 }}>
                            <input className='searchInput' placeholder='Search' />

                        </motion.div>}
                    <IconButton className='searchIcon' onClick={() => setclick(!click)} sx={{backgroundColor:'#f5f5f5'}}>
                        <SearchIcon style={{ fontSize: '28px' }} />
                    </IconButton>
                </motion.div>
            </div>

            <motion.div className='shop_main_main'
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}>
                {currentItems.map((item, index) => (
                    <div className="product_card" onClick={() => navigate('/productDetails')}>
                        <div className="product_image_container">
                            <img
                                src={item.image}
                                alt="Product"
                                className="product_image"
                            />
                            <div className="product_rating">
                                <StarOutlinedIcon style={{ color: '#FFD700' }} /> <span>4.5</span>
                            </div>
                            <div className="product_actions">
                                <button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                                    <FavoriteBorderOutlinedIcon style={{ fontSize: "20px" }} />
                                </button>
                                <button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                                    <ShoppingCartOutlinedIcon style={{ fontSize: "20px" }} />
                                </button>
                                <button><RemoveRedEyeOutlinedIcon style={{ fontSize: "20px" }} /></button>
                            </div>
                        </div>

                        <div className="product_details">
                            <h3 className="product_brand">{item.title}</h3>
                            <p className="product_title">Chic Crop Top</p>
                            <div className="product_price_section">
                                <span className="price_new">$ 5.60</span>
                                <span className="price_old">$6.80</span>
                                <span className="price_discount">5% Off</span>
                            </div>
                            <div className="product_variants">
                                <span className="variant_dot beige" />
                                <span className="variant_dot tan" />
                                <span className="variant_more">+2</span>
                            </div>
                            <div className="product_offer">
                                <FaClockIcon /> <span>Limited Time Offer: 5% off</span>
                            </div>
                        </div>
                    </div>
                ))}

            </motion.div>
            <div className='productPagination'>

                <button disabled={currentPage === 1} style={{ backgroundColor: currentPage === 1 ? "gray" : null }} onClick={() => prevPage()}>Prev</button>
                <button disabled={currentPage === totalPage} style={{ backgroundColor: currentPage === totalPage ? "gray" : null }} onClick={() => nextPage()}>Next</button>
            </div>
            <Box sx={{ width: 500 }}>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message={horizontal == 'right' ? "Succes! item successfully added in wishlist" : "Succes! item successfully added"}
                    key={vertical + horizontal}
                    ContentProps={{
                        sx: {
                            backgroundColor: horizontal == 'right' ? '#A3C1AD' : "green", // Green color (success)
                            color: '#fff',              // Text color
                        },
                    }}
                />
            </Box>



        </motion.div>
    );
};
const FaClockIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#c10037"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '6px' }}
    >
        <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.972 0-9-4.028-9-9s4.028-9 9-9 9 4.028 9 9-4.028 9-9 9zm-.5-14h-1v6h6v-1h-5z" />
    </svg>
);