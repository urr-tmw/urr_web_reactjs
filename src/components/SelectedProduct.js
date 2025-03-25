import React from "react";

const SelectedProduct = ({ selectedCategory }) => {
    return (
        <section 
            className={`border-4 border-green-600 h-[427px] text-black my-2 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden transition-opacity duration-500 ${
                selectedCategory ? "opacity-100" : "opacity-0"
            }`}
            id="selected-product"
        >
            {/* <h2 className="text-2xl font-bold text-center mb-4">Selected Product</h2> */}

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
