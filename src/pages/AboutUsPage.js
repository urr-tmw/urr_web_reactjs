import React from 'react';
import Footer from '../components/Footer';
import AboutUsCards from '../sections/AboutUsCards';
import AboutUsOverview from '../sections/AboutUsOverview';
export const AboutUs = () => {

    return (
        <div>

            <AboutUsOverview/>
            <AboutUsCards/>

            
            <div className="relative w-full">
                <Footer />
            </div>
        </div>
  );
};
export default AboutUs