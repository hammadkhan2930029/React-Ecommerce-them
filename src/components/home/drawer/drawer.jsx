import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import './drawer.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppImages } from '../../../constants/AppImages';



export default function LeftDrawer({ open, onClose }) {

  // const [isClick, setIsClick] = useState(false)
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  const menuData = {
    Clothing: {
      "Women's Fashion": [
        "Dresses",
        "Skirts",
        "Western Wear",
        "Ethnic Wear",
        "Sportswear",
        "Tops & Tunics",
      ],
      "Men's Fashion": [
        "T-Shirts",
        "Formal Shirts",
        "Jeans",
        "Western Wear",
        "Ethnic Wear",
        "Blazers",
      ],
      Accessories: [
        "Fashion Jewellery",
        "Caps & Hats",
        "Necklaces",
        "Earrings",
        "Wrist Watches",
        "Belts",
        "Ties",
        "Cufflinks",
        "Pocket Squares",
      ],
    },
    Bags: [
      "Handbags",
      "Backpacks",
      "Tote Bags",
      "Laptop Bags",
      "Travel Bags",
      "Clutches",
    ],
    Footwear: ["Sneakers", "Loafers", "Heels", "Flats", "Sandals", "Boots"],
    Watches: [
      "Digital Watches",
      "Analog Watches",
      "Smart Watches",
      "Luxury Watches",
      "Casual Watches",
    ],
    Accessories: [
      "Sunglasses",
      "Wallets",
      "Scarves",
      "Gloves",
      "Hair Accessories",
      "Keychains",
    ],
    "House Of Design": [
      "Designer Sarees",
      "Luxury Pret",
      "Bridal Wear",
      "Custom Tailoring",
      "Handcrafted Accessories",
    ],
    "Beauty & Personal Care": [
      "Skincare",
      "Haircare",
      "Makeup",
      "Fragrances",
      "Bath & Body",
      "Grooming Kits",
    ],
    "Home & Decor": [
      "Cushions & Throws",
      "Wall Art",
      "Lamps & Lighting",
      "Curtains & Blinds",
      "Rugs & Carpets",
      "Vases & Planters",
    ],
    Kitchen: [
      "Cookware",
      "Bakeware",
      "Kitchen Tools",
      "Storage Containers",
      "Dinnerware",
      "Appliances",
    ],
  };


  return (
    <div>


      <Drawer anchor="left" open={open} onClose={onClose}>
        <div className='user_profile_div'>
          <img src={AppImages.owner1} className='drawerImg'/>
          <div style={{display:'flex',flexDirection:'column',padding:10}}>
            <span style={{color:"#333",fontSize:18,fontWeight:700}}>Jhone wick</span>
            <span style={{color:"#333",fontSize:14}}>jhonWick123@gmail.com</span>

          </div>
        </div>

        <div className="menu-container">
          {Object.entries(menuData).map(([mainCategory, subCategories]) => (
            <div key={mainCategory}>
              <div className='drawer_items' onClick={() => {
                toggleCategory(mainCategory)
              }}>
                <h1
                  className="menu-category"

                >
                  {mainCategory}
                </h1>
                {openCategory === mainCategory ? (
                  <KeyboardArrowDownIcon style={{ color: '#000' }} />
                ) : (
                  <KeyboardArrowRightIcon />
                )}


              </div>


              {openCategory === mainCategory && (
                <div className="subcategories">
                  {typeof subCategories === "object" && !Array.isArray(subCategories) ? (
                    Object.entries(subCategories).map(([subCategory, items]) => (
                      <div key={subCategory}>
                        <h4 className="subcategory-title">{subCategory}</h4>
                        <ul className="subcategory-list">
                          {items.map((item, idx) => (
                            <li
                              className='list_li'
                              key={idx}
                              onClick={() => {
                                setOpenCategory(null);
                                onClose();
                              }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="subcategory-list">
                      {subCategories.map((item, idx) => (
                        <li
                          className='list_li'
                          key={idx}
                          onClick={() => {
                            setOpenCategory(null);
                            onClose();
                          }} >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
