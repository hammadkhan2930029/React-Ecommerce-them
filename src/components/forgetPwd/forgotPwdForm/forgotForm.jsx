import React from "react";
import './forgotForm.css';
import { motion, useInView } from "framer-motion";

export const Forgot_form = () => {
     const refOne = React.useRef(null);
    
      const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className="forgot_main" 
         ref={refOne}
        initial={{ opacity: 0, y: -100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
            <div className="forgot">
                <span className="forgot_h1">Forgot password</span>
                <div className='forgot_input_div'>
                    {/* <label>Last Name</label> */}
                    <input
                        className='forgot_input'
                        type="text"
                        placeholder="Enter Your Email"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // name="last_name"
                        // value={values.last_name}
                    />

                </div>
                <div >

                    <button className='forgot_submit_btn' type="submit">Submit</button>
                </div>

            </div>

        </motion.div>
    )
}
