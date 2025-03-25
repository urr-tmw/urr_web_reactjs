import React from "react";

const CustomizedProductForm = ({ onClose }) => {
    return (
        <section className="border-4 border-green-600 h-[427px] text-black my-2 mx-4 md:mx-20 px-6 md:px-16 overflow-hidden">
            <h2 className="text-2xl font-bold text-center mb-4">Customized Product Request</h2>

            <form className="flex flex-col items-center">
                <label className="text-lg font-semibold mb-2">Your Name:</label>
                <input type="text" placeholder="Enter your name" className="border-2 p-2 rounded-md w-64 mb-4" />

                <label className="text-lg font-semibold mb-2">Product Details:</label>
                <textarea placeholder="Describe your custom product" className="border-2 p-2 rounded-md w-64 h-20 mb-4"></textarea>

                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">Submit</button>
            </form>

            {/* Close Button */}
            <button className="mt-4 text-red-600 font-semibold" onClick={onClose}>Close</button>
        </section>
    );
};

export default CustomizedProductForm;
