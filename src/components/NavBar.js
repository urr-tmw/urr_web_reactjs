import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import Enquire from "./Enquire";

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const location = useLocation();
  
    const openModal = () => setModalOpen(true); // Function to open the modal
    const closeModal = () => setModalOpen(false); // Function to close the modal
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeModal(); // Close modal when clicking outside
      }
    };
  
    return (
      <>
        <header className="fixed top-0 left-0 right-0 w-full max-w-[1422px] mx-auto h-[83px] mt-[10px] rounded-[41.26px] bg-white flex items-center justify-between shadow-lg px-4 md:px-8 lg:px-16 z-50 relative">
        
          
        

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
  
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-end">
            <div className="w-[70%] bg-white h-full p-6">
              <button
                className="text-gray-700 hover:text-black focus:outline-none mb-6"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="space-y-4 text-gray-700">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Products", path: "/products" },
                  { name: "Contact Us", path: "/map" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="hover:text-white cursor-pointer hover:bg-black transition rounded-[10px] px-4 py-2"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className="w-full h-[53px] bg-blue-600 text-white rounded-[41.26px] hover:bg-black transition"
                    onClick={() => {
                      openModal();
                      toggleMobileMenu();
                    }}
                  >
                    Enquire Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
  
        {/* Modal for Enquire Form */}
        {isModalOpen && (
          <div
            className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleClickOutside}
          >
            <div className="modal-content bg-white rounded-[34.47px] p-6">
              <Enquire /> {/* Render the Enquire form as it is */}
            </div>
          </div>
        )}
  
        {/* Content padding */}
        <div className="pt-[83px]" />
      </>
    );
  };
  
  export default Navbar;