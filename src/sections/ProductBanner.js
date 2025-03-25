import React from 'react';
import bannerImage from "../assets/pro_banner.png";

const ProductBanner = () => {
  return (

    <section className="border-4 border-red-600 relative h-[263px] text-white py-30 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden">
    {/* Background Image */}
        <div className="absolute inset-0 flex justify-center">
            <img
                src={bannerImage}
                alt="Banner"
                className="w-[1362px] h-[263px] object-cover rounded-[30px] md:rounded-[45px]"
            />
        </div>

        {/* Banner Content */}
        <div className="absolute top-[75px] left-4 md:left-[50px] lg:left-[100px] xl:left-[150px] 2xl:left-[300px] z-10 text-left w-[90%] max-w-[528px]">
            <p className="font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-[0%] break-words">
                See how URR can Put a Impact on the whole Semiconductor Market
            </p>
        </div>
    </section>
  )
}

export default ProductBanner