import React from 'react';
import './loginForm.css';

export const LoginForm = () => {
    return (
        <div className='form_main'>


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


                    <button type="submit">Login</button>

                </form>
            </div>
            <div className="form-container_R">
                {/* <span className='n_customer1'>New Customer</span> */}
                <div style={{display:'flex',flexDirection:'column'}}>
                    <span  className='n_customer2'>Create A Account</span>
                    <span  className='n_customer3'>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</span>
                    <button className='btn2'>Create an Account</button>
                </div>
            </div>
        </div>

    );
};

