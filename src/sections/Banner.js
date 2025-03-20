// src/pages/Banner.js

import React from 'react';
import imageSrc from '../assets/homebanner.jpg';
const Banner = () => {
  return (
    <section className="relative text-white py-20 text-center mx-8">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center " >
      <img
          src={imageSrc}
          alt="Banner"
          className="w-full h-full object-cover rounded-[30px] md:rounded-[79.65px]"
        />
      </div>

      {/* Banner Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to Our Amazing Website
        </h1>
        <p className="mt-4 mx-8 text-xl md:text-2xl">
          Discover the endless possibilities with our services and products.
          Others who use this device won’t see your activity, so you can browse more privately. This won't change how data is collected by websites you visit and the services they use, including Google. Downloads, bookmarks and reading list items will be saved. Learn more
        </p>

        {/* Call to Action Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
