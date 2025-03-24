import React, { useState, useEffect, useRef } from 'react';

const Enquire = ({ onClose }) => {
  const modalRef = useRef(null);

  // Handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="w-full max-w-[695px] bg-white rounded-[34.47px] p-6 overflow-auto">
        {/* Inner Container */}
        <div className="w-full max-w-[603.34px] mx-auto">
          {/* Text Container */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Get In Touch With Us</h2>
          </div>

          <form className="space-y-6">
            {/* Name and Email Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Name with Dropdown */}
              <div className="flex border border-gray-600 rounded-md overflow-hidden w-full sm:w-[288px] h-[49.88px]">
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
                className="border border-gray-600 rounded-md bg-transparent focus:ring-blue-500 focus:border-blue-500 w-full sm:w-[288px] h-[49.88px] pl-[5px] placeholder-gray-400"
                style={{
                  fontFamily: "Evolve Sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
              />
            </div>

            {/* Contact Number and Location */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                id="contact"
                placeholder="Contact Number *"
                className="border border-gray-600 rounded-md bg-transparent focus:ring-blue-500 focus:border-blue-500 w-full sm:w-[288px] h-[49.88px] pl-[5px] placeholder-gray-400"
                style={{
                  fontFamily: "MADE Evolve Sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "25.05px",
                }}
              />
              <select
                id="location"
                className="border border-gray-600 rounded-md bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 w-full sm:w-[288px] h-[49.88px] placeholder-gray-400"
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

            {/* Full Shipping Address */}
            <div className="border border-black rounded-md p-4 w-full h-[102px]">
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

            {/* Subject Field */}
            <div className="border border-black rounded-md p-4 w-full h-[124px]">
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

            {/* Submit Button */}
            <div className="text-right">
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
    </div>
  );
};

export default Enquire;