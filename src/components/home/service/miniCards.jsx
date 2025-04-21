import React from "react";
import { AppImages } from "../../../constants/AppImages";
import './miniCards.css'
import { motion, useInView } from "framer-motion";

export const MiniCards = () => {
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className="miniCard"
            ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}>
            <motion.div className="card1">
                <img src={AppImages.truckSvg} className="cardImg" />
                <motion.div className="textDiv">
                    <span className="cardText1">Free shipping</span>
                    <span className="cardText">FREE SHIPPING ON ORDERS OVER Rs.2500</span>
                </motion.div>
            </motion.div>

            <motion.div className="card1">

                <img src={AppImages.clockSvg} className="cardImg" />
                <motion.div className="textDiv">
                    <span className="cardText1">24 X 7 service</span>
                    <span className="cardText">ONLINE SERVICE FOR NEW CUSTOMER</span>
                </motion.div>
            </motion.div>

            <motion.div className="card1">
                <img src={AppImages.noticeSvg} className="cardImg" />
                <motion.div className="textDiv">
                    <span className="cardText1">Returns</span>
                    <span className="cardText">3 - DAY RETURNS MONEY BACK</span>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}