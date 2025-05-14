import React, { useEffect, useState } from "react";
import { Header } from "../../../header/header";
import { Footer } from "../../../Footer/footer";
import { useLocation, useNavigate } from 'react-router-dom';
import './detailPage.css'; // Import the new CSS file
import { Blogs_details_Breadcrumb } from "../blogsDetailBreadCrumbs/blogs_details_breadCrumbs";

export const Blog_details_page = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="blog-detail-container">
        <p>Blog not found. <span className="go-back" onClick={() => navigate('/')}>Go Back</span></p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Blogs_details_Breadcrumb />

      <div className="blog-detail-container">
        <div className="blog-banner">
          <img src={state.image} alt={state.title} className="blog-banner-img" />
        </div>
        <div className="blog-detail-content">
          <h1 className="blog-title-1">{state.title}</h1>
          <div className="blog-meta">
            <span className="meta-item">🗓 {state.date}</span>
            <span className="meta-item">👤 {state.author}</span>
          </div>
          <p className="blog-description">{state.description}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};
