
import React from 'react';
import imageSrc from '../assets/homebanner.png';

const Banner = () => {
  return (
    <section className="relative text-white py-60 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden h-[726px]">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center">
          <img
            src={imageSrc}
            alt="Banner"
            className="w-full max-w-[1575.55px] h-[726px] object-cover rounded-[30px] md:rounded-[79.65px]"
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-left pl-4 md:pl-16 lg:pl-40">
          <h1 className="font-montserrat font-semibold text-[38px] sm:text-[8vw] md:text-[75.13px] leading-[1.1] tracking-[0%] break-words">
            URR Manufacturing
          </h1>
          <p className="mt-4 font-montserrat font-medium text-[23px] sm:text-[4.5vw] md:text-[37.92px] leading-[1.2] tracking-[0%] max-w-[606.51px]">

            Discover the future of material innovation with us
          </p>
        </div>
    </section>
  );
};

export default Banner;
