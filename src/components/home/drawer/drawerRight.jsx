import React from 'react';
import Drawer from '@mui/material/Drawer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './drawerRight.css'
import { useNavigate } from 'react-router-dom';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PersonIcon from '@mui/icons-material/Person';

export default function RightDrawer({ open, onClose }) {
  const navigate = useNavigate()

  const menuItems = [
    { id: 1, title: "Home", path: '/home' },
    { id: 2, title: "Feature" },
    { id: 3, title: "Product" },
    { id: 4, title: "Shop" },
    { id: 5, title: "Blogs" },
    { id: 6, title: "About" },
    { id: 7, title: "Contact" },
    { id: 8, title: "Reviews" },


  ];
  const handleNavigate = (title) => {
    console.log(title)
    if (title.toLowerCase() === 'home') {

      navigate('/')
    }
    else if (title.toLowerCase() === 'blogs') {
      navigate('/blogs')
    }
    else if (title.toLowerCase() === 'about') {
      navigate('/aboutUs')
    }
    else if (title.toLowerCase() === 'contact') {
      navigate('/contactus')
    }
    else if (title.toLowerCase() === 'reviews') {
      navigate('/review')
    }
    else if (title.toLowerCase() === 'shop') {
      navigate('/shop')
    }

  }


  return (
    <div>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <div className='drawer_R_main'>

          <div className='drawer_right_main'>
            {menuItems.map((item, index) => (
              <div className='drawer_right' onClick={() => {
                handleNavigate(item.title)
              }}>
                <span className='right_drawer_item'>{item.title}</span>
                {item.title.toLowerCase() === 'reviews' ? <RateReviewIcon className='right_drawer_icon' /> :
                  <KeyboardArrowRightIcon className='right_drawer_icon' />
                }
              </div>
            ))}
          </div>
          <div className='right_drawer_login' onClick={()=>  navigate('/login')}>
            <PersonIcon/>
            <span>Register Now</span>

          </div>
        </div>


      </Drawer>
    </div>
  );
}
