import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import './reviews.css';
import { AppImages } from "../../../constants/AppImages";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { motion, useInView } from "framer-motion";



export const Reviews = () => {


    const [like, setLike] = useState(1)
    const [dislike, setdisLike] = useState(1)


  const posts = [
    {
        image: AppImages.owner1,
        author: "Ayesha Ahmed",
        date: "(10 April 2025 at 3:20PM)",
        content: "The future of technology lies in how we adapt it for humanity’s benefit. Innovation without ethics is like a car without brakes.",
        likes: 34,
        dislike: 0
    },
    {
        image: AppImages.owner2,
        author: "Hassan Raza",
        date: "(22 March 2025 at 11:00AM)",
        content: "A healthy lifestyle begins with a balanced mind. Meditation and discipline are the cornerstones of long-term well-being.",
        likes: 18,
        dislike: 2
    },
    {
        image: AppImages.owner3,
        author: "Fatima Noor",
        date: "(8 February 2025 at 6:45AM)",
        content: "Reading a book a month changed my perspective on life. Knowledge builds confidence, and confidence builds success.",
        likes: 42,
        dislike: 3
    },
    {
        image: AppImages.owner1,
        author: "Zain Malik",
        date: "(16 January 2025 at 9:15PM)",
        content: "Every day is a new chance to improve yourself. Don't wait for the perfect moment—create it.",
        likes: 29,
        dislike: 1
    },
    {
        image: AppImages.owner4,
        author: "Mehak Shah",
        date: "(1 January 2025 at 8:10AM)",
        content: "Traveling opens the heart and mind like nothing else. It’s not just about seeing places—it’s about discovering yourself.",
        likes: 53,
        dislike: 4
    },
    {
        image: AppImages.owner1,
        author: "Ali Tufail",
        date: "(20 December 2024 at 5:30PM)",
        content: "If your dreams don’t scare you, they’re not big enough. Take risks, fail forward, and grow beyond your limits.",
        likes: 37,
        dislike: 2
    },
    {
        image: AppImages.owner2,
        author: "Nimra Shahid",
        date: "(10 December 2024 at 12:00PM)",
        content: "Kindness costs nothing but means everything. A small act can change someone’s entire day.",
        likes: 46,
        dislike: 1
    }
];

    const [postData, setPostData] = useState(posts)

    const handleLike = (index) => {
        const updatePosts = [...postData]
        updatePosts[index].likes += 1;
        setPostData(updatePosts)


    }
    const handleDislike = (index) => {
        const updatePosts = [...postData];
        updatePosts[index].dislike += 1;
        setPostData(updatePosts);
    };

    return (
        <div className="review">
            <div className="reviews_div">
                {postData.map((item, index) => (
                    <motion.div className="review_main" key={index}
                    >
                        <div className="review_img_div">
                            <Stack>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={item.image}
                                    sx={{ width: 66, height: 66 }}
                                />
                            </Stack>
                        </div>
                        <div className="review_text_area">
                            <div className="review_user_name">
                                <span className="user_name">{item.author}</span>
                                <span className="user_date">{item.date}</span>

                            </div>
                            <div>
                                <span className="user_description">
                                    {item.content}
                                </span>
                            </div>
                            <div className="user_like">
                                <div onClick={() => handleLike(index)}><ThumbUpIcon /> <span>({item.likes})</span></div>
                                <div onClick={() => handleDislike(index)} ><ThumbDownAltIcon /><span>({item.dislike})</span></div>

                            </div>

                        </div>
                    </motion.div>

                ))}
            </div>


        </div>
    )
}