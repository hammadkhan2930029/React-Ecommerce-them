import React from "react";
import { motion, useInView } from "framer-motion";
import { AppImages } from "../../../constants/AppImages";
import './Banner.css';

export const Banner = () => {
      const refOne = React.useRef(null);
    
      const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className="banner_main">
            <motion.div className="banner">
                <motion.div className="bannerImg_div"   ref={refOne}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>
                    <img src={AppImages.banner1}  className="bannerImg"/>
                </motion.div>
                <motion.div className="bannerImg_div"  
                 ref={refOne}
                initial={{ opacity: 0, x: 100 }}
                animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>
                <img src={AppImages.banner2}  className="bannerImg"/>

                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export const FullBanner =()=>{
    const refOne = React.useRef(null);
    
    const inViewOne = useInView(refOne, { triggerOnce: true });
    return(
        <motion.div className="fullBanner_div"    
        ref={refOne}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
            <img src={AppImages.fullBanner} className="fullBanner"/>

        </motion.div>
    )
}