import React from 'react';
import './loginForm.css';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from "framer-motion";



export const LoginForm = () => {
    const navigate = useNavigate()
      const refOne = React.useRef(null);
        
          const inViewOne = useInView(refOne, { triggerOnce: true });

    return (
        <div className='form_main'>

            <motion.div className='form_left'
             ref={refOne}
             initial={{ opacity: 0, x: -100 }}
             animate={inViewOne ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: .8 }} >
                <span className='login'>Login</span>

                <div className="form-container_L">
                    <form className="contact-form">


                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group" >

                            <label>Subject</label>
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className='forgot_div' >
                            <span onClick={()=> navigate('/forgot_pwd')}>Forgot password</span>
                        </div>


                        <button type="submit">Login</button>

                    </form>
                </div>
            </motion.div>
            <motion.div className='form_right' 
             ref={refOne}
        initial={{ opacity: 0, x: 100 }}
        animate={inViewOne ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: .8 }}>
            <span className='new_customer'>New Customer</span>


                <div className="form-container_R">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className='n_customer2'>Create A Account</span>
                        <span className='n_customer3'>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</span>
                        <button className='btn2'>Create an Account</button>
                    </div>
                </div>
            </motion.div>

        </div>

    );
};

