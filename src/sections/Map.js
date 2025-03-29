import React from 'react'
import map1 from "../assets/map1.png";
import map2 from "../assets/map2.png";
import map3 from "../assets/map3.png";
import map4 from "../assets/map4.png";
const Map = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  {/* Heading */}
  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#000000] text-center mb-8 font-['Inter'] leading-[100%] tracking-[2%]">
  Locate Us: Your Path to Connection
</h1>

  {/* Main container for maps */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex w-full max-w-[1526px] mt-10 justify-center rounded-[34px]">
    
    {/* First Container - New York */}
    <div className="relative w-full sm:w-[379.5px] h-[623.82px] bg-gray-300 overflow-hidden  group z-20">
      <img
        src={map1}
        alt="New York"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39159.109573401875!2d-73.94305989757885!3d40.748034888835214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe551dddd5%3A0xfd37c59c866f0bf0!2s20%20W%2047th%20St%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sin!4v1737525697613!5m2!1sen!2sin"
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13891.475803960717!2d4.422377884130393!3d51.2211687589833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f70248f91e35%3A0xe21d5f8f66bdf7f7!2sHoveniersstraat%2030%2C%202018%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2sin!4v1737531299854!5m2!1sen!2sin"
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65513.997339580834!2d72.8494965026992!3d19.05529389976061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9db48bcc7d1%3A0x52c692071ad14131!2sBharat%20Diamond%20Bourse%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1737533157052!5m2!1sen!2sin"
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45767.062111414336!2d114.14905244953104!3d22.301261489578394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ee11ec960b%3A0x80157f716f784006!2sMEIKON%20HK!5e0!3m2!1sen!2sin!4v1743049335490!5m2!1sen!2sin"
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
