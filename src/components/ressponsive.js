import React from "react";



const LayoutWithTailwind = () => {
    return (
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-blue-500 text-white p-6 rounded-lg">Item 1</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-green-500 text-white p-6 rounded-lg">Item 2</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-red-500 text-white p-6 rounded-lg">Item 3</div>
        </div>
      </div>
    );
  };

export default LayoutWithTailwind