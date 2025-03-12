import React, { useState } from "react";
import { Link } from "react-router-dom";
import { calculateDays } from "../utils/calculateDays";
  import { Bookmark, Send } from "lucide-react";

const AdminJobCard = ({ data, handleSave }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = 3; // Fewer initially visible skills for compact view

  return (
    <div className="flex justify-center items-center">
      <div className="w-[240px] sm:w-[300px]  border border-gray-600 shadow-lg bg-[#1A1B2F] 
                      rounded-lg p-4 flex flex-col justify- text-sm sm:text-base">
        
        {/* Days Posted */}
        {/* <p className="text-gray-400 text-right text-xs">
          {calculateDays(data.createdAt)}d ago
        </p> */}

        {/* Job Info */}
        <div>
          <h2 className="text-[#F8F9FA] text-lg font-semibold truncate">{data?.name}</h2>
          <p className="text-[#ADB5BD] text-xs sm:text-sm truncate">{data?.location}</p>
          <h3 className="text-[#F8F9FA] text-base font-semibold mt-1 truncate">{data?.role}</h3>
          <p className="text-[#ADB5BD] text-xs sm:text-sm truncate">
            {data?.mode} | {data?.jobType}
          </p>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-sm text-[#F8F9FA] font-semibold">Skills</h3>
          <ul className="text-[#56CFE1] flex flex-wrap mt-1 gap-1 text-xs">
            {data?.skills?.slice(0, showAll ? data?.skills.length : visibleSkills).map((req, index) => (
              <li key={index} className="border border-[#56CFE1] py-1 px-2 rounded-lg bg-[#2B2D42] truncate">
                {req}
              </li>
            ))}
          </ul>

          {/* Show More Button */}
          {data?.skills?.length > visibleSkills && (
            <button onClick={() => setShowAll(!showAll)} className="mt-1 text-[#4DA3FF] text-xs underline">
              {showAll ? "Less" : "More"}
            </button>
          )}
        </div>

        {/* Apply & Save Buttons */}
      
<div className="flex justify-between items-center mt-2">
  <Link
    to={data.link}
    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-lg py-2 px-4 rounded-lg shadow-md transition-all duration-300"
  >
    <Send size={18} />
    Apply
  </Link>
  <button
    onClick={() => handleSave(data?._id)}
    className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white text-lg py-2 px-4 rounded-lg shadow-md transition-all duration-300"
  >
    <Bookmark size={18} />
    Save
  </button>
</div>


      </div>
    </div>
  );
};

export default AdminJobCard;
