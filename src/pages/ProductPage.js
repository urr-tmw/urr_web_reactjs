import React, { useState, useEffect } from "react";
import bannerImage from "../assets/pro_banner.png";
import Footer from "../components/Footer";
import { getCategories, getCategoryById } from "../utils/apiService"; // Import the functions
// Import the components for each category
import Single_Crystal from "../pages/Single_crystal";
import Gem_Jewelry from "../pages/Gem_jewellery";
import Customized from "../pages/Customized";

const Product_page = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null); // State to track selected card
    const [categoriesError, setCategoriesError] = useState(false); // State to track categories API error

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories(); // Use the imported function
                console.log("Fetched categories:", data);

                // Filter out the "Dimond vs Silicon" category
                const filteredCategories = data.filter(
                    (category) => category.title !== "Dimond vs Silicon"
                );
                setCategories(filteredCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setCategoriesError(true); // Set error state to true if fetching fails
            }
        };

        fetchCategories();
    }, []);

    const handleCardClick = (category) => {
        console.log(category.id);
        setSelectedCard(category); // Set the clicked category as the selected one
    };

    // Function to return the corresponding component based on the selected card
    const renderSelectedContent = () => {
        switch (selectedCard?.title) {
            case "Single Crystal":
                return <Single_Crystal />;
            case "Gem & Jwellery":
                return <Gem_Jewelry />;
            case "Customized":
                return <Customized />;
            default:
                return <p>Please select a category.</p>;
        }
    };

    return (
        <div>
            <section className="h-[263px] relative text-white py-30 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 flex justify-center">
                    <img
                        src={bannerImage}
                        alt="Banner"
                        className="w-[1362px] h-[263px] object-cover rounded-[30px] md:rounded-[45px]"
                    />
                </div>

                {/* Banner Content */}
                <div className="absolute top-[75px] left-4 md:left-[50px] lg:left-[100px] xl:left-[150px] 2xl:left-[300px] z-10 text-left w-[90%] max-w-[528px]">
                    <p className="font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-[0%] break-words">
                        See how URR can Put a Impact on the whole Semiconductor Market
                    </p>
                </div>
            </section>
     {/* "Products" Title */}
<div className="text-center font-montserrat text-[36px] font-semibold mt-[20px]">
  Our Products
</div>

{/* Cards */}
{categoriesError ? (
  <div className="flex justify-center items-center h-[200px]">
    <div className="text-2xl font-semibold">
      Loading products<span className="animate-pulse">...</span>
    </div>
  </div>
) : (
  <div className="mt-10 mx-auto w-full max-w-[1220.39px] h-auto grid grid-cols-3 gap-5">
    {categories.length > 0 ? (
      categories.map((category, index) => {
        const backgroundColor = index % 2 === 0 ? "white" : "#E0E0E1";

        return (
          <div
            key={category.id}
            onClick={() => handleCardClick(category)}
            className="w-full max-w-[286px] h-auto sm:h-[318px] rounded-[20.27px] flex flex-col items-center cursor-pointer group transition-all duration-300 relative"
            style={{ backgroundColor }}
          >
            <div className="relative w-full h-[160px] flex items-center justify-center">
              <img
                src={category.image}
                alt={category.title}
                className="absolute max-w-[80%] sm:max-w-full h-auto object-contain"
              />
            </div>
            <h2 className="font-montserrat font-medium text-[27px] leading-[32.91px] text-center">
              {category.title}
            </h2>
            <p className="font-inter font-normal text-[17.46px] leading-[21.13px] text-center mt-3 sm:mt-[31px] mx-2 sm:mx-4">
              {category.description || "No description available."}
            </p>

            {/* Active Indicator */}
            {selectedCard?.id === category.id && (
              <div
                className="w-[245px] h-[7px] rounded-[120px] bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute top-[350.65px] left-1/2 transform -translate-x-1/2"
              />
            )}
          </div>
        );
      })
    ) : (
      <p className="text-center w-full text-lg mt-10">No products available.</p>
    )}
  </div>
)}
            {/* Display the selected card's content */}
            {selectedCard && (
                <div className="mt-10 w-full h-auto p-5">
                    {renderSelectedContent()}
                </div>
            )}

            {/* Footer */}
            <div className="relative w-full mt-[-1260px] z-10">
                <Footer />
            </div>
        </div>
    );
};

export default Product_page;