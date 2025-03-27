import React, { useState, useEffect } from "react";
import { getCategories, getCategoryById } from "../utils/apiService";
import SelectedProduct from "../components/SelectedProduct";
import CustomizedProductForm from "../components/CustomizedProductForm"

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isCustomized, setIsCustomized] = useState(false);

    const handleCardClick = (category) => {
        if (category.title === "Customized") {
            setIsCustomized(true);
            setSelectedCategory(null);
        } else {
            setIsCustomized(false);
            setSelectedCategory(category);
        }
    };

    const handleCloseForm = () => {
        setIsCustomized(false);
    };

    useEffect(() => {
        if (selectedCategory || isCustomized) {
            setTimeout(() => {
                const element = document.getElementById("selected-product");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [selectedCategory, isCustomized]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories_data = await getCategories();
                console.log("Fetched categories:", categories_data);
                setCategories(categories_data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <>
            <section className="border-4 border-red-600 relative min-h-[427.65px] text-black my-2 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden">
                {/* "Products" Title */}
                <div className="border-4 border-black-600 text-center font-montserrat font-semibold mt-[5px] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    Our Products
                </div>

                {/* Main Cards Container - Responsive adjustments */}
                <div className="mt-4 sm:mt-6 md:mt-10 mx-auto w-full px-2 sm:px-4 md:px-0 md:w-[90%] lg:w-[895.04px] grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-[81px] justify-items-center">
                    {categories.length > 0 ? (
                        categories.map((category, index) => {
                            const backgroundColor = index % 2 === 0 ? "white" : "#E0E0E1";

                            // Responsive image size classes for mobile, tablet, and desktop
                            const imageSizeClasses = [
                                // First card
                                "w-[40px] h-[30px] xs:w-[50px] xs:h-[40px] sm:w-[60px] sm:h-[50px] md:w-[80px] md:h-[60px] lg:w-[100px] lg:h-[80px] xl:w-[111.96px] xl:h-[96px]",
                                // Second card
                                "w-[35px] h-[25px] xs:w-[45px] xs:h-[35px] sm:w-[55px] sm:h-[45px] md:w-[75px] md:h-[55px] lg:w-[95px] lg:h-[65px] xl:w-[111px] xl:h-[79px]",
                                // Third card
                                "w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] sm:w-[50px] sm:h-[50px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[74px] xl:h-[74px]"
                            ];

                            return (
                                <div
                                    key={category.id}
                                    onClick={() => handleCardClick(category)}
                                    className="w-full h-[80px] xs:h-[90px] sm:h-[110px] md:h-[150px] lg:h-[220px] xl:h-[296.65px] rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20.27px] flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 relative"
                                    style={{
                                        backgroundColor,
                                        width: "100%",
                                        minHeight: "80px"
                                    }}
                                >
                                    {/* Image container with responsive padding */}
                                    <div className="relative w-full h-[30px] xs:h-[40px] sm:h-[50px] md:h-[80px] lg:h-[120px] xl:h-[160px] flex items-center justify-center px-1">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className={`absolute object-contain max-w-[90%] max-h-[90%] ${imageSizeClasses[index]}`}
                                        />
                                    </div>

                                    {/* Title with responsive sizing and margin */}
                                    <h2 className="font-montserrat font-medium text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[27px] leading-tight text-center mt-0 xs:mt-1 sm:mt-2 md:mt-3 lg:mt-4 px-1">
                                        {category.title}
                                    </h2>

                                    {/* Description - hidden on mobile, visible on tablet+ */}
                                    <p className="hidden sm:block font-inter font-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17.46px] leading-snug text-center mt-1 sm:mt-2 md:mt-3 lg:mt-[15px] xl:mt-[31px] mx-1 sm:mx-2 md:mx-3 px-1">
                                        {category.description || "No description available."}
                                    </p>

                                    {/* Active Indicator */}
                                    
                                    {(selectedCategory?.id === category.id || (isCustomized && category.title === "Customized")) && (
                                        <div className="w-[70%] sm:w-[80%] md:w-[200px] lg:w-[245px] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] xl:h-[7px] rounded-[120px] bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute 
                    bottom-[-5px] 
                    sm:bottom-[-8px] 
                    md:bottom-[-12px] 
                    lg:bottom-[-15px] 
                    xl:bottom-[-20px]
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
            </section>

            <div id="selected-product">
                {isCustomized ? (
                    <CustomizedProductForm onClose={handleCloseForm} />
                ) : (
                    selectedCategory && <SelectedProduct selectedCategory={selectedCategory} />
                )}
            </div>
        </>
    )
}

export default ProductCategories