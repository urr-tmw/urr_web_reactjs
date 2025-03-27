import React from "react";

const SelectedProduct = ({ selectedCategory, selectedIndex }) => {
    // Determine the color pattern based on selected index
    const getCardColor = (index) => {
        if (selectedIndex === null) return 'bg-white';
        
        if (selectedIndex % 2 === 0) {
            // If selected index is even, even indexes get gray, odd get white
            return index % 2 === 0 ? 'bg-[#E0E0E1]' : 'bg-white';
        } else {
            // If selected index is odd, odd indexes get gray, even get white
            return index % 2 !== 0 ? 'bg-[#E0E0E1]' : 'bg-white';
        }
    };

    return (
        <section 
            className={`border-4 border-green-600 h-[427px] text-black my-2 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden transition-opacity duration-500 ${
                selectedCategory ? "opacity-100" : "opacity-0"
            } ${getCardColor(selectedIndex)}`}
            id="selected-product"
        >
            {selectedCategory ? (
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-xl font-bold">{selectedCategory.title}</h2>
                    <img 
                        src={selectedCategory.image} 
                        alt={selectedCategory.title} 
                        className="w-40 h-40 object-cover my-4 border-4 border-gray-400 rounded-lg" 
                    />
                    <p className="text-lg">{selectedCategory.description}</p>
                </div>
            ) : (
                <p className="text-lg text-gray-500 text-center">
                    Click on a product to view details
                </p>
            )}
        </section>
    );
};

export default SelectedProduct;