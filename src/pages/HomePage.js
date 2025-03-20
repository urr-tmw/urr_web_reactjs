import React from 'react';
import Banner from '../sections/Banner';
import AboutUs from '../sections/AboutUs';
import Products from '../sections/Products';
import News from '../sections/News';
import Events from '../sections/Events';
import ContactUs from '../sections/ContactUs';
const Home = () => {
    return (
      <div className="font-sans bg-gray-100">

        <Banner />

        <AboutUs />

        <Products />

        <News />

        <Events/>

        <ContactUs/>

      </div>
    );
  };
  
  export default Home;