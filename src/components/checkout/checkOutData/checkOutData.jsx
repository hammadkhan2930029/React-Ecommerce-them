import React, { useEffect } from "react";
import './checkOutData.css';
import Radio from '@mui/material/Radio';
import AddIcon from '@mui/icons-material/Add';
import { AppImages } from "../../../constants/AppImages";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";



export const CheckOutData = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [selectedValue_billing, setSelectedValue_billing] = React.useState('a');
    const [selectedValue_delivery, setSelectedValue_delivery] = React.useState('a');
    const [selectedValue_payment, setSelectedValue_payment] = React.useState('a');
    // Top mein ye add karein
    const [refOne, inViewOne] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refTwo, inViewTwo] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refThree, inViewThree] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refFour, inViewFour] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refFive, inViewFive] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refSix, inViewSix] = useInView({ triggerOnce: true, threshold: 0.1 });





    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    // --------------------------------------------

    const handleChange2 = (event) => {
        setSelectedValue_billing(event.target.value);
    };
    // ------------------------------------------------

    const handleChange3 = (event) => {
        setSelectedValue_delivery(event.target.value);
    };
    // ------------------------------------------------

    const handleChange4 = (event) => {
        setSelectedValue_payment(event.target.value);
    };
    const paymentMethods = [
        { label: "CASH ON DELIVERY", value: "a" },
        { label: "PAYPAL", value: "b" },
        { label: "STRIPE", value: "c" },
        { label: "SSLCOMMERZ", value: "d" },
        { label: "FLUTTERWAVE", value: "e" },
        { label: "PAYSTACK", value: "f" },
        { label: "MOLLIE", value: "g" },
        { label: "BANK TRANSFER", value: "h" },
        { label: "BKASH", value: "i" },
        { label: "CCAVENUE", value: "j" },
        { label: "PHONEPE", value: "k" },
        { label: "INSTAMOJO", value: "l" }
    ];
    // --------------------------------------
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="checkOut_main">
            <div className="one">
                <motion.div className="shipping_address"
                    ref={refOne}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <div className="top">
                        <span className="h3">Shipping Address</span>
                        <span className="h4"><AddIcon style={{ fontSize: '20px' }} /> Add New</span>

                    </div>
                    <div className="alignment">
                        <div className="shipping">

                            <div className="btn_align">

                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span className="new_house_text">New Home</span>
                            </div>
                            <div className="newHome">
                                <span>Address : 26, Starts Hollow Colony, Denver, Colorado, United States</span>
                                <span>Pin Code : 80014</span>
                                <span>Phone : +1 5551855359</span>

                            </div>
                        </div>
                        <div className="oldHome">

                            <div className="btn_align">

                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span className="new_house_text">Old Home</span>
                            </div>
                            <div className="newHome">
                                <span>Address : 26, Starts Hollow Colony, Denver, Colorado, United States</span>
                                <span>Pin Code : 80014</span>
                                <span>Phone : +1 5551855359</span>

                            </div>
                        </div>
                        <div className="Office">

                            <div className="btn_align">

                                <Radio
                                    checked={selectedValue === 'c'}
                                    onChange={handleChange}
                                    value="c"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span className="new_house_text">Office</span>
                            </div>
                            <div className="newHome">
                                <span>Address : 26, Starts Hollow Colony, Denver, Colorado, United States</span>
                                <span>Pin Code : 80014</span>
                                <span>Phone : +1 5551855359</span>

                            </div>
                        </div>
                    </div>

                </motion.div>
                <motion.div className="billing_address"
                    ref={refTwo}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <div className="top">
                        <span className="h3">Billing Address</span>
                        <span className="h4"><AddIcon style={{ fontSize: '20px' }} /> Add New</span>

                    </div>
                    <div className="alignment">
                        <div className="shipping">

                            <div className="btn_align">

                                <Radio
                                    checked={selectedValue_billing === 'a'}
                                    onChange={handleChange2}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span className="new_house_text">New Home</span>
                            </div>
                            <div className="newHome">
                                <span>Address : 26, Starts Hollow Colony, Denver, Colorado, United States</span>
                                <span>Pin Code : 80014</span>
                                <span>Phone : +1 5551855359</span>

                            </div>
                        </div>
                        <div className="oldHome">

                            <div className="btn_align">

                                <Radio
                                    checked={selectedValue_billing === 'b'}
                                    onChange={handleChange2}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span className="new_house_text">Old Home</span>
                            </div>
                            <div className="newHome">
                                <span>Address : 26, Starts Hollow Colony, Denver, Colorado, United States</span>
                                <span>Pin Code : 80014</span>
                                <span>Phone : +1 5551855359</span>

                            </div>
                        </div>
                        <div className="Office">

                            <div className="btn_align">

                                <Radio
                                    checked={selectedValue_billing === 'c'}
                                    onChange={handleChange2}
                                    value="c"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span className="new_house_text">Office</span>
                            </div>
                            <div className="newHome">
                                <span>Address : 26, Starts Hollow Colony, Denver, Colorado, United States</span>
                                <span>Pin Code : 80014</span>
                                <span>Phone : +1 5551855359</span>

                            </div>
                        </div>
                    </div>

                </motion.div>
                <motion.div className="deliver_options"
                    ref={refThree}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewThree ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <div className="delivery">

                        <span className="h2">Delivery Options</span>
                    </div>

                    <div className="delivery_card_div">
                        <div className="delivery_card">
                            <Radio
                                checked={selectedValue_delivery === 'a'}
                                onChange={handleChange3}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <span>Standard Delivery | Approx 5 to 7 Days</span>
                        </div>
                        <div className="delivery_card">
                            <Radio
                                checked={selectedValue_delivery === 'b'}
                                onChange={handleChange3}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <span> Express Delivery | Schedule</span>
                        </div>
                    </div>
                </motion.div>


                <motion.div className="deliver_options"
                    ref={refFour}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewFour ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <div className="delivery">
                        <span className="h2">Payment Options</span>
                    </div>

                    <div className="delivery_card_div">
                        {paymentMethods.map((method) => (
                            <div key={method.value} className="delivery_card">
                                <Radio
                                    checked={selectedValue_payment === method.value}
                                    onChange={handleChange4}
                                    value={method.value}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': method.label }}
                                />
                                <span>{method.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            {/* -------------------------------------------------------------------------------------- */}
            <div className="two"
            >
                <motion.div className="summary_order"
                    ref={refFive}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewFive ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <div className="summary_headings">
                        <span className="summary_h1">Summary Order</span>
                        <span className="summary_h2">For a better experience, verify your goods and choose your shipping option.</span>
                    </div>
                    <div className="summary_data_div">
                        <div className="summary_data">
                            <div className="img_div">
                                <img src={AppImages.cardimg3} className="img" />
                            </div>
                            <div className="summery_text_div">
                                <span className="summery_text1"> Gym Coords Set (Brown)</span>
                                <span className="summery_text1">$15.00 X 1 </span>
                            </div>
                        </div>
                        <div className="summary_data">
                            <div className="img_div">
                                <img src={AppImages.cardimg3} className="img" />
                            </div>
                            <div className="summery_text_div">
                                <span className="summery_text1"> Gym Coords Set (Brown)</span>
                                <span className="summery_text1">$15.00 X 1 </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="billing_summary"
                    ref={refSix}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewSix ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}>
                    <div className="billing-summary">
                        <h2>Billing Summary</h2>
                        <div className="promo-code-header">
                            <span>Promo code</span>
                            <span className="view-all">🏷 View All</span>
                        </div>

                        <div className="coupons">
                            <div className="coupon-box">
                                <p>Holiday Savings</p>
                                <strong>#HOLIDAY40</strong>
                                <span className="copy-code">Copy Code</span>
                            </div>
                            <div className="coupon-box">
                                <p>Holiday Savings</p>
                                <strong>#HOLIDAY40</strong>
                                <span className="copy-code">Copy Code</span>
                            </div>
                        </div>

                        <input
                            type="text"
                            placeholder="Enter Coupon Code Here..."
                            className="coupon-input"
                        />

                        <div className="summary-section">
                            <div className="summary-item">
                                <span>Sub Total</span>
                                <span></span>
                            </div>
                            <div className="summary-item">
                                <span>Shipping</span>
                                <span></span>
                            </div>
                            <div className="summary-item">
                                <span>Tax</span>
                                <span></span>
                            </div>
                            <div className="summary-item">
                                <div>
                                    <strong>Points</strong>
                                    <p className="small-text">Would you prefer to pay using points?</p>
                                </div>
                                <div className="right-side">
                                    <span>$65.66</span>
                                    <input type="checkbox" />
                                </div>
                            </div>
                            <div className="summary-item">
                                <div>
                                    <strong>Wallet Balance</strong>
                                    <p className="small-text">Would you prefer to pay using wallet?</p>
                                </div>
                                <div className="right-side">
                                    <span>$8.47</span>
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>

                        <div className="summary-total">
                            <strong>Total</strong>
                        </div>

                        <button className="place-order-btn" disabled>
                            Place Order
                        </button>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}