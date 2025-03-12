import React from "react";
import { SearchX } from "lucide-react"; // Importing an icon

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  text-white p-6">
      {/* Animated floating icons */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Centered Content */}
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Icon */}
        <SearchX className="w-20 h-20 text-rose-500 animate-bounce mb-4" />

        {/* Text */}
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-500">
          No Results Found
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Try adjusting your search criteria.</p>

        {/* Go Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
