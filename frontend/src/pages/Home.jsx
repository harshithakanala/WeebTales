import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestBlogs";
import FeaturedBlogs from "../components/FeaturedBlog";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div className="p-4 lg:p-8 bg-gray-50 min-h-screen">
      <Hero />
      <div>
        <LatestCollection />
        <FeaturedBlogs />
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Home;
