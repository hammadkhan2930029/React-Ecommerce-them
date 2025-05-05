import React, { useState } from "react";
import './description.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { motion, useInView } from "framer-motion";





const ratings = [
    { star: 5, count: 9, color: "#4CAF50" },    // green
    { star: 4, count: 7, color: "#4CAF50" },
    { star: 3, count: 5, color: "#4CAF50" },
    { star: 2, count: 3, color: "#FFA726" },    // orange
    { star: 1, count: 1, color: "#F44336" },    // red
];
// ---------------------------------------------------
const reviews = [
    {
        name: "John Due",
        date: "10 Aug 2024 11:05:AM",
        text: "Wow! This fashion product exceeded all my expectations! From the moment I opened the package, I could tell it was something special. The quality of the materials is outstanding.",
        rating: 4,
    },
    {
        name: "Rhoda Mayer",
        date: "10 Aug 2024 11:05:AM",
        text: "Nice attention to detail in the craftsmanship is truly impressive. Not only does it look fabulous, but it feels incredibly comfortable too. I've received so many compliments whenever I wear it!",
        rating: 5,
    },
    {
        name: "Jack Deo",
        date: "10 Aug 2024 11:05:AM",
        text: "The product boasts impressive craftsmanship, meticulous attention to detail, and...",
        rating: 4,
    },
    {
        name: "Jack Deo",
        date: "10 Aug 2024 11:05:AM",
        text: "The product boasts impressive craftsmanship, meticulous attention to detail, and...",
        rating: 4,
    },
    {
        name: "Jack Deo",
        date: "10 Aug 2024 11:05:AM",
        text: "The product boasts impressive craftsmanship, meticulous attention to detail, and...",
        rating: 4,
    },
    {
        name: "Jack Deo",
        date: "10 Aug 2024 11:05:AM",
        text: "The product boasts impressive craftsmanship, meticulous attention to detail, and...",
        rating: 4,
    },
    // aur reviews yahan add kar sakte ho
];

const renderStars = (count) => {
    return (
        <span className="stars">
            {"★".repeat(count)}
            {"☆".repeat(5 - count)}
        </span>
    );
};


export const Description = () => {
    const maxCount = Math.max(...ratings.map(r => r.count));
    const [value, setValue] = React.useState(2);
    const [select, setSelect] = useState(1)
    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: false });
    return (
        <motion.div>
            <div style={{ display: 'flex', justifyContent: 'center', }}>

                <div className="toggle">
                    <div className={select === 1 ? "bg" : "toggleBtn"} onClick={() => setSelect(1)}>Description</div>
                    <div className={select === 2 ? "bg" : "toggleBtn"} onClick={() => setSelect(2)}>Review</div>
                    <div className={select === 3 ? "bg" : "toggleBtn"} >Q & A</div>

                </div>

            </div>
            {select === 1 ? (
                <motion.div style={{ display: 'flex', justifyContent: 'center' }}
                    ref={refOne}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .8 }}>


                    <div className="product_description">
                        <span>
                            This outfit features a white blouse selected by our in-house stylist. The blouse showcases elegant black cursive text that adds a unique charm to the minimalist design. It’s a stylish and versatile choice, ideal for both casual and semi-formal wear.
                        </span>

                        <h5>Fabric:</h5>
                        <span>
                            Crafted from premium art silk — a soft, lightweight fabric made from rayon — this outfit offers a luxurious feel and all-day comfort, especially suited for warm weather.
                        </span>

                        <h5>Size & Fit:</h5>
                        <span>
                            The model is 5'8" and is wearing a size Small. The fit is designed to be flattering while providing ease of movement.
                        </span>

                        <h5>Material & Care:</h5>
                        <span>
                            Top Fabric: 100% Pure Cotton
                        </span>
                        <span>
                            Bottom Fabric: 100% Pure Cotton
                        </span>
                        <span>
                            Care Instructions: Hand-wash separately in cold water. Dry in shade for fabric longevity.
                        </span>

                    </div>

                </motion.div>
            ) : select === 2 ? (
                <motion.div style={{ display: 'flex', justifyContent: 'center' }}
                    ref={refOne}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <div className="reviews">
                        <div className="reviewLeft">
                            <div className="rating">
                                <span className="ratingValue">4.00</span>
                                <div>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography component="legend">Controlled</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />

                                    </Box>

                                </div>
                            </div>
                            <div className="rating-container">
                                <h3>Review this product</h3>
                                <p className="rating-subtitle">Let other customers know what you think</p>

                                {ratings.map((r, index) => {
                                    const widthPercent = (r.count / maxCount) * 100;

                                    return (
                                        <div className="rating-row" key={index}>
                                            <span className="star-label">{r.star} ★</span>
                                            <div className="bar-bg">
                                                <div
                                                    className="bar-fill"
                                                    style={{ width: `${widthPercent}%`, backgroundColor: r.color }}
                                                ></div>
                                            </div>
                                            <span className="count">{r.count}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="write_review_btn">
                                <span>Write Review</span>
                            </div>
                        </div>
                        <div className="reviewRight">
                            <div className="review-container">
                                <div className="review-scroll">
                                    {reviews.map((review, index) => (
                                        <div className="review-card" key={index}>
                                            <div className="review-left">
                                                <div className="avatar">
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                            </div>
                                            <div className="review-right">
                                                <div className="review-header">
                                                    <strong>{review.name}</strong>{" "}
                                                    <span className="review-date">{review.date}</span>
                                                    {renderStars(review.rating)}
                                                </div>
                                                <p className="review-text">"{review.text}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            ) : null}

        </motion.div>

    )
}