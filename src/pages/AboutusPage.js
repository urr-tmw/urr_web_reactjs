import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@fontsource/montserrat/600.css";
import { getAboutUsOverview, getAboutUsCards } from "../utils/apiService";
import Footer from "../components/Footer";

const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [overviewData, setOverviewData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [overviewError, setOverviewError] = useState(false);
  const [cardsError, setCardsError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const activeCardFromURL = parseInt(queryParams.get("activeCard")) || 0;

    if (activeCardFromURL) {
      setActiveCard(activeCardFromURL);
      setTimeout(() => {
        const overviewSection = document.getElementById("overview-section");
        if (overviewSection) {
          overviewSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const overview = await getAboutUsOverview();
        setOverviewData(overview);
      } catch (error) {
        console.error("Error fetching overview data:", error);
        setOverviewError(true);
      }

      try {
        const cards = await getAboutUsCards();
        setCardsData(cards);
      } catch (error) {
        console.error("Error fetching cards data:", error);
        setCardsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Overview Section */}
      {overviewError ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-2xl font-semibold">
            Loading overview<span className="animate-pulse">...</span>
          </div>
        </div>
      ) : (
        <div
          id="overview-section"
          className="relative flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            width: "100%",
            maxWidth: "1032px",
            top: "30px",
            marginBottom: "100px", // Added margin to prevent overlap
          }}
        >
          {/* Grid with 2 columns for small/medium screens and 4 columns for large screens */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {overviewData.map((item, index) => (
              <div
                key={item.id}
                className="w-full sm:w-[228px] h-[255.05px] rounded-lg flex flex-col items-center group p-4 relative"
                onClick={() => setActiveCard(index + 1)}
              >
                {/* Active Card Indicator */}
                {activeCard === index + 1 && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "245px",
                      height: "5.6px",
                      borderRadius: "120px",
                      background:
                        "linear-gradient(90deg, rgba(255, 255, 255, 0) 15%, rgba(45, 76, 249, 0.7) 50%, rgba(255, 255, 255, 0) 85%)",
                    }}
                  ></div>
                )}

                {/* GIF Image */}
                <div className="relative w-[100px] h-[100px] mt-4 mb-2 flex justify-center">
                  <img
                    src={item.gif}
                    alt={item.title}
                    className="object-contain group-hover:hidden transition-opacity duration-300 ease-in-out"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <img
                    src={item.hoverGif}
                    alt={`${item.title} Hover`}
                    className="object-contain hidden group-hover:block transition-opacity duration-300 ease-in-out"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>

                {/* Heading */}
                <h2
                  className="text-center mb-2"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "32px",
                  }}
                >
                  {item.title}
                </h2>

                {/* Paragraph */}
                <p
                  className="text-center mb-4" // Added mb-4 for 16px margin-bottom
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

{/* Cards Section */}
{cardsError ? (
  <div className="flex justify-center items-center h-screen">
    <div className="text-2xl font-semibold">
      Loading cards<span className="animate-pulse">...</span>
    </div>
  </div>
) : (
  <div className="container flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {cardsData
      .filter((card, index) => index + 1 === activeCard)
      .map((card) => (
        <div
          key={card.id}
          className="w-[1327.81px] flex flex-col lg:flex-row items-center justify-center bg-[#ffffff] rounded-[30px] lg:rounded-[50px] p-4 sm:p-8 gap-4 sm:gap-8 group" // Responsive border radius for main container
        >
          {/* Text on Left */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center text-left p-4 sm:p-6 rounded">
            {/* Title */}
            <h2
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                lineHeight: "48.76px",
                letterSpacing: "0%",
              }}
              className="text-[28px] sm:text-[28px] lg:text-[40px] mb-4" // Responsive font size
            >
              {card.title}
            </h2>
            {/* Description */}
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                lineHeight: "26.82px",
                letterSpacing: "2%",
              }}
              className="text-[15px] sm:text-[15px] lg:text-[22px]" // Responsive font size
            >
              {card.description}
            </p>
          </div>
          {/* Image on Right */}
          <div className="w-full lg:w-[40%] h-auto sm:h-[300px] rounded-[30px] lg:rounded-[50px] overflow-hidden"> {/* Responsive border radius for image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-[519.81px] h-[311.25px] object-cover rounded-[30px] lg:rounded-[59.25px] transform transition-all duration-500 ease-in-out group-hover:scale-150" // Responsive border radius for image
            />
          </div>
        </div>
      ))}
  </div>
)}
      {/* Footer */}
      <div className="relative w-full mt-[-1200px] z-10">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;