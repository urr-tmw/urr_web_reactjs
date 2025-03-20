import React from 'react';

const Enquire = () => {
  return (
    <div className="w-[695px] h-[695px] bg-white rounded-[34.47px]">
      {/* Inner Container (603.34x580.92) */}
      <div className="w-[603.34px] h-[580.92px] mt-[57px] ml-[46px] mr-[45.66px] mb-[57.08px]">
        {/* Text Container (602.3x48) */}
        <div className="w-[602.3px] h-[48px]">
          <h2 className="text-2xl font-bold mb-6">Get In Touch With Us</h2>
        </div>

        <form className="space-y-6">
  {/* Name and Email Section (36px from top) */}
  <div className="flex flex-col sm:flex-row gap-[26.6px] mt-[36px]">
    {/* Name with Dropdown */}
    <div className="flex border border-gray-600 rounded-md overflow-hidden w-[288px] h-[49.88px]">
      <select
        className="p-2 bg-transparent text-black border-r border-gray-600 outline-none placeholder-gray-400"
        style={{
          fontFamily: "Evolve Sans, sans-serif",
          fontWeight: "400",
          fontSize: "24px",
        }}
      >
        <option>Mr.</option>
        <option>Mrs.</option>
        <option>Ms.</option>
        <option>Dr.</option>
        <option>Prof.</option>
        <option>Other.</option>
      </select>
      <input
        type="text"
        id="name"
        placeholder="Full Name *"
        className="w-full p-2 bg-transparent focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
        style={{
          width: "calc(100% - 50px)",
          height: "100%",
          fontFamily: "Evolve Sans, sans-serif",
          fontWeight: "400",
          fontSize: "24px",
        }}
      />
    </div>
    {/* Email Input */}
    <input
      type="email"
      id="email"
      placeholder="E-Mail ID *"
      className="border border-gray-600 rounded-md bg-transparent focus:ring-blue-500 focus:border-blue-500 w-[288px] h-[49.88px] pl-[5px] placeholder-gray-400"
      style={{
        fontFamily: "Evolve Sans, sans-serif",
        fontWeight: "400",
        fontSize: "24px",
      }}
    />
  </div>

  {/* Contact Number and Location (26.6px below Name/Email) */}
  <div className="flex flex-col sm:flex-row gap-[26.6px]">
    <input
      type="tel"
      id="contact"
      placeholder="Contact Number *"
      className="border border-gray-600 rounded-md bg-transparent focus:ring-blue-500 focus:border-blue-500 w-[288px] h-[49.88px] pl-[5px] placeholder-gray-400"
      style={{
        fontFamily: "MADE Evolve Sans, sans-serif",
        fontWeight: "400",
        fontSize: "25.05px",
      }}
    />
    <select
      id="location"
      className="border border-gray-600 rounded-md bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 w-[288px] h-[49.88px] placeholder-gray-400"
      style={{
        fontFamily: "MADE Evolve Sans, sans-serif",
        fontWeight: "400",
        fontSize: "25.05px",
      }}
    >
      <option value="" disabled selected>
        Country *
      </option>
      {/* Country options here */}
    </select>
  </div>

  {/* Full Shipping Address (26.1px below Contact/Location) */}
  <div className="border border-black rounded-md p-4 w-[598px] h-[102px] mt-[26.1px]">
    <textarea
      rows="3"
      placeholder="Full Shipping Address *"
      className="w-full h-[80px] bg-transparent text-black placeholder-gray-400 focus:outline-none resize-none"
      style={{
        fontFamily: "MADE Evolve Sans, sans-serif",
        fontWeight: "400",
        fontSize: "25.05px",
      }}
    />
  </div>

  {/* Subject Field (26.1px below Shipping Address) */}
  <div className="border border-black rounded-md p-4 w-[598px] h-[124px] mt-[26.1px]">
    <h3 className="text-2xl font-medium text-black mb-1">Subject</h3>
    <hr className="border-black mb-2" />
    <textarea
      rows="3"
      placeholder="Message"
      className="w-full h-[80px] bg-transparent text-black placeholder-gray-400 focus:outline-none resize-none"
      style={{
        fontFamily: "MADE Evolve Sans, sans-serif",
        fontWeight: "400",
        fontSize: "25.05px",
      }}
    />
  </div>

  {/* Submit Button (41.88px below Subject, right-aligned) */}
  <div className="text-right mt-[41.88px]">
    <button
      type="submit"
      className="px-6 py-2 bg-[#080D19] text-white rounded-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-400"
    >
      Submit
    </button>
  </div>
</form> 
      </div>
    </div>
  );
};

export default Enquire;