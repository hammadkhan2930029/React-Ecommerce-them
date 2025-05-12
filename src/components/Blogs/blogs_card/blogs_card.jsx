import React from "react";
import './blogs_card.css'
import { AppImages } from "../../../constants/AppImages";
import { useNavigate } from "react-router-dom";



export const Blogs_card = () => {



    const navigate = useNavigate()
    const handleCardClick = (item) => {
        navigate(`/blogs_details_page`, { state: item });
    };
    // -------------------------------------------
    const blogPosts = [
        {
            img: AppImages.img1,
            title: "Elevate Your Space: The Art of Stylish Furnishing!",
            date: "07 May 2024 09:45 AM"
        },
        {
            img: AppImages.img2,

            title: "Wardrobe Wonders: Unraveling the Enigma of Fashion",
            date: "06 May 2024 10:09 AM"
        },
        {
            img: AppImages.img3,

            title: "The Art and Science of Web Design: Trends, Tips, and Techniques",
            date: "20 Jun 2024 04:05 PM"
        },
        {
            img: AppImages.img2,

            title: "The Art of Blogging: Mastering Your Voice and Audience Engagement",
            date: "20 Jun 2024 04:01 PM"
        }
    ];
    // ---------------------------------------------------------------------------
    const blogPosts2 = [
        {
            id:1,
            image: AppImages.img2,
            title: "Elevate Your Space: The Art Of Stylish Furnishing!",
            date: "07 May 2024",
            author: "admin",
            pin: 'pin',
            description: `Discover how top-quality furniture transforms your home into a space of comfort and class. From solid wood to timeless design and ergonomic comfort, learn why investing in well-crafted pieces is a smart, sustainable decision for your home and lifestyle.`
        },
        {
            id:2,

            image: AppImages.img2,
            title: "Wardrobe Wonders: Unraveling the Enigma of Fashion",
            date: "06 May 2024",
            author: "admin",
            description: `Dive into the dynamic world of fashion and understand how your wardrobe reflects your personality. Explore the evolution of clothing trends, must-have essentials, and how to create versatile, stylish outfits that make a statement.`
        },
        {
            id:3,

            image: AppImages.img2,
            title: "The Art and Science of Web Design: Trends, Tips, and Techniques",
            date: "20 Jun 2024",
            author: "admin",
            description: `Web design is more than just visuals—it's about user experience, accessibility, and storytelling. Explore the latest trends, proven layout techniques, and essential tools that empower you to create captivating websites.`
        },
        {
            id:4,

            image: AppImages.img2,
            title: "The Art of Blogging: Mastering Your Voice and Audience Engagement",
            date: "20 Jun 2024",
            author: "admin",
            description: `Great blogging is about more than writing—it's about connection. Learn how to develop a unique voice, build trust with readers, and write content that drives engagement and encourages return visits.`
        },
        {
            id:5,

            image: AppImages.img2,
            title: "Elevate Your Space: The Art Of Stylish Furnishing!",
            date: "07 May 2024",
            author: "admin",
            description: `From plush sofas to elegant accent chairs, elevate your interiors with furnishings that blend comfort and style. This guide covers timeless aesthetics, craftsmanship, and how to create harmonious living spaces.`
        },
        {
            id:6,

            image: AppImages.img2,
            title: "Wardrobe Wonders: Unraveling the Enigma of Fashion",
            date: "06 May 2024",
            author: "admin",
            description: `Fashion isn't just about clothes—it's an art form. Decode fabric types, explore fashion cycles, and discover tips to craft a wardrobe that blends individuality with lasting style.`
        },
        {
            id:7,

            image: AppImages.img2,
            title: "The Art and Science of Web Design: Trends, Tips, and Techniques",
            date: "20 Jun 2024",
            author: "admin",
            description: `Stay ahead in the digital space by mastering web design fundamentals. This post covers responsive design, visual hierarchy, typography trends, and how to design with your users in mind.`
        },
        {
            id:8,

            image: AppImages.img2,
            title: "The Art of Blogging: Mastering Your Voice and Audience Engagement",
            date: "20 Jun 2024",
            author: "admin",
            description: `Build a loyal readership with compelling content. Learn how to structure posts for clarity, write with authenticity, and use feedback to grow a meaningful blogging presence.`
        }
    ];



    return (
        <div className="blogs_main">
            <div className="blogs_left">
                <div className="recent_blogs">
                    <div className="recent_blog_h1">
                        <span>Recent Blog</span>
                    </div>
                    {blogPosts.map((item, index) => (
                        <div className="recent_blog_data">
                            <div className="recent_blog_img_div">

                                <img src={item.img} className="recent_blog_img" />
                            </div>
                            <div className="recent_blogs_text">
                                <span className="recent_date">{item.date}</span>
                                <span className="title">{item.title}</span>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className="blogs_right">
                {blogPosts2.map((item, index) => (
                    <div className="blog-card" key={item.id} onClick={()=> handleCardClick(item)}>
                        <div className="image-container">
                            <img src={AppImages.img1} alt={item.title} />
                            {item.pin === 'pin' ? (<div className="pin-icon">📌</div>) : null}
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">{item.title}</h3>
                            <div className="blog-meta">
                                <span className="blog-date">🕒 {item.date}</span>
                                <span className="blog-author">👤 {item.author}</span>
                            </div>
                            <a href="#" className="read-more">
                                Read More <span className="arrow">↗</span>
                            </a>
                        </div>
                    </div>

                ))}


            </div>

        </div>
    )
}