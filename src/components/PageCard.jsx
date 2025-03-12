import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const PageCard = ({ title, path, icon: Icon }) => {
  return (
    <div className="relative group bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-2 md:p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 w-full max-w-[320px] min-h-[180px] flex flex-col items-center justify-center text-center">
      <div className="p-3 bg-white/20 rounded-full mb-4">
        {Icon && <Icon size={30} className="text-white" />}
      </div>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <Link to={path} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg transition-all hover:bg-white/30">
        <span className="text-sm font-semibold">Visit {title}</span>
        <ArrowRightCircle size={20} />
      </Link>
    </div>
  );
};

export default PageCard;
