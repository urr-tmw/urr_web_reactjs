import React from 'react';

const Customized = () => {
  return (
    <div className="w-[1441px] h-[649px] absolute top-[800px] left-[239px] right-[239px] bg-gray-100 flex justify-center items-center">
      {/* Title Container */}
      <div className="absolute top-[82.5px] left-[62px] right-[942px] w-[437px] h-[32px] flex items-center">
        <h1 className="font-dm-serif font-normal text-[35px]">
          Need Customized Products?
        </h1>
      </div>

      {/* Left Container */}
      <div className="w-[659px] h-[562px] bg-white"></div>

      {/* Space between Containers */}
      <div className="w-[31px]"></div>

      {/* Right Container */}
      <div className="w-[660px] h-[565px] bg-white"></div>
    </div>
  );
};

export default Customized;