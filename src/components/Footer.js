import React from 'react';
import imageSrc from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="text-white py-8 w-full relative bg-[#080D19] mt-[1300px] overflow-hidden">
      {/* Top Container with #F7F7F7 color */}
      <div className="bg-[#F7F7F7] h-[50px] rounded-b-[100px] border-0 w-full absolute top-0 left-0"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 pt-[80px] pb-10 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Section 1: Logo */}
        <div className="max-w-[320px] min-h-[150px] flex flex-col items-center md:items-start">
          <div className="text-center md:text-left">
            <img src={imageSrc} alt="Footer Logo" className="w-[190px] h-[63.34px]" />
            <h1 className="mt-3 text-[25.52px] font-montserrat font-semibold">
              Urr Manufacturing LLP
            </h1>
          </div>
        </div>

        {/* Section 2: Explore Links and Blog */}
        <div className="max-w-[402px] min-h-[150px] flex flex-row gap-[60px] items-center justify-center md:items-start">
          {/* Explore Links */}
          <div className="text-left w-1/2">
            <h3 className="text-lg font-semibold mb-2">Explore Links</h3>
            <ul className="space-y-2 px-0 text-sm">
              <li><a href="/" className="">Home</a></li>
              <li><a href="/about" className="">About us</a></li>
              <li><a href="/products" className="">Products</a></li>
              <li><a href="/map" className="">Contact us</a></li>
            </ul>
          </div>

          {/* Blog */}
          <div className="text-left w-1/2">
            <h3 className="text-lg font-semibold mb-2">Blog</h3>
            <ul className="space-y-2 px-0 text-sm">
              <li><a href="/blog1" className="">Blog1</a></li>
              <li><a href="/blog2" className="">Blog2</a></li>
              <li><a href="/blog3" className="">Blog3</a></li>
              <li><a href="/blog4" className="">Blog4</a></li>
            </ul>
          </div>
        </div>

        {/* Section 3: Contact Info */}
        <div className="md:w-[435px] text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-white space-y-1">
            <li>Call us: +1 (646) 699 3270</li>
            <li>Email: umangp@urrmanufacturing.com</li>
          </ul>
        </div>
      </div>

      {/* White Line and Copyright Text */}
      <div className="w-full px-4 mt-6">
        <div className="border-t border-white w-full"></div>
        <p className="text-center text-sm mt-2">
          © 2024 URR Manufacturing Designed by URR
        </p>
      </div>
    </footer>
  );
};

export default Footer;
