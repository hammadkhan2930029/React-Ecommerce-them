import React from 'react';
import { Formik } from 'formik';
import './registerForm.css';
import { motion, useInView } from "framer-motion";


export const RegisterForm = () => {
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className='register_main_div'
            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <div className='register_main'>
                <span className='creat_acc'>Create Account</span>

                <Formik
                    initialValues={{
                        first_name: '',
                        last_name: '',
                        email: '',
                        mobile_no: '',
                        password: '',
                        confirm_passwrod: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleBlur, handleChange, handleSubmit, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='register_form_main'>
                                <motion.div className='first_row'
                                    ref={refOne}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: .8 }}>

                                    <div className='input_div'>
                                        <label>First Name</label>
                                        <input
                                            className='input'
                                            type="text"
                                            placeholder="First name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="first_name"
                                            value={values.first_name}
                                        />

                                    </div>

                                    <div className='input_div'>
                                        <label>Last Name</label>
                                        <input
                                            className='input'
                                            type="text"
                                            placeholder="Last name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="last_name"
                                            value={values.last_name}
                                        />

                                    </div>
                                </motion.div>
                                {/* --------------- */}
                                <motion.div className='second_row'
                                    ref={refOne}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: .8 }}>
                                    <div className='input_div'>
                                        <label>Email</label>
                                        <input
                                            className='input'
                                            type="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="email"
                                            value={values.email}
                                        />
                                    </div>

                                    <div className='input_div'>
                                        <label>Mobile No</label>
                                        <input
                                            className='input'
                                            type="number"
                                            placeholder="Mobile no"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="mobile_no"
                                            value={values.mobile_no}
                                        />
                                    </div>

                                </motion.div>
                                {/* ----------------------------- */}

                                <motion.div className='third_row'
                                    ref={refOne}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: .8 }}>
                                    <div className='input_div'>
                                        <label>Password</label>
                                        <input
                                            className='input'
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="password"
                                            value={values.password}
                                        />
                                    </div>

                                    <div className='input_div'>
                                        <label>Confirm Password</label>
                                        <input
                                            className='input'
                                            type="password"
                                            placeholder="Confirm password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="confirm_passwrod"
                                            value={values.confirm_passwrod}
                                        />
                                    </div>
                                </motion.div>


                                <motion.div ref={refOne}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: .8 }}>

                                    <button className='submit_btn' type="submit">Login</button>
                                </motion.div>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        </motion.div>
    );
};
