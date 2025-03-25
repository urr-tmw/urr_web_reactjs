import React from 'react';
import imageSrc from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="text-white py-0  w-full relative bg-[#080D19] mt-[1300px] overflow-hidden">
      {/* Top Container with #F7F7F7 color */}
      <div className="bg-[#F7F7F7] h-[50px] rounded-b-[100px] border-0 w-full absolute top-0 left-0"></div>

      {/* Footer Content */}
      <div className=" mt-[0px] container mx-auto px-2 pt-[100px] pb-0 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Section 1: Logo */}
        <div className="w-[320px] h-[186px] flex flex-col items-center md:items-start">
          <div className="text-center md:text-left">
            <img src={imageSrc} alt="Footer Logo" className="w-[190px] h-[63.34px]" />
            <h1 className="mt-3 text-[25.52px] font-montserrat font-semibold">
              Urr Manufacturing LLP
            </h1>
          </div>
        </div>

        {/* Section 2: Explore Links and Blog */}
        <div className="w-[402px] h-[234px] flex flex-row gap-[60px] items-center justify-center md:items-start">
          {/* Explore Links */}
          <div className="text-left space-y-4 w-1/2 ">
          <h3 className="text-lg font-semibold mb-2 font-inter">Explore Links</h3>
          <ul className="space-y-4 px-0 font-inter font-normal text-[21.48px] leading-[100%] tracking-[0%]">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/map" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

          {/* Blog */}
          <div className="text-left w-1/2 space-y-4">
          <h3 className="text-lg  font-semibold mb-2 font-inter">Blog</h3>
          <ul className="space-y-4 px-0 font-inter font-normal text-[21.48px] leading-[100%] tracking-[0%]">
            <li><a href="/blog1" className="">Blog1</a></li>
            <li><a href="/blog2" className="">Blog2</a></li>
            <li><a href="/blog3" className="">Blog3</a></li>
            <li><a href="/blog4" className="">Blog4</a></li>
          </ul>
        </div>
        </div>

        {/* Section 3: Contact Info - Now properly left-aligned on larger screens */}
      <div className="w-[435px] md:w-[435px] min-h-[150px] text-left ">
        <div className="max-w-[435px] mx-auto md:mx-0 space-y-4">
          <h3 className="text-lg  font-semibold mb-2 font-inter">Contact Us</h3>
          <ul className="text-white space-y-4 pl-[0px] font-inter font-normal text-[21.48px] leading-[100%] tracking-[0%]">
            <li className="mb-2">Call us: +1 (646) 699 3270</li>
            <li>Email: umangp@urrmanufacturing.com</li>
          </ul>
        </div>
      </div>
      </div>

      {/* White Line and Copyright Text */}
      <div className="w-full px-4 mt-6">
      <div className="border-t w-full" style={{ borderColor: "rgba(255, 255, 255, 0.22)" }}></div>
        <p className="text-center text-sm mt-4">
          © 2024 URR Manufacturing Designed by URR
        </p>
      </div>
    </footer>
  );
};

export default Footer;