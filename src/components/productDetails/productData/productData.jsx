import React, { useState, useEffect } from "react";
import './productData.css';
import { motion, useInView } from "framer-motion";
import { AppImages } from "../../../constants/AppImages";
import Carousel from 'react-bootstrap/Carousel';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import AccordionSummary from '@mui/material/AccordionSummary';
import AtmIcon from '@mui/icons-material/Atm';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { DialogSlide } from "../dailogBox/dailogBox";
import { AskQueastion } from "../dailogBox/askQueastion";
import { Description } from "../description/description";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";



const slideImages = [
    {
        url: AppImages.cardimg1,
        caption: 'Slide 1'
    },
    {
        url: AppImages.cardimg3,
        caption: 'Slide 2'
    },
    {
        url: AppImages.cardimg5,
        caption: 'Slide 3'
    },
];





export const ProductData = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate()
    const [count, setCount] = useState(1)
    const [openDialogBox, setopenDialogBox] = useState(false)
    const [askQueation, setAskQueation] = useState(false)

    const [selectColor, setSelectColor] = useState('')
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    // ------------------------------
    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: false });
    // ----------------------------------

   
    // --------------------------------------
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElColor, setAnchorElColor] = React.useState(null);
    const openColor = Boolean(anchorElColor);
    const handleClickColor = (event) => {
        setAnchorElColor(event.currentTarget);
    };
    const handleCloseColor = () => {
        setAnchorElColor(null);
    };
    // ----------------------------------------
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const halfPage = window.innerHeight / 1;
            if (scrollPosition > halfPage) {
                setShowCart(true)
            } else {
                setShowCart(false)
            }

        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])
    return (
        <div>
            <motion.div className="productData_main">
                <motion.div className="left">
                    <div className="img_slider">
                        <div className="img_div">
                            <Carousel>
                                {slideImages.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img src={item.url} className="product_slider_img" />

                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        </div>
                        <div className="img_div_2">
                            <img src={AppImages.cardimg1} alt="Product img" className="product_img" />
                            <img src={AppImages.cardimg3} alt="Product img" className="product_img" />
                            <img src={AppImages.cardimg5} alt="Product img" className="product_img" />

                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------- */}
                    <div className="data_div">
                        <span className="productData_text1"> <MovingOutlinedIcon /> Selling fast! 4 people have this in their carts.</span>
                        <span className="productData_text2">Gym Coords Set (Brown)</span>
                        <span className="productData_text3">20 Reviews</span>

                        <span className="productData_price">Price $15.00</span>
                        <span className="productData_text4">Inclusive all the text</span>
                        <div style={{ marginTop: 10 }}>
                            <span className="productData_text5" onClick={() => setopenDialogBox(true)}> <LocalShippingOutlinedIcon /> Delivery & Return </span>
                            <span className="productData_text5" onClick={() => setAskQueation(true)}> <LiveHelpOutlinedIcon /> Ask a Question</span>
                            <DialogSlide open={openDialogBox} setOpen={setopenDialogBox} />
                            <AskQueastion open={askQueation} setOpen={setAskQueation} />

                        </div>
                        {/* ----------------------------------------------------------------------------------------- */}
                        <div className="accordion">
                            <Accordion
                                expanded={expanded}
                                onChange={handleExpansion}
                                slots={{ transition: Fade }}
                                slotProps={{ transition: { timeout: 400 } }}
                                sx={[
                                    expanded
                                        ? {
                                            [`& .${accordionClasses.region}`]: {
                                                height: 'auto',
                                            },
                                            [`& .${accordionDetailsClasses.root}`]: {
                                                display: 'block',
                                            },
                                        }
                                        : {
                                            [`& .${accordionClasses.region}`]: {
                                                height: 0,
                                            },
                                            [`& .${accordionDetailsClasses.root}`]: {
                                                display: 'none',
                                            },
                                        },
                                ]}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography component="span" style={{ fontSize: 20 }}>Product Description</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        "Gym Coords Set" offers a complete workout ensemble for the modern fitness enthusiast. This coordinated set includes everything needed for a stylish and functional gym session, from moisture-wicking tops to supportive leggings, ensuring both comfort and performance during workouts.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <Typography component="span" style={{ fontSize: 20 }}>Information</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="accordion_details">
                                        <div>
                                            <h4>Product Info</h4>
                                            <ul>
                                                <li>SKU: SP18 (COPY)</li>
                                                <li>Weight: 150 Gms</li>
                                                <li>Quantity: 40 Items Left</li>
                                                <li>Unit: 1 Item</li>
                                                <li>Stock Status: In stock</li>

                                            </ul>

                                        </div>
                                        <div>
                                            <h4>Delivery Details</h4>
                                            <span > <LocalShippingOutlinedIcon /> Your order is likely to reach you within 7 days.</span>
                                            <span> <MultipleStopIcon /> Hassle free returns within 7 Days.</span>
                                        </div>
                                        <div className="accordion_icon_div">
                                            <h5>Guaranteed Safe Checkout</h5>
                                            <div className="accordion_icon">
                                                <AtmIcon style={{ fontSize: '40px' }} />
                                                < PaymentsIcon style={{ fontSize: '40px' }} />
                                                < AccountBalanceIcon style={{ fontSize: '40px' }} />
                                                <CurrencyBitcoinIcon style={{ fontSize: '40px' }} />
                                            </div>

                                        </div>

                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>

                </motion.div>
                {/* ================================================================================================================ */}
                <motion.div className="right"
                >
                    <h3>Color</h3>
                    <div className="color_div">
                        <div className={selectColor == 1 ? "selected" : "color_border"} onClick={() => setSelectColor(1)}>

                            <div className="color1"></div>
                        </div>
                        <div className={selectColor == 2 ? "selected" : "color_border"} onClick={() => setSelectColor(2)}>

                            <div className="color2"></div>
                        </div>
                        <div className={selectColor == 3 ? "selected" : "color_border"} onClick={() => setSelectColor(3)}>

                            <div className="color3"></div>
                        </div>

                    </div>
                    <div className="qty_div">
                        <button className="btn" disabled={count == 1} onClick={() => setCount(count - 1)}><ArrowBackIosOutlinedIcon style={{ fontSize: '20px' }} /></button>
                        <span className="qty">{count}</span>
                        <button className="btn" onClick={() => setCount(count + 1)}>< ArrowForwardIosOutlinedIcon style={{ fontSize: '20px' }} /></button>


                    </div>
                    <div className="button_div">
                        <button>Out of Stock</button>
                        <button>Buy now</button>

                    </div>

                </motion.div>


            </motion.div>
            {/* ---------------------------------- */}
            <div>

                <Description />
            </div>
            {/* --------------------------------------- */}
            {showCart && (
                <motion.div className="floatingCart_div"  >
                    <div className="floating">
                        <div className="part_1">
                            <img src={AppImages.cardimg6} className="small_cart_img" />
                            <div className="part_1_data">
                                <span> Gym Coords Set</span>
                                <span>$30.58</span>
                            </div>
                        </div>
                        <div className="part_2">
                            <span className="variant">Variants : </span>
                            <div onClick={handleClickColor} className="menu">
                                <span>Color</span>
                                <KeyboardArrowDownIcon style={{ fontSize: '20px' }} />


                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElColor}
                                open={openColor}
                                onClose={handleCloseColor}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleCloseColor}>Red</MenuItem>
                                <MenuItem onClick={handleCloseColor}>Green</MenuItem>
                                <MenuItem onClick={handleCloseColor}>Yellow</MenuItem>
                            </Menu>
                            <div onClick={handleClick} className="menu">
                                <span>Size</span>
                                <KeyboardArrowDownIcon style={{ fontSize: '20px' }} />



                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Small</MenuItem>
                                <MenuItem onClick={handleClose}>Medium</MenuItem>
                                <MenuItem onClick={handleClose}>Larg</MenuItem>
                            </Menu>

                        </div>
                        <div className="part_3">
                            <button className="add_to_card" onClick={() => navigate('/cart')}>Add To Cart <ShoppingCartOutlinedIcon /></button>
                        </div>

                    </div>


                </motion.div >
            )}

        </div >
    )
}