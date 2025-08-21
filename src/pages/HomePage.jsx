import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedDishes from '../components/Home/FeaturedDishes';
import Testimonials from '../components/Home/Testimonials';
import Newsletter from '../components/Home/Newsletter';
import '../styles/components/home.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;