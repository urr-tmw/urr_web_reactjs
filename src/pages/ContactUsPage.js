import React from 'react';
import ContactUs from '../sections/ContactUs';
import Map from '../sections/Map';
import Footer from '../components/Footer';
function ContactUsPage() {
  return (
    <div>
      <ContactUs/>
      
      <Map/>
    {/* <ContactUs /> */}



    <div style={{ marginTop: '-1300px' }}>
        <Footer />
      </div>
    </div>
  );
}
export default ContactUsPage;