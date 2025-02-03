import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestBlogs';
import BestSeller from '../components/FeaturedBlog';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsletterBox />
    </div>
  );
};

export default Home;
