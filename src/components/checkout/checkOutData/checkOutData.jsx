import React from "react";
import './checkOutData.css';
import Radio from '@mui/material/Radio';
import AddIcon from '@mui/icons-material/Add';
export const CheckOutData = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="checkOut_main">
            <div className="one">
                <div className="shipping_address">
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

                </div>
                <div className="billing_address"></div>
                <div className="deliver_options"></div>
                <div className="payment_options"></div>




            </div>
            <div className="two">
                <div className="summary_order"></div>
                <div className="billing_summary"></div>


            </div>
        </div>
    )
}