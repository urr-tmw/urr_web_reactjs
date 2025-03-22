// src/pages/Banner.js

import React from "react";
import imageSrc from "../assets/homebanner.jpg";
const Banner = () => {
  return (
  <section className="relative  text-white  ">
  {/* Background Image Container */}
    {/* <div className="relative box-border size-32 max-w-[1489px] w-full h-auto mx-auto ">
      <img
        src={imageSrc}
        alt="Banner"
        className="w-full h-auto max-h-[597px] object-cover rounded-[30px] md:rounded-[79.65px]"
      />

      Banner Content - Positioned on the Left Inside the Image
      <div className="absolute left-[8%] top-[35%] w-[80%] sm:w-[600px] md:w-[788.49px] text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          URR Manufacturing
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Discover the future of material innovation with us
        </p>
      </div>
    </div> */}
    
  </section>



  );
};

export default Banner;
