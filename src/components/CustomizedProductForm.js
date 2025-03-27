import React, { useState } from "react";

const CustomizedProductForm = ({ onClose }) => {
    const diamondOptions = [
        { label: "Thermal Grade", value: "thermal" },
        { label: "Optical Grade", value: "optical" },
        { label: "Mechanical Grade", value: "mechanical" },
        { label: "Electrical Grade", value: "electrical" },
        { label: "Medical Grade", value: "medical" },
        { label: "Gem & Jewelry", value: "gem" }
    ];

    const diamondTypes = [
        { label: "CVD Seed", value: "cvd-seed" },
        { label: "CVD Rough", value: "cvd-rough" },
        { label: "CVD Polished", value: "cvd-polished" }
    ];
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isQuantityOpen, setIsQuantityOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDiamond, setSelectedDiamond] = useState("");
    const [otherDiamond, setOtherDiamond] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [buyingQty, setBuyingQty] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [title, setTitle] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [companyName, setCompanyName] = useState("");
    const options = ["Sample"];

    const handleDiamondSelect = (value) => {
        setSelectedDiamond(value);
        setDropdownOpen(false); // Close dropdown after selection
    };
    const titleOptions = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "Other"];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName)
        alert(`Your customized product request has been submitted successfully ${title} ${fullName} ${emailId}! ${contactNo} ${companyName} ${selectedDiamond === "other" ? `Other - ${otherDiamond}` : diamondOptions.find(opt => opt.value === selectedDiamond)?.label} ${diamondTypes.find(type => type.value === selectedType)?.label} ${selectedOption} ${buyingQty}`);
    };

    return (
        <section className="border-4 border-green-600 min-h-[649px] text-black my-2 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden pb-6 w-[95%] max-w-[1200px]">
            <h2 className="text-2xl font-bold text-left mb-4">Need Customized Products?</h2>

            <form onSubmit={handleSubmit} className="h-full">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
                    {/* Left Container */}
                    <div className="w-full border-4 border-red-400  lg:w-[48%]">
                        {/* Tablet-specific vertical layout (768px-1024px) */}
                        <div className="md:flex md:flex-col md:space-y-3">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[20px] mb-[5px] md:mb-0 md:flex-col md:gap-3 lg:flex-row lg:gap-[26.1px] lg:mb-[10px]">
                                <div className="flex border border-gray-600 rounded-md overflow-hidden w-full sm:w-[260px] md:w-full lg:w-[289px] h-[42px] lg:h-[45.88px]">
                                    <select className="p-2 bg-transparent text-black border-r border-gray-600 outline-none text-sm w-1/4 placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle">
                                        <option value="Mr." selected className="font-[MADE_Evolve_Sans] font-normal text-[25.05px] leading-[100%] tracking-[0%] align-middle bg-[#2A324180]">Mr.</option>
                                        {titleOptions.map((title) => (
                                            <option key={title} value={title}>{title}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        className="w-3/4 p-2 bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm"
                                        
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <input
                                    type="email"
                                    placeholder="Email ID*"
                                    className="w-full sm:w-[280px] md:w-full lg:w-[313px] h-[42px] lg:h-[48.88px] p-2 border border-gray-600 rounded-md bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm" 
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[20px] mb-[5px] md:mb-0 md:flex-col md:gap-3 lg:flex-row lg:gap-[26.1px] lg:mb-[10px]">
                                <input
                                    type="tel"
                                    placeholder="Contact Number*"
                                    className="w-full sm:w-[260px] md:w-full lg:w-[290px] h-[42px] lg:h-[48.88px] p-2 border border-gray-600 rounded-md bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm"

                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                />

                                <input
                                    type="text"
                                    placeholder="Company Name*"
                                    className="w-full sm:w-[280px] md:w-full lg:w-[312px] h-[42px] lg:h-[49.88px] p-2 border border-gray-600 rounded-md bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm"

                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[20px] mb-[20px] md:mb-0 md:flex-col md:gap-4 lg:flex-row lg:gap-[26.1px] lg:mb-[26.1px]">
                                <input
                                    type="text"
                                    placeholder="Country*"
                                    className="w-full sm:w-[260px] md:w-full lg:w-[289px] h-[42px] lg:h-[49.88px] p-2 border border-gray-600 rounded-md bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm"
                                />

                                <input
                                    type="text"
                                    placeholder="City*"
                                    className="w-full sm:w-[280px] md:w-full lg:w-[313px] h-[42px] lg:h-[49.88px] p-2 border border-gray-600 rounded-md bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm"
                                />
                            </div>

                            <textarea
                                rows="3"
                                placeholder="Full Shipping Address*"
                                className="w-full lg:w-[px] h-[120px] lg:h-[142px] p-2 border border-gray-600 rounded-md bg-transparent text-black placeholder-[#2A324180] placeholder-font-[MADE_Evolve_Sans] placeholder-font-normal placeholder-text-[25.05px] placeholder-leading-[100%] placeholder-tracking-[0%] placeholder-align-middle focus:outline-none text-sm mb-4 md:mb-0"
                            />
                        </div>
                     </div>

                    {/* Right Container */}
                    <div className="w-full lg:w-[48%] border-4 border-red-400 space-y-3">
                        {/* Custom Dropdown for Diamond Type */}
                        <div className="relative mb-3">
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                                className="w-full p-2 border border-gray-600 rounded-md bg-transparent text-black focus:outline-none text-sm h-[42px] text-left flex justify-between items-center"
                            >
                                <span>
                                    {selectedDiamond
                                        ? diamondOptions.find((opt) => opt.value === selectedDiamond)?.label || "Other"
                                        : "Which Type Of Diamond?*"}
                                </span>
                                <span className="transform transition-transform duration-200">
                                    {isDropdownOpen ? '▲' : '▼'}
                                </span>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute w-full mt-1 p-3 bg-white border border-gray-400 rounded-md shadow-lg z-10">
                                    <h4 className="text-sm font-medium mb-2 text-gray-700">Select Diamond Type:</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {diamondOptions.map((option) => (
                                            <label
                                                key={option.value}
                                                className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-100 rounded"
                                            >
                                                <input
                                                    type="radio"
                                                    name="diamondType"
                                                    value={option.value}
                                                    checked={selectedDiamond === option.value}
                                                    onChange={() => handleDiamondSelect(option.value)}
                                                    className="w-4 h-4 text-blue-600"
                                                />
                                                <span className="text-gray-700 text-sm">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Other Option with Textarea */}
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Other (Please specify)</label>
                                        <textarea
                                            className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                            placeholder="Enter other type of diamond..."
                                            value={otherDiamond}
                                            onChange={(e) => {
                                                setSelectedDiamond("other");
                                                setOtherDiamond(e.target.value);
                                            }}
                                            rows="2"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* Type Dropdown */}
                        <div className="relative">
                            <div
                                className="w-full p-2 border border-gray-600 rounded-md bg-transparent text-black text-sm h-[42px] flex items-center justify-between cursor-pointer"
                                onClick={() => setIsTypeOpen(!isTypeOpen)}
                            >
                                {selectedType ? diamondTypes.find(type => type.value === selectedType)?.label : "Select Type*"}
                                <span className="transform transition-transform duration-200">
                                    {isTypeOpen ? '▲' : '▼'}
                                </span>
                            </div>

                            {/* Dropdown Content */}
                            {isTypeOpen && (
                                <div className="absolute w-full mt-1 border border-gray-600 bg-white rounded-md p-2 shadow-lg z-10">
                                    <div className="flex justify-between">
                                        {diamondTypes.map((type) => (
                                            <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="diamondType"
                                                    value="type.value"
                                                    checked={selectedType === type.value}
                                                    onChange={() => {
                                                        setSelectedType(type.value);
                                                        setIsTypeOpen(false);
                                                    }}
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-gray-500">{type.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quantity Dropdown */}
                        <div className="relative">
                            <div
                                className="w-full p-2 border border-gray-600 rounded-md bg-transparent text-black text-sm h-[42px] flex items-center justify-between cursor-pointer"
                                onClick={() => setIsQuantityOpen(!isQuantityOpen)}
                            >
                                {selectedOption ? selectedOption : "Quantity*"}
                                <span className="transform transition-transform duration-200">
                                    {isQuantityOpen ? '▲' : '▼'}
                                </span>
                            </div>

                            {/* Dropdown Content */}
                            {isQuantityOpen && (
                                <div className="absolute w-full mt-1 border border-gray-600 bg-white rounded-md p-3 shadow-lg z-10">
                                    {/* MCQ Options in One Row */}
                                    <div className="flex justify-between">
                                        {options.map((option) => (
                                            <label key={option} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="quantity"
                                                    value={option}
                                                    checked={selectedOption === option}
                                                    onChange={() => {
                                                        setSelectedOption(option);
                                                        setIsQuantityOpen(false);
                                                    }}
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-gray-500">{option}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Buying Quantity Textarea */}
                                    <textarea
                                        className="w-full mt-2 p-2 border border-gray-400 rounded-md text-sm"
                                        placeholder="Buying QTY"
                                        value={buyingQty}
                                        onChange={(e) => setBuyingQty(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Combined Subject & Message textarea with custom positioning */}
                        <div className="relative">
                            <div className="border border-black rounded p-3">
                                {/* Subject as Heading with Black Underline */}
                                <h6 className="mb-2 pb-2 text-left border-b border-black">Subject</h6>
                                {/* Message Input */}
                                <textarea
                                    className="w-full border-0 focus:outline-none focus:ring-0 p-2"
                                    placeholder="Message"
                                    rows="8"
                                ></textarea>
                            </div>
                        </div>


                        <div className="flex justify-end mr-[5px] mt-[3px]">
                            <button
                                type="submit"
                                className="w-[161px] h-[49px] bg-black text-white rounded-[13.43px] hover:bg-gray-800 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CustomizedProductForm;