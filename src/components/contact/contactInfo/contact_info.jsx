import React from "react";
import './contact_info.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import BookIcon from '@mui/icons-material/Book';
import { motion, useInView } from "framer-motion";

export const Contact_info = () => {
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className="contact_info"
           >
            <motion.div className="contact_info_data"
             ref={refOne}
             initial={{ opacity: 0, x: 100 }}
             animate={inViewOne ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: .8 }}>
                <div>
                    <CallIcon sx={{ color: '#ec8951', fontSize: '32px' }} />

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">Contact Us</span>
                    <span className="contact_data2">+91 123 - 456 - 7890</span>
                </div>

            </motion.div>
            <motion.div className="contact_info_data"
             ref={refOne}
             initial={{ opacity: 0, x: -100 }}
             animate={inViewOne ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: .8 }}>
                <div>
                    <EmailIcon sx={{ color: '#ec8951', fontSize: '32px' }} />

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">Email</span>
                    <span className="contact_data2">support@multikart.com</span>
                </div>

            </motion.div>
            <motion.div className="contact_info_data"
             ref={refOne}
             initial={{ opacity: 0, x: 100 }}
             animate={inViewOne ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: .8 }}>
                <div>
                    <PlaceIcon sx={{ color: '#ec8951', fontSize: '32px' }} />

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">
                        Address</span>
                    <span className="contact_data2">ABC Complex,Near xyz, New York</span>
                </div>

            </motion.div>
            <motion.div className="contact_info_data"
             ref={refOne}
             initial={{ opacity: 0, x: -100 }}
             animate={inViewOne ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: .8 }}>
                <div>
                    <BookIcon sx={{ color: '#ec8951', fontSize: '32px' }} />

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">Fax</span>
                    <span className="contact_data2">support@multikart.com</span>
                </div>

            </motion.div>


        </motion.div>
    )
}