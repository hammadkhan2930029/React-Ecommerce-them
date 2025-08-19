import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const CategoryDropdownTwo = ({ onNavigate }) => {
    const [selected, setSelected] = useState(null);


    const [anchorEl, setAnchorEl] = useState(null);          // Main menu anchor
    const [subAnchorEl, setSubAnchorEl] = useState(null);    // Submenu anchor
    const [subSubAnchorEl, setSubSubAnchorEl] = useState(null); // Sub-submenu anchor

    const [submenuItems, setSubmenuItems] = useState([]);      // Submenu items
    const [subSubmenuItems, setSubSubmenuItems] = useState([]);// Sub-submenu items
    // -----------------------------------------------------------

    const categories = [
        {
            id: 'clothing',
            title: "Clothing",
            sub: [
                {
                    id: 'womens-fashion',
                    title: "Women's Fashion",
                    sub: [
                        { id: 'dresses', title: "Dresses" },
                        { id: 'skirts', title: "Skirts" },
                        { id: 'western-wear', title: "Western Wear" },
                        { id: 'ethnic-wear', title: "Ethnic Wear" },
                        { id: 'sportswear', title: "Sportswear" },
                        { id: 'tops-tunics', title: "Tops & Tunics" }
                    ]
                },
                {
                    id: 'mens-fashion',
                    title: "Men's Fashion",
                    sub: [
                        { id: 't-shirts', title: "T-Shirts" },
                        { id: 'formal-shirts', title: "Formal Shirts" },
                        { id: 'jeans', title: "Jeans" },
                        { id: 'western-wear-men', title: "Western Wear" },
                        { id: 'ethnic-wear-men', title: "Ethnic Wear" },
                        { id: 'blazers', title: "Blazers" }
                    ]
                },
                {
                    id: 'accessories-clothing',
                    title: "Accessories",
                    sub: [
                        { id: 'fashion-jewellery', title: "Fashion Jewellery" },
                        { id: 'caps-hats', title: "Caps & Hats" },
                        { id: 'necklaces', title: "Necklaces" },
                        { id: 'earrings', title: "Earrings" },
                        { id: 'wrist-watches', title: "Wrist Watches" },
                        { id: 'belts', title: "Belts" },
                        { id: 'ties', title: "Ties" },
                        { id: 'cufflinks', title: "Cufflinks" },
                        { id: 'pocket-squares', title: "Pocket Squares" }
                    ]
                }
            ]
        },
        {
            id: 'bags',
            title: "Bags",
            sub: [
                { id: 'handbags', title: "Handbags" },
                { id: 'backpacks', title: "Backpacks" },
                { id: 'tote-bags', title: "Tote Bags" },
                { id: 'laptop-bags', title: "Laptop Bags" },
                { id: 'travel-bags', title: "Travel Bags" },
                { id: 'clutches', title: "Clutches" }
            ]
        },
        {
            id: 'footwear',
            title: "Footwear",
            sub: [
                { id: 'sneakers', title: "Sneakers" },
                { id: 'loafers', title: "Loafers" },
                { id: 'heels', title: "Heels" },
                { id: 'flats', title: "Flats" },
                { id: 'sandals', title: "Sandals" },
                { id: 'boots', title: "Boots" }
            ]
        },
        {
            id: 'watches',
            title: "Watches",
            sub: [
                { id: 'digital-watches', title: "Digital Watches" },
                { id: 'analog-watches', title: "Analog Watches" },
                { id: 'smart-watches', title: "Smart Watches" },
                { id: 'luxury-watches', title: "Luxury Watches" },
                { id: 'casual-watches', title: "Casual Watches" }
            ]
        },
        {
            id: 'accessories',
            title: "Accessories",
            sub: [
                { id: 'sunglasses', title: "Sunglasses" },
                { id: 'wallets', title: "Wallets" },
                { id: 'scarves', title: "Scarves" },
                { id: 'gloves', title: "Gloves" },
                { id: 'hair-accessories', title: "Hair Accessories" },
                { id: 'keychains', title: "Keychains" }
            ]
        },
        {
            id: 'house-of-design',
            title: "House Of Design",
            sub: [
                { id: 'designer-sarees', title: "Designer Sarees" },
                { id: 'luxury-pret', title: "Luxury Pret" },
                { id: 'bridal-wear', title: "Bridal Wear" },
                { id: 'custom-tailoring', title: "Custom Tailoring" },
                { id: 'handcrafted-accessories', title: "Handcrafted Accessories" }
            ]
        },
        {
            id: 'beauty-personal-care',
            title: "Beauty & Personal Care",
            sub: [
                { id: 'skincare', title: "Skincare" },
                { id: 'haircare', title: "Haircare" },
                { id: 'makeup', title: "Makeup" },
                { id: 'fragrances', title: "Fragrances" },
                { id: 'bath-body', title: "Bath & Body" },
                { id: 'grooming-kits', title: "Grooming Kits" }
            ]
        },
        {
            id: 'home-decor',
            title: "Home & Decor",
            sub: [
                { id: 'cushions-throws', title: "Cushions & Throws" },
                { id: 'wall-art', title: "Wall Art" },
                { id: 'lamps-lighting', title: "Lamps & Lighting" },
                { id: 'curtains-blinds', title: "Curtains & Blinds" },
                { id: 'rugs-carpets', title: "Rugs & Carpets" },
                { id: 'vases-planters', title: "Vases & Planters" }
            ]
        },
        {
            id: 'kitchen',
            title: "Kitchen",
            sub: [
                { id: 'cookware', title: "Cookware" },
                { id: 'bakeware', title: "Bakeware" },
                { id: 'kitchen-tools', title: "Kitchen Tools" },
                { id: 'storage-containers', title: "Storage Containers" },
                { id: 'dinnerware', title: "Dinnerware" },
                { id: 'appliances', title: "Appliances" }
            ]
        }
    ];


    // Open main menu
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setSubAnchorEl(null);
        setSubSubAnchorEl(null);
    };

    // Close everything
    const handleClose = () => {
        setAnchorEl(null);
        setSubAnchorEl(null);
        setSubSubAnchorEl(null);
    };

    // When main menu item clicked, open submenu if exists, else navigate
    const handleCategoryClick = (event, category) => {
        console.log('category', category.id);
        setSelected(category.id);
        console.log('selected:', selected);

        if (category.sub && category.sub.length > 0) {
            setSubmenuItems(category.sub);
            setSubAnchorEl(event.currentTarget);
            setSubSubAnchorEl(null);
        } else {
            onNavigate(category.title);
            handleClose();
        }
    };
    useEffect(() => {
        console.log("Updated selected:", selected);
    }, [selected]);


    // When submenu item clicked, open sub-submenu if exists, else navigate
    const handleSubCategoryClick = (event, item) => {


        if (typeof item === 'object' && item.sub && item.sub.length > 0) {
            setSubSubmenuItems(item.sub);
            setSubSubAnchorEl(event.currentTarget);
        } else if (typeof item === 'string') {
            onNavigate(item);
            handleClose();
        }
    };

    // When sub-submenu item clicked, navigate
    const handleSubSubCategoryClick = (item) => {
        onNavigate(item);
        handleClose();
    };
    return (
        <div>
            <div onClick={handleOpen} style={{
                backgroundColor: '#ffff',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '10px',
                borderRadius: '10px',
              
                justifyContent: 'space-between',
                // boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',

            }}>

                <span style={{
                    color: 'var(--text-dark-color)',
                    fontSize: '18px',
                    padding: '10px 5px',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif,poppins',
                    fontWeight: '500'
                }}>
                    Category
                </span>
                <KeyboardArrowRightIcon sx={{color:'var(--icons-color)'}}/>
            </div>


            {/* Main Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {categories.map((cat) => (
                    <MenuItem
                        key={cat.id}
                        onClick={(e) => handleCategoryClick(e, cat)}
                        sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: selected === cat.id ? '#c10037' : '#fff', color: selected === cat.id ? '#fff' : '#000' }}
                    >
                        {cat.title}
                        {cat.sub && <KeyboardArrowRightIcon />}
                    </MenuItem>
                ))}
            </Menu>

            {/* Sub Menu */}
            <Menu
                anchorEl={subAnchorEl}
                open={Boolean(subAnchorEl)}
                onClose={() => setSubAnchorEl(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {submenuItems.map((item, index) => (
                    <MenuItem
                        key={typeof item === 'string' ? item : item.title || index}
                        onClick={(e) => handleSubCategoryClick(e, item)}
                    >
                        {typeof item === 'string' ? item : item.title}
                    </MenuItem>
                ))}
            </Menu>

            {/* Sub-Sub Menu */}
            <Menu
                anchorEl={subSubAnchorEl}
                open={Boolean(subSubAnchorEl)}
                onClose={() => setSubSubAnchorEl(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >

                {subSubmenuItems.map((item, index) => (
                    <MenuItem
                        key={item.id || item.title || index}
                        onClick={() => handleSubSubCategoryClick(item.title)}
                    >
                        {item.title}
                    </MenuItem>
                ))}

            </Menu>
        </div >
    );
};

