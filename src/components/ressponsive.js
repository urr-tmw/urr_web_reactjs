import React from "react";



const LayoutWithTailwind = () => {
    return (
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-blue-500 text-white p-6 rounded-lg">Item 1</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-green-500 text-white p-6 rounded-lg">Item 2</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-red-500 text-white p-6 rounded-lg">Item 3</div>
        </div>
      </div>
    );
  };

export default LayoutWithTailwind


//  {/* Footer Content */}
//  <div className="container mx-auto px-4 pt-[150px] pb-[100px] flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
//  {/* Section 1: Logo */}
//  <div className="w-full md:w-auto flex justify-center md:justify-start">
//    <div className="w-[277px] h-[98px]">
//      <img src={imageSrc} alt="Footer Logo" className="w-full h-full" />
//    </div>
//  </div>

//  {/* Section 2: Explore Links */}
//  <div className="w-full md:w-auto text-center md:text-left">
//    <h3 className="text-lg font-semibold mb-4">Explore Links</h3>
//    <ul className="space-y-2">
//      <li><a href="/" className="hover:text-blue-400">Home</a></li>
//      <li><a href="/about" className="hover:text-blue-400">About us</a></li>
//      <li><a href="/products" className="hover:text-blue-400">Products</a></li>
//      <li><a href="/map" className="hover:text-blue-400">Contact us</a></li>
//    </ul>
//  </div>

//  {/* Section 3: Blog */}
//  <div className="w-full md:w-auto text-center md:text-left">
//    <h3 className="text-lg font-semibold mb-4">Blog</h3>
//    <ul className="space-y-2">
//      <li><a href="/blog1" className="hover:text-blue-400">Blog1</a></li>
//      <li><a href="/blog2" className="hover:text-blue-400">Blog2</a></li>
//      <li><a href="/blog3" className="hover:text-blue-400">Blog3</a></li>
//      <li><a href="/blog4" className="hover:text-blue-400">Blog4</a></li>
//    </ul>
//  </div>

//  {/* Section 4: Contact Info */}
//  <div className="w-full md:w-auto text-center md:text-left">
//    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
//    <ul className="text-white space-y-1">
//      <li>Call us: +1 (646) 699 3270</li>
//      <li>Email: umangp@urrmanufacturing.com</li>
//    </ul>
// </div>
// </div>


