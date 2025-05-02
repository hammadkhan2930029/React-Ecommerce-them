import React from 'react';
import { Formik } from 'formik';
import './registerForm.css'

export const RegisterForm = () => {
    return (
        <div className='register_main_div'>
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
                                <div className='first_row'>

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
                                </div>
                                {/* --------------- */}
                                <div className='second_row'>
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

                                </div>
                                {/* ----------------------------- */}

                                <div className='third_row'>
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
                                </div>


                                <div >

                                    <button className='submit_btn' type="submit">Login</button>
                                </div>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
