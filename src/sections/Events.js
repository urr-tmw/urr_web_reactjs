import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Events_image from "../assets/Events.png";
import UpcomingEventsImage from "../assets/Group 1473.jpg";

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1));

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = Array(firstDay)
      .fill("")
      .concat([...Array(daysInMonth).keys()].map((d) => d + 1));
    const highlightedDates = month === 3 ? [2, 11, 21] : [];
    return { daysArray, highlightedDates };
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { daysArray, highlightedDates } = generateCalendar();

  return (
    <section className="w-full max-w-[1920px] bg-f7f7f7 mx-auto flex flex-col items-center relative p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-center font-montserrat font-semibold text-[28px] sm:text-[32px] md:text-[40px] mb-4 sm:mb-6 md:mb-8">
        Events
      </h2>

      {/* Events Container */}
      <div className="w-full max-w-[1489px] mx-auto bg-white rounded-lg p-4 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Section: Events List */}
          <div className="w-full lg:w-[879px] h-auto max-h-[468px] overflow-y-auto rounded-[20px] bg-white-100 p-4 custom-scrollbar">
            {[...Array(10)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex flex-col sm:flex-row gap-4 mb-4">
                {[...Array(2)].map((_, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="w-full sm:w-[48%] rounded-[20px] shadow-md relative bg-[#121826] p-4"
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[10px]"></div>
                    <div className="relative text-white">
                      <span className="font-poppins font-semibold text-[14px] sm:text-[16px] block">
                        MRS Fall Meeting & Exhibit
                      </span>
                      <span className="block font-poppins font-normal text-[12px] sm:text-[14px] mt-1">
                        Venue: Hynes Convention Center and adj. Sheraton Boston Hotel
                      </span>
                      <span className="block font-poppins font-bold text-[12px] sm:text-[14px] mt-1">
                        01-06 December 2024
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Section: Upcoming Events & Calendar */}
          <div className="w-full lg:w-[440px] flex flex-col">
            <div
              className="flex items-center justify-between rounded-[10px] p-4 mb-2 bg-cover bg-center"
              style={{ backgroundImage: `url(${UpcomingEventsImage})` }}
            >
              <span className="font-poppins font-semibold text-[18px] sm:text-[24px] text-white">
                Upcoming Events
              </span>
              <FiSearch className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-[20px] p-4">
              <div className="flex justify-between items-center mb-4">
                <button className="bg-black text-white rounded-lg p-2">
                  <AiOutlineLeft size={20} />
                </button>
                <span className="font-poppins font-medium text-[16px] sm:text-[20px]">
                  {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
                </span>
                <button className="bg-black text-white rounded-lg p-2">
                  <AiOutlineRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-gray-700">
                {daysOfWeek.map((day) => (
                  <div key={day} className="font-poppins font-normal text-[14px] sm:text-[18px]">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-gray-700 mt-4">
                {daysArray.map((day, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
                      highlightedDates.includes(day) ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Events;
