import React from "react";

const SelectedProduct = ({ selectedCategory, selectedIndex }) => {
    // Determine the color pattern and layout based on selected category and index
    const getCardStyles = (index) => {
        if (selectedIndex === null) return { bgColor: 'bg-white', layout: 'default' };
        
        if (selectedCategory?.title === "Single Crystal") {
            return {
                bgColor: index % 2 !== 0 ? 'bg-[#E0E0E1]' : 'bg-white',
                layout: index % 2 !== 0 ? 'reverse' : 'default'
            };
        } else if (selectedCategory?.title === "Gem and Jewellery") {
            return {
                bgColor: index % 2 === 0 ? 'bg-[#E0E0E1]' : 'bg-white',
                layout: index % 2 === 0 ? 'default' : 'reverse'
            };
        }
        
        return {
            bgColor: index % 2 === 0 ? 'bg-[#E0E0E1]' : 'bg-white',
            layout: 'default'
        };
    };

    const cardStyles = getCardStyles(selectedIndex);

    return (
        <section 
            className={`border-4 border-green-600 min-h-[427px] text-black my-2 mx-4 md:mx-20 px-6 md:px-16 flex justify-center items-center overflow-hidden transition-opacity duration-500 ${
                selectedCategory ? "block" : "hidden"
            }`}
            id="selected-product"
        >
            {selectedCategory ? (
                <div className="flex justify-center items-center w-full">
                    {/* Main card container - centered properly */}
                    <div 
                        className={`border-4 border-red-600 flex flex-col sm:flex-row justify-between items-center rounded-[50px] w-full max-w-[1249.81px] min-h-[311.25px]  ${cardStyles.bgColor}`}
                    >
                        {/* Text container with automatic height adjustment */}
                        <div 
                            className={` w-full sm:w-[680px] min-h-[226px] flex flex-col justify-center p-4 ${
                                cardStyles.layout === 'reverse' ? 'sm:order-2' : 'sm:order-1'
                            }`}
                        >
                            {/* Title container with automatic height */}
                            <div className="w-full min-h-[49px] mb-4 flex items-center">
                                <h2 
                                    className="text-2xl sm:text-3xl font-bold break-words"
                                    style={{ 
                                        fontFamily: "Montserrat", 
                                        fontWeight: 600, 
                                        lineHeight: "1.2", 
                                        letterSpacing: "0%" 
                                    }}
                                >
                                    {selectedCategory.title}
                                </h2>
                            </div>
                            {/* Description with automatic height */}
                            <div className="flex-grow flex items-center">
                                <p 
                                    className="text-sm sm:text-base break-words"
                                    style={{ 
                                        fontFamily: "Montserrat", 
                                        fontWeight: 400, 
                                        lineHeight: "1.3", 
                                        letterSpacing: "2%" 
                                    }}
                                >
                                    {selectedCategory.description}
                                </p>
                            </div>
                        </div>

                        {/* Responsive image container with proper margins */}
                        <div 
                            className={`w-full sm:w-[519.81px] h-auto sm:h-[311.25px] aspect-[519.81/311.25] rounded-[50px] overflow-hidden mx-[39px] my-[28px] flex justify-center items-center ${
                                cardStyles.layout === 'reverse' ? 'sm:order-1' : 'sm:order-2'
                            }`}
                        >
                            <img
                                src={selectedCategory.image}
                                alt={selectedCategory.title}
                                className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <p className="text-lg text-gray-500 text-center">
                        Click on a product to view details
                    </p>
                </div>
            )}
        </section>
    );
};

export default SelectedProduct;
