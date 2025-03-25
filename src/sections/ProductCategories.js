

import React, { useState, useEffect } from "react";

import { getCategories, getCategoryById } from "../utils/apiService"; // Import the functions
import SelectedProduct from "../components/SelectedProduct";
import CustomizedProductForm from "../components/CustomizedProductForm"
const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isCustomized, setIsCustomized] = useState(false); // Track customized selection

    const handleCardClick = (category) => {
        if (category.title === "Customized") {
            setIsCustomized(true);
            setSelectedCategory(null); // Ensure SelectedProduct doesn't render
        } else {
            setIsCustomized(false);
            setSelectedCategory(category);
        }
    };
    // Ensure scrolling only happens AFTER the component renders
    useEffect(() => {
        if (selectedCategory || isCustomized) {
            setTimeout(() => {
                const element = document.getElementById("selected-product");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Small delay to ensure rendering before scrolling
        }
    }, [selectedCategory, isCustomized]); // Runs only when state updates

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories_data = await getCategories(); // actual API URL
                console.log("Fetched categories:", categories_data);
                setCategories(categories_data); // Assuming the response is an array of categories
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []); // Empty dependency array to run only once on mount
    

    return (
        <>
    <section className="border-4 border-red-600 relative h-[427px] text-black my-2 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden ">


            {/* "Products" Title */}
            <div className="border-4 border-black-600 text-center font-montserrat font-semibold mt-[5px] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Our Products
            </div>

     
            {/* Cards Container */}
            <div className="border-4 border-blue-600 text-center font-montserrat font-semibold mt-[5px] 
                grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-[10px] place-items-center h-[327px] p-0">
                    
                
                {/* Card 1 */}
                {/* Mapping through API data */}
                {categories.map((category, index) => (
                    <div key={index} 
                    onClick={() => handleCardClick(category)}// Set selected category on click
                    className="border-4 border-red-900 p-4 flex flex-col items-center text-center rounded-lg 
                        w-[113.75px] h-[109.55px] sm:w-[113.75px] sm:h-[109.55px] 
                        md:w-[113.75px] md:h-[109.55px] 
                        lg:w-[244.35px] lg:h-[296.65px] xl:w-[244.35px] xl:h-[296.65px] 2xl:w-[244.35px] 2xl:h-[296.65px]">
                        
                        <img src={category.image} alt={category.title} 
                            className="border-4 border-purple-400 w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-24 lg:h-24 object-cover rounded-full " />
                        
                        <h2 className=" text-xs sm:text-xs md:text-xs lg:text-lg font-semibold">
                            {category.title}
                        
                        </h2>
                        
                        <p className="text-[8px] sm:text-[8px] md:text-[8px] lg:text-sm text-gray-600">
                            {category.description}
                        </p>
                    </div>
                ))}


            
            </div>
           


            <div className="border-4 border-black-600 h-[31px] mt-[5px] " >
                <p>
                    Indicatior
                </p>
            </div>






    </section>


            {/* Add an ID to the container for scrolling */}
            <div id="selected-product">
                {isCustomized ? <CustomizedProductForm /> : <SelectedProduct selectedCategory={selectedCategory} />}
            </div>

    </>
    )
}

export default ProductCategories
