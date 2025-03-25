import React from 'react'
import map1 from "../assets/map1.png";
import map2 from "../assets/map2.png";
import map3 from "../assets/map3.png";
import map4 from "../assets/map4.png";
const Map = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

  {/* Main container for maps */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex w-full max-w-[1526px] mt-20 gap-4 justify-center">
    
    {/* First Container - New York */}
    <div className="relative w-full sm:w-[379.5px] h-[623.82px] bg-gray-300 overflow-hidden rounded-md group z-20">
      <img
        src={map1}
        alt="New York"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      <iframe
        src="https://www.google.com/maps/embed?...NewYork"
        className="absolute top-0 left-0 w-full h-full border-0 transition-transform duration-300 opacity-0 hover:opacity-100 hover:scale-110"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="absolute left-[35%] top-[47%] w-4 h-4 bg-red-600 rounded-full transform transition-transform duration-300 scale-0 hover:scale-150">
        <span className="absolute left-6 -top-6 bg-white text-black px-2 py-1 rounded shadow-lg text-sm">
          20W St 47th St, New York 10036, USA
        </span>
      </div>
    </div>

    {/* Second Container - Antwerp */}
    <div className="relative w-full sm:w-[379.5px] h-[623.82px] bg-gray-300 overflow-hidden rounded-md group z-20">
      <img
        src={map2}
        alt="Antwerp"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      <iframe
        src="https://www.google.com/maps/embed?...Antwerp"
        className="absolute top-0 left-0 w-full h-full border-0 transition-transform duration-300 opacity-0 hover:opacity-100 hover:scale-110"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="absolute left-[35%] top-[55%] w-4 h-4 bg-red-600 rounded-full transform transition-transform duration-300 scale-0 hover:scale-150">
        <span className="absolute left-6 -top-6 bg-white text-black px-2 py-1 rounded shadow-lg text-sm">
          Hoveneeirstrat 30 2018, Antwerp
        </span>
      </div>
    </div>

    {/* Third Container - Mumbai */}
    <div className="relative w-full sm:w-[379.5px] h-[623.82px] bg-gray-300 overflow-hidden rounded-md group z-20">
      <img
        src={map3}
        alt="Mumbai"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      <iframe
        src="https://www.google.com/maps/embed?...Mumbai"
        className="absolute top-0 left-0 w-full h-full border-0 transition-transform duration-300 opacity-0 hover:opacity-100 hover:scale-110"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="absolute left-[32%] top-[45%] w-4 h-4 bg-red-600 rounded-full transform transition-transform duration-300 scale-0 hover:scale-150">
        <span className="absolute left-6 -top-6 bg-white text-black px-2 py-1 rounded shadow-lg text-sm">
          Bharat Diamond BKC
        </span>
      </div>
    </div>

    {/* Fourth Container - Hong Kong */}
    <div className="relative w-full sm:w-[379.5px] h-[623.82px] bg-gray-300 overflow-hidden rounded-md group z-20">
      <img
        src={map4}
        alt="Hong Kong"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      <iframe
        src="https://www.google.com/maps/embed?...HongKong"
        className="absolute top-0 left-0 w-full h-full border-0 transition-transform duration-300 opacity-0 hover:opacity-100 hover:scale-110"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="absolute left-[40%] top-[40%] w-4 h-4 bg-red-600 rounded-full transform transition-transform duration-300 scale-0 hover:scale-150">
        <span className="absolute left-6 -top-6 bg-white text-black px-2 py-1 rounded shadow-lg text-sm">
          Hong Kong Island
        </span>
      </div>
    </div>

  </div>
</div>

  )
}

export default Map
