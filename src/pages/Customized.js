import React from 'react';

const titleOptions = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "Other"];
const Customized = () => {
  return (
    <div className="mt-[35px] w-full bg-white rounded-lg mx-auto p-4 shadow-md
      md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-20
      md:mt-[50px] lg:mt-[60px] xl:mt-[70px] 2xl:mt-[80px]
      md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px]">
      {/* Title */}
      <h2 className="text-xl font-bold text-black mb-4
        md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl
        md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
        Need Customized Product?
      </h2>
      
      {/* Single Column Form for Mobile */}
      <form className="space-y-4
        md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-8">
        {/* Title + Name */}
        <div className="flex border border-gray-600 rounded-md overflow-hidden
          md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]">
          <select className="p-3 bg-transparent text-black border-r border-gray-600 outline-none text-sm w-1/4
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
            {titleOptions.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Full Name*"
            className="w-3/4 p-3 bg-transparent text-black placeholder-black focus:outline-none text-sm
              md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
          />
        </div>
        
        {/* Email */}
        <input
          type="email"
          placeholder="Email ID*"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Contact Number */}
        <input
          type="tel"
          placeholder="Contact Number*"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name*"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Country */}
        <input
          type="text"
          placeholder="Country*"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* City */}
        <input
          type="text"
          placeholder="City*"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Shipping Address */}
        <textarea
          rows="3"
          placeholder="Full Shipping Address*"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[110px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Diamond Type Dropdown */}
        <select className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black focus:outline-none text-sm
          md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
          md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
          <option value="">Which Type Of Diamond?*</option>
        </select>
        
        {/* Select Type Dropdown */}
        <select className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black focus:outline-none text-sm
          md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
          md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
          <option value="">Select Type*</option>
        </select>
        
        {/* Quantity Dropdown */}
        <select className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black focus:outline-none text-sm
          md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
          md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
          <option value="">Quantity*</option>
        </select>
        
        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Message */}
        <textarea
          rows="3"
          placeholder="Message"
          className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-black placeholder-black focus:outline-none text-sm
            md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[110px]
            md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
        />
        
        {/* Submit Button */}
        <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 text-sm
          md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[65px]
          md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Customized;