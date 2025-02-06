import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import JobAppliedTable from './JobAppliedTable';
import { END_POINT } from '../utils/constants';
import Popup from './Popup';
const Profile = () => {
  const user = useSelector((state)=>state.user.user)
  const [jobsData,setJobsData] = useState()
  const [loged,setLoged]= useState(true);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);


const handleEdit = ()=>{
   if(Object.keys(user).length === 0){
    toast.error("You are not logged in")
   }
   else{
    navigate("/editprofile")
   }
    
}

 
 useEffect(()=>{
  if(Object.keys(user).length === 0){
    setShowPopup(true);
   }
 },[])
  return   showPopup ? <Popup onClose={() => setShowPopup(false)} />:(
   <div className='mx-2 my-2'>
     <div
      className="p-6 max-w-4xl mx-auto rounded-lg   shadow-[inset_10px_10px_10px_-1px_#4d4e4e,inset_-10px_-10px_10px_-1px_#1f2020]">
      <div className="flex justify-end">
        <button onClick={handleEdit} className="text-white bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca rounded-xl py-1 md:py-2 px-2 md:px-4">
          Edit
        </button>
      </div>
      <div className="text-center ">
        <img
          className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full"
          src={user?.profile?.profilePhoto}
          alt="U"
        />
        <h2 className="text-xl md:text-2xl font-bold pb-1 mt-4 text-blue-400">{user?.fullName}</h2>
        <p className="text-gray-100 pb-1">{user?.role}</p>
        <p className="text-gray-100 pb-1">{user?.email}</p>
        <p className="text-gray-100">{user?.phoneNumber}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-blue-400">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user?.profile?.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-lg bg-blue-100 text-blue-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-blue-400">Resume</h3>
        <a
          href={user?.profile?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl md:text-xl hover:underline"
        >
         { user?.profile?.resumeOriginalName}
        </a>
      </div>
    </div>
   
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"

/>
   </div>
  );
};

export default Profile;
