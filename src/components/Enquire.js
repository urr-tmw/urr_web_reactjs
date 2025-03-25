import React from "react";

const Enquire = ({ onClose }) => {
  return (
    <div className="w-full max-w-[695px] bg-white rounded-[34.47px] p-4 sm:p-6 lg:p-8 relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
      >
        &times;
      </button>

      {/* Inner Container */}
      <div className="w-full max-w-[603.34px] mx-auto">
        {/* Text Container */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">Get In Touch With Us</h2>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name and Email Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Name with Dropdown */}
            <div className="flex border border-gray-600 rounded-md overflow-hidden w-full sm:w-[288px] h-[50px]">
              <select
                className="p-2 bg-transparent text-black border-r border-gray-600 outline-none"
                style={{
                  fontFamily: "Evolve Sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
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
                placeholder="Full Name *"
                className="w-full p-2 bg-transparent outline-none"
              />
            </div>
            {/* Email Input */}
            <input
              type="email"
              placeholder="E-Mail ID *"
              className="border border-gray-600 rounded-md bg-transparent w-full sm:w-[288px] h-[50px] pl-2"
            />
          </div>

          {/* Contact & Location */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="tel"
              placeholder="Contact Number *"
              className="border border-gray-600 rounded-md bg-transparent w-full sm:w-[288px] h-[50px] pl-2"
            />
            <select className="border border-gray-600 rounded-md bg-transparent text-black w-full sm:w-[288px] h-[50px]">
              <option value="" disabled selected>
                Country *
              </option>
            </select>
          </div>

          {/* Address */}
          <div className="border border-black rounded-md p-4 w-full h-[100px]">
            <textarea
              rows="3"
              placeholder="Full Shipping Address *"
              className="w-full h-full bg-transparent text-black outline-none resize-none"
            />
          </div>

          {/* Subject Field */}
          <div className="border border-black rounded-md p-4 w-full h-[120px]">
            <h3 className="text-xl font-medium text-black mb-1">
              Subject
            </h3>
            <hr className="border-black mb-2" />
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full h-[80px] bg-transparent text-black outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right mt-6">
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