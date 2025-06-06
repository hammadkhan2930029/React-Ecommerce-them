import React from 'react';
import './contactForm.css';
import { motion, useInView } from "framer-motion";


export const ContactForm = () => {
      const refOne = React.useRef(null);
    
    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className='main_container' 
          ref={refOne}
        initial={{ opacity: 0, y: -100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
            <div className='side_div'>
                <span className='contact_h1'> Get In Touch</span>
                <span className='contact_h6'>

                    We're here to help! Reach out to us with any questions, feedback, or inquiries, and we'll get back to you as soon as possible.
                </span>
            </div>
            <div className="form-container">
                <form className="contact-form">
                    <label>Full Name</label>
                    <input type="text" placeholder="Full Name" />

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" placeholder="Enter Your Phone Number" />
                        </div>
                    </div>

                    <label>Subject</label>
                    <input type="text" placeholder="Subject" />

                    <label>Write Your Message</label>
                    <textarea placeholder="Write Your Message" rows="6"></textarea>

                    <button type="submit">Send Your Message</button>
                </form>
            </div>
        </motion.div>
    );
};

