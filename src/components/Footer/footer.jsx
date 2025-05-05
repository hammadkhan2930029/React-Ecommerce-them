import React from "react";
import './footer.css';
import { AppImages } from "../../constants/AppImages";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { motion, useInView } from "framer-motion";

export const Footer = () => {

  const refOne = React.useRef(null);

  const inViewOne = useInView(refOne, { triggerOnce: false });
  // ------------------------------------
  const footerData = [
    {
      category: "Company Info",
      items: [
        { type: "text", label: "", logo: AppImages.logo },
        { type: "text", label: "Discover the latest trends and enjoy seamless shopping with our exclusive collections." },
        { type: "location", label: "R-5, Row-5, Block D, National Cement Employees Housing Society, Rashid Minhas Road, Karachi, Pakistan" },
        { type: "phone", label: "Call Us", value: "+92-331-9998780" },
        { type: "email", label: "Email Us", value: " info@foreeshop.com" },
      ]
    },
    {
      category: "Categories",
      items: [
        { type: "link", label: "Baby Essentials", href: "/collections/baby-essentials" },
        { type: "link", label: "Bag Emporium", href: "/collections/bag-emporium" },
        { type: "link", label: "Books", href: "/collections/books" },
        { type: "link", label: "Christmas", href: "/collections/christmas" },
        { type: "link", label: "Classic Furnishings", href: "/collections/classic-furnishings" },
        { type: "link", label: "Crystal Clarity Optics", href: "/collections/crystal-clarity-optics" },
      ]
    },
    {
      category: "Useful Links",
      items: [
        { type: "link", label: "Home", href: "/" },
        { type: "link", label: "Collections", href: "/collections" },
        { type: "link", label: "About Us", href: "/about" },
        { type: "link", label: "Blogs", href: "/blogs" },
        { type: "link", label: "Offers", href: "/offers" },
        { type: "link", label: "Search", href: "/search" },
      ]
    },
    {
      category: "Help Center",
      items: [
        { type: "link", label: "My Account", href: "/account" },
        { type: "link", label: "My Orders", href: "/orders" },
        { type: "link", label: "Track Order", href: "/track-order" },
        { type: "link", label: "Wishlist", href: "/wishlist" },
        { type: "link", label: "Faq's", href: "/faqs" },
        { type: "link", label: "Contact Us", href: "/contact" },
      ]
    },
    {
      category: "Newsletter",
      items: [
        { type: "text", label: "Follow Us" },
        { type: "text", label: "Never Miss Anything From Store By Signing Up To Our Newsletter." }
      ]
    }
  ];

  return (
    <footer className="footer">
      <motion.div className="footer_container"
        ref={refOne}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
        {footerData.map((section, index) => (
          <div className="footer-column" key={index}>
            <h3 className="h2">{section.category}</h3>
            <ul>
              {section.category === "Company Info" && (
                <li key="logo">
                  <img src={AppImages.logo} alt="logo" style={{ width: '80px', marginBottom: '10px' }} />
                </li>
              )}
              {section.items.map((item, i) => {
                if (item.type === "link") {
                  return <li key={i}><a href={item.href}>{item.label}</a></li>;
                } else if (item.type === "email") {
                  return <li key={i}><EmailIcon  className="footer_icons"/> <a href={`mailto:${item.value}`}>{item.label}: {item.value}</a></li>;
                } else if (item.type === "phone") {
                  return <li key={i}><CallIcon  className="footer_icons" /> <a href={`tel:${item.value}`}>{item.label}: {item.value}</a></li>;
                } else if (item.type === "location") {
                  return <li key={i}><LocationOnIcon  className="footer_icons" /> <a href={`tel:${item.value}`}>{item.label}: {item.value}</a></li>;
                } else {
                  return <li key={i}>{item.label}</li>;
                }
              })}
              {section.category === "Newsletter" && (
                <li key="newsletter-form" className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="newsletter-input"
                  />
                  <button className="newsletter-button">Subscribe</button>
                </li>
              )}
            </ul>


          </div>
        ))}
      </motion.div>
    </footer>
  );
};

