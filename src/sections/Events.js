import React, { useRef, useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import arrow icons
import { FiSearch } from "react-icons/fi"; // Importing the search icon from react-icons
import Events_image from "../assets/Events.png";
import UpcomingEventsImage from "../assets/Group 1473.jpg"; // Replace with the correct path to your image

const Events = () => {
  const scrollContainerRef = useRef(null); // Reference for the scrollable container
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // Default to April 2025

  // Function to generate the calendar days for the current month
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the current month

    // Create an array to hold all days of the calendar
    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(""); // Empty cells for days before the first day of the month
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i); // Add each day of the current month
    }

    // Highlight only in April (month 3) and specific dates (2, 11, 21 in April)
    const highlightedDates = currentDate.getMonth() === 3 ? [2, 11, 21] : []; // Only highlight for April

    return { daysArray, highlightedDates };
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // Days of the week
  const { daysArray, highlightedDates } = generateCalendar(); // Get the calendar days for the current month

  // Function to handle navigation to the previous month
  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Function to handle navigation to the next month
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <section className="w-full max-w-[1920px] h-[819px] bg-f7f7f7 mx-auto flex items-center justify-center">
      <div className="w-full max-w-[1489px] h-[597px] mx-auto mt-[100px] relative bg-white">
        {/* Outer Container */}
        <div className="w-full h-full bg-white-200 rounded-lg flex justify-center items-center">
          {/* Inner Container */}
          <div className="w-[1372px] h-[492px] bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Events List */}
              <div className="w-full lg:w-[879px] h-[468px] overflow-y-auto rounded-[20px] bg-white-100 p-4 custom-scrollbar">
                {[...Array(10)].map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-col sm:flex-row gap-6 mb-6">
                    {[...Array(2)].map((_, cardIndex) => (
                      <div
                        key={cardIndex}
                        className="w-full sm:w-[393px] h-[140px] rounded-[20px] shadow-md relative"
                      >
                        <img
                          src={Events_image}
                          alt={`Card ${rowIndex + 1}`}
                          className="w-full h-full object-cover rounded-[10px]"
                        />
                        <div className="absolute inset-0 p-4 text-white">
                          <span className="font-poppins font-semibold text-[16px]">
                            MRS Fall Meeting & Exhibit
                          </span>
                          <span className="font-poppins font-normal text-[14px] block mt-1">
                            Venue: Hynes Convention Center and adj. Sheraton Boston Hotel
                          </span>
                          <span className="font-poppins font-bold text-[14px] block mt-1">
                            01-06 December 2024
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Upcoming Events and Calendar */}
              {/* Right Container - Upcoming Events & Calendar */}
    <div className="w-full lg:w-[440px] flex flex-col">
      {/* Upcoming Events Header */}
      <div
        className="flex items-center justify-between rounded-[10px] p-4 mb-2"
        style={{
          backgroundImage: `url(${UpcomingEventsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="font-poppins font-semibold text-[24px] text-white">
          Upcoming Events
        </span>
        <FiSearch className="text-white w-6 h-6" />
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-[20px] p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-black text-white rounded-lg p-2" onClick={handlePreviousMonth}>
            <AiOutlineLeft size={20} />
          </button>
          <span className="font-poppins font-medium text-[20px]">
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </span>
          <button className="bg-black text-white rounded-lg p-2" onClick={handleNextMonth}>
            <AiOutlineRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-gray-700">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-poppins font-normal text-[18px]">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-gray-700 mt-4">
          {daysArray.map((day, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${highlightedDates.includes(day) ? "bg-blue-500 text-white" : ""}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
