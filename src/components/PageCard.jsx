import React from "react";
import { useNavigate } from "react-router-dom";

const PageCard = ({ title, path, bgColor }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg text-white ${bgColor} hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-[300px]`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <button
        onClick={() => navigate(path)}
        className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
      >
        Visit {title}
      </button>
    </div>
  );
};

export default PageCard;
