import React from 'react';
import Banner from '../sections/Banner';
import AboutUs from '../sections/AboutUs';
import Products from '../sections/Products';
import News from '../sections/News';
import Events from '../sections/Events';
import ContactUs from '../sections/ContactUs';
import Footer from '../components/Footer';
const Home = () => {
    return (
      <div className="font-sans">

        <Banner />

        <AboutUs />
        <div className="mb-120px"></div>
        <Products/>

        <News/>

        <Events/>

        <ContactUs/>

        
      <div style={{ marginTop: '-1300px' }}>
        <Footer />
      </div>

      </div>
      
    );
  };
  
  export default Home;