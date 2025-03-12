import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { UserCircle, Pencil } from 'lucide-react';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleEdit = () => {
    if (Object.keys(user).length === 0) {
      toast.error("You are not logged in");
    } else {
      navigate("/editprofile");
    }
  };

  return (
    <div className=''>
      <div className="p-6 max-w-4xl mx-auto  shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="flex justify-end">
          <button 
            onClick={handleEdit} 
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all">
            <Pencil size={18} /> Edit
          </button>
        </div>
        <div className="text-center mt-4">
          {user?.profile?.profilePhoto ? (
            <img
              className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-blue-400"
              src={user?.profile?.profilePhoto}
              alt="Profile"
            />
          ) : (
            <UserCircle className="w-24 h-24 md:w-32 md:h-32 mx-auto text-gray-400" />
          )}
          <h2 className="text-2xl font-bold mt-4 text-blue-400">{user?.fullName}</h2>
          <p className="text-gray-300 text-lg">{user?.role}</p>
          <p className="text-gray-300">{user?.email}</p>
          <p className="text-gray-300">{user?.phoneNumber}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-400">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-800 rounded-full shadow-md"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-400">No skills added</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-400">Resume</h3>
          {user?.profile?.resume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline text-lg"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <p className="text-gray-400">No resume uploaded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;