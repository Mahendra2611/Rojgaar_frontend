import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pattern1 } from './Background';
import Card from './Card';
import PageCard from "./PageCard";
import SocialMedia from './SocialMedia';
import { Search, Briefcase, FileText, GraduationCap } from "lucide-react";
import FAQ from './FAQ';
import ContactUs from './ContactUs';
const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const options = ["Frontend", "Backend", "Data Scientist", "Full Stack", "Java"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Pattern1>
      <div className="text-gray-200 min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Hero Section */}
        <section className=" py-4 text-center text-[#e3b341]">
          <h1 className="text-3xl md:text-4xl font-blackOps mb-4">Find Your Dream Job or Internship</h1>
          <p className="text-lg font-bonaNova mb-4 text-[#d4a5f3]">Create a resume in minutes and apply with one click</p>
        </section>
        
        {/* Search Bar */}
        <section ref={sectionRef} className="w-full flex flex-col items-center gap-4 p-4">
     
      <div className="relative w-full max-w-2xl flex items-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md overflow-hidden">
        
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShow(true)}
          placeholder="Search Job by title..."
          value={search}
          className="w-full p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={() => navigate(`/user/jobs/${search}`)}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full transition-all"
        >
          Search
        </button>
      </div>

      {/* Search Suggestions */}
      {show && (
        <ul className="bg-gray-900 text-gray-300 flex flex-wrap gap-3 p-4 rounded-xl shadow-lg w-full max-w-2xl">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSearch(option);
                setShow(false);
              }}
              className="cursor-pointer border border-gray-600 py-1 md:py-2 px-2 md:px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </section>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center w-full gap-6 p-6">
  <PageCard title="Jobs" path="/user/jobs" icon={Briefcase} />
  <PageCard title="Internships" path="/user/intern" icon={GraduationCap} />
  <PageCard title="Resume Builder" path="/user/resume" icon={FileText} />
</div>
        
        {/* Key Features */}
        <section className="py-10 px-6 text-center">
          <h2 className="text-3xl text-[#e3b341] font-blackOps mb-6">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Card heading="One-Click Applications" text="Apply to jobs with just one click, saving you time and effort." />
            <Card heading="Resume Builder" text="Create a professional resume in minutes with our easy-to-use tool." />
            <Card heading="Track Your Applications" text="Keep track of all your job applications in one place." />
          </div>
        </section>
        <FAQ/>
        <ContactUs/>
        {/* Footer */}
        <footer className="py-6 text-center bg-gray-900 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rojgaar Platform. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <SocialMedia />
          </div>
        </footer>
      </div>
    </Pattern1>
  );
};

export default Home;
