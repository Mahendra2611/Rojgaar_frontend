import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="  flex flex-col items-center justify-center  bg-gradient-to-br from-gray-900 to-gray-800 text-white ">
      <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-blackOps text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-400 mb-6">Have questions? We'd love to hear from you!</p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <Mail size={24} className="text-blue-400" />
            <span className="text-sm sm:text-base">contact@company.com</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <Phone size={24} className="text-green-400" />
            <span className="text-sm sm:text-base">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <MapPin size={24} className="text-red-400" />
            <span className="text-sm sm:text-base">123 Main Street, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;