import React from "react";
import { AppImages } from "../../../constants/AppImages";
import './aboutUsBanner.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";




export const AboutUs_banner = () => {
    const [refOne, inViewOne] = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div className="about_us_main">
            <div className="about_us">

                <motion.div className="about_us_banner" 
                 ref={refOne}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <img src={AppImages.banner2} className="img" />

                </motion.div>
                <motion.div className="about_us_data" 
                 ref={refOne}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <span className="about_us_text1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</span>
                    <span className="about_us_text2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        On the other hand,
                        we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
                        so blinded by desire,
                        that they cannot foresee the pain and trouble that are bound to ensue;
                        and equal blame belongs to those who fail in their duty through weakness of will,
                        which is the same as saying through shrinking from toil and pain.
                        These cases are perfectly simple and easy to distinguish.
                        In a free hour,
                        when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,
                        every pleasure is to be welcomed and every pain avoided.
                        But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
                        The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures,
                        or else he endures pains to avoid worse pains.</span>
                </motion.div>
            </div>

        </div>

    )
}