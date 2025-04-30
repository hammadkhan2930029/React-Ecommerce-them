import React from "react";
import './contact_info.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import BookIcon from '@mui/icons-material/Book';

export const Contact_info = () => {
    return (
        <div className="contact_info">
            <div className="contact_info_data">
                <div>
                    <CallIcon sx={{ color: '#ec8951',fontSize:'32px' }}/>

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">Contact Us</span>
                    <span className="contact_data2">+91 123 - 456 - 7890</span>
                </div>

            </div>
            <div className="contact_info_data">
                <div>
                    <EmailIcon sx={{ color: '#ec8951',fontSize:'32px' }}/>

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">Email</span>
                    <span className="contact_data2">support@multikart.com</span>
                </div>

            </div>
            <div className="contact_info_data">
                <div>
                    <PlaceIcon sx={{ color: '#ec8951',fontSize:'32px' }}/>

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">
                    Address</span>
                    <span className="contact_data2">ABC Complex,Near xyz, New York</span>
                </div>

            </div>
            <div className="contact_info_data">
                <div>
                    <BookIcon sx={{ color: '#ec8951',fontSize:'32px' }}/>

                </div>
                <div className="contact_data_div">

                    <span className="contact_data1">Fax</span>
                    <span className="contact_data2">support@multikart.com</span>
                </div>

            </div>
            

        </div>
    )
}