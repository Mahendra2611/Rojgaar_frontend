import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pattern1 } from "../components/Background";
import Button from "../components/Button";
import { calculateDays } from "../utils/calculateDays";

const JobCard = ({ data,handleRemove }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = 4; // Number of skills shown initially

  return (
    <Pattern1>
      <div className="flex justify-center items-center">
        <div className="w-[250px] sm:w-[300px] h-[350px] border border-white/20 shadow-[inset_10px_10px_10px_-1px_#4d4e4e,inset_-10px_-10px_10px_-1px_#1f2020] 
                        rounded-lg p-4 flex flex-col justify-between">
          
          {/* Days Posted */}
          <p className="text-white text-right text-sm">{calculateDays(data.createdAt)} Days Ago</p>

          {/* Job Info */}
          <div>
            <h2 className="text-white text-xl font-bold">{data?.name}</h2>
            <p className="text-gray-300 text-sm">{data?.location}</p>
            <h3 className="text-white text-lg font-semibold mt-2">{data?.role}</h3>
            <p className="text-white text-sm">{data?.mode} | {data?.jobType}</p>
          </div>

          {/* Requirements */}
          <div className="mt-0">
            <h3 className="text-lg text-white font-semibold">Requirements</h3>
            <ul className="text-orange-300 flex flex-wrap gap-2 md:gap-3">
              {data?.skills?.slice(0, showAll ? data?.skills.length : visibleSkills).map((req, index) => (
                <li key={index} className="border-2 border-white/20 py-1 px-2 text-xs rounded-xl bg-[#1e293b] shadow-[inset_5px_5px_5px_-1px_#32435f,inset_-5px_-5px_5px_-1px_#131c2b]">
                  {req}
                </li>
              ))}
            </ul>

            {/* Show More Button */}
            {data?.skills?.length > visibleSkills && (
              <button onClick={() => setShowAll(!showAll)} className="mt-2 text-blue-400 text-sm underline">
                {showAll ? "Show Less" : "More"}
              </button>
            )}
          </div>

          {/* Apply Button */}
          <div className="flex justify-around gap-x-1 items-center mt-4">
            <Button>
              <Link to={data.link}>Apply</Link>
            </Button>
                      <Button onClick={()=>{handleRemove(data?._id)}} >
                        Remove
                      </Button>
          </div>

        </div>
      </div>
    </Pattern1>
  );
};

export default JobCard;
