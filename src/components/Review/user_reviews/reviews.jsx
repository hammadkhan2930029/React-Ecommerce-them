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
            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
        {
            image: AppImages.owner2,

            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
        {
            image: AppImages.owner3,

            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
        {
            image: AppImages.owner1,

            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
        {
            image: AppImages.owner4,

            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
        {
            image: AppImages.owner1,

            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
        {
            image: AppImages.owner2,

            author: "Mark Jecno",
            date: "(12 January 2018 at 1:30AM)",
            content: "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
            likes: 14,
            dislike: 2
        },
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