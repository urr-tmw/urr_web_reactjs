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
        <div className="font-sans">
            <section className="relative h-[263px] text-white py-30 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden">
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
            <div className="flex justify-center items-center h-[150px] sm:h-[200px]">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Loading products<span className="animate-pulse">...</span>
                </div>
            </div>
        ) : (
            <div className="mt-6 sm:mt-10 mx-auto w-full px-4 sm:px-6 md:px-0 md:w-[90%] lg:w-[895.04px] grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-[81px] justify-items-center">
            {categories.length > 0 ? (
                categories.map((category, index) => {
                    const backgroundColor = index % 2 === 0 ? "white" : "#E0E0E1";
                    
                    // Enhanced Tailwind classes for better tablet sizing
                    const imageSizeClasses = [
                        // First card - adjusted md sizes for tablet
                        "w-[50px] h-[40px] xs:w-[60px] xs:h-[50px] sm:w-[80px] sm:h-[60px] md:w-[100px] md:h-[80px] lg:w-[111.96px] lg:h-[96px]",
                        // Second card - adjusted md sizes for tablet
                        "w-[45px] h-[35px] xs:w-[55px] xs:h-[40px] sm:w-[75px] sm:h-[55px] md:w-[95px] md:h-[65px] lg:w-[111px] lg:h-[79px]",
                        // Third card - adjusted md sizes for tablet
                        "w-[35px] h-[35px] xs:w-[45px] xs:h-[45px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[74px] lg:h-[74px]"
                    ];

            return (
                <div
                    key={category.id}
                    onClick={() => handleCardClick(category)}
                    className="w-full h-[100px] sm:h-[120px] md:h-[200px] lg:h-[296.65px] rounded-[10px] sm:rounded-[15px] md:rounded-[20.27px] flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 relative"
                    style={{ 
                        backgroundColor,
                        width: "100%",
                        height: "auto",
                        minHeight: "100px"
                    }}
                >
                    <div className="relative w-full h-[40px] sm:h-[60px] md:h-[120px] lg:h-[160px] flex items-center justify-center">
                        <img
                            src={category.image}
                            alt={category.title}
                            className={`absolute object-contain max-w-[80%] ${imageSizeClasses[index]}`}
                        />
                    </div>
                    <h2 className="font-montserrat font-medium text-[12px] sm:text-[16px] md:text-[18px] lg:text-[27px] leading-normal text-center mt-1 md:mt-4">
                        {category.title}
                    </h2>
                    {/* Description hidden on mobile (s,m,l) */}
                    <p className="hidden md:block font-inter font-normal text-[14px] md:text-[15px] lg:text-[17.46px] leading-[21.13px] text-center mt-2 md:mt-4 lg:mt-[31px] mx-2 md:mx-4">
                        {category.description || "No description available."}
                    </p>

                    {/* Active Indicator - responsive positioning with proper margins */}
                    {selectedCard?.id === category.id && (
                        <div className="w-[80%] md:w-[245px] h-[3px] md:h-[5px] lg:h-[7px] rounded-[120px] bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute 
                            bottom-[-8px] 
                            sm:bottom-[-50px] 
                            md:bottom-[-20px] 
                            lg:top-[calc(100%+15px)] 
                            xl:top-[calc(100%+20px)] 
                            left-1/2 transform -translate-x-1/2" 
                        />
                    )}
                </div>
            );
        })
    ) : (
        <p className="text-center w-full text-sm sm:text-lg mt-6 sm:mt-10 col-span-3">No products available.</p>
    )}
</div>
)}
{/* Display the selected card's content */}
{selectedCard && (
    <div className="mt-6 sm:mt-10 w-full h-auto px-2 sm:px-5">
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