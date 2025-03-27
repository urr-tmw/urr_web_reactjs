import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import Enquire from "./Enquire";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>


      {/* Container with max width 1920px and height 120px */}
      {/* <div className="w-full max-w-[1920px] h-[120px] mx-auto sticky top-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#F7F7F7] from-[75%] to-transparent to-[100%]"></div> */}
      <div className="w-full max-w-[1920px] h-[120px] mx-auto sticky top-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#F7F7F7] from-[75%] to-transparent to-[100%]">
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-black bg-opacity-50">
            {/* Side Menu Container */}
            <div
              className="fixed top-[40px] left-[20px] right-[20px] w-[calc(100%-40px)] h-[367px] bg-white rounded-[24px] flex flex-col items-center z-[70]"
              style={{
                maxWidth: "360px",
                margin: "0 auto",
              }}
            >
              {/* Close Button */}
              <button
                className="absolute top-[22px] right-[22px] hover:text-gray-200 focus:outline-none p-2 rounded-full"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6 text-red" // Ensure the icon is white for contrast
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>





              {/* About Us Container */}
              <div
                className="w-[148px] h-[53px] mt-[32px] ml-[34px] mr-[178px] flex items-center justify-center bg-white rounded-[10px]"
              >
                <Link
                  to="/about"
                  className="text-blue-600 hover:text-white hover:bg-blue-600 transition rounded-[10px] px-4 py-2"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '22.83px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
              </div>

              {/* Products Container */}
              <div
                className="w-[148px] h-[53px] mt-[28px] ml-[34px] mr-[178px] flex items-center justify-center bg-white rounded-[10px]"
              >
                <Link
                  to="/productuspage"
                  className="text-blue-600 hover:text-white hover:bg-blue-600 transition rounded-[10px] px-4 py-2"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '22.83px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                  onClick={toggleMobileMenu}
                >
                  Products
                </Link>
              </div>

              {/* Contact Us Container */}
              <div
                className="w-[166px] h-[53px] mt-[28px] ml-[34px] mr-[160px] flex items-center justify-center bg-white rounded-[10px]"
              >
                <Link
                  to="/contactuspage"
                  className="text-blue-600 hover:text-white hover:bg-blue-600 transition rounded-[10px] px-4 py-2"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '22.83px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </div>

              {/* Enquire Now Button */}
              <button
                className="w-[201px] h-[53px] mt-[28px] ml-[34px] mr-[134px] rounded-[41.26px] transition"
                style={{
                  backgroundColor: '#2D4CF9',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '25.83px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#FFFFFF',
                  animation: 'dissolve 300ms ease-in',
                }}
                onClick={() => {
                  openModal();
                  toggleMobileMenu();
                }}
              >
                Enquire Now
              </button>
            </div>
          
          
          
          
          </div>
        )}
        <header className="sticky top-0 w-full max-w-[1422px] mx-auto h-[83px] mt-[34px] rounded-[41.26px] bg-white flex items-center justify-between shadow-lg px-4 md:px-8 mx-5 lg:px-16 z-50">
          {/* Logo */}
          <div className="w-[117px] h-[48.27px] flex items-center relative">
            <Link to="/" className="relative">
              <img
                src={logo}
                alt="Logo"
                className="max-w-full max-h-full object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center relative">
            <ul className="flex space-x-6 text-gray-700 text-sm md:text-base lg:text-lg whitespace-nowrap relative">
              {[
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/productuspage" },
                { name: "Contact Us", path: "/contactuspage" },
              ].map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    to={item.path}
                    className="hover:text-white cursor-pointer hover:bg-black transition rounded-[10px] px-4 py-2 relative"
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <div
                        className="absolute bg-[#2D4cf9] w-[20px] h-[4px] rounded-[120px]"
                        style={{
                          top: "150%",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-black focus:outline-none"
              aria-label="Open Navigation Menu"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Enquire Button */}
          <div className="hidden md:flex">
            <button
              className="w-[150px] md:w-[201px] h-[53px] md:h-[53px] bg-blue-600 text-white rounded-[41.26px] hover:bg-black transition"
              onClick={openModal}
            >
              Enquire Now
            </button>
          </div>
        </header>
      </div>



     {/* Modal for Enquire Form */}
      {isModalOpen && (
        <div
          className="modal-overlay fixed inset-0 z-[3000] flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <Enquire onClose={closeModal} />
        </div>
      )}
      {/* Content padding to prevent overlap */}
      <div className="pt-[40px]" />
    </>
  );
};

export default Navbar;