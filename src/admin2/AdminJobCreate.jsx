import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
import { addJob } from '../redux/JobSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { CustomButtonBlue } from '../components/CustomButton';
import { checkString } from '../hooks/check';
import { checkNumber } from '../hooks/check';
import { Pattern1 } from '../components/Background';
import { END_POINT } from '../utils/constants';
const AdminJobCreate = () => {

  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const job = {
    name: useRef(null),
    location: useRef(null),
    role: useRef(null),
    mode: useRef(null),
    link: useRef(null),
    jobType: useRef(null),
    skills: useRef(null),


  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillsArray = job?.skills?.current?.value?.split(",")
    const formData = {}
    formData["name"] = job?.name?.current?.value || "";
    formData["location"] = job?.location?.current?.value || "";
    formData["mode"] = job?.mode?.current?.value || "";
    formData["link"] = job?.link?.current?.value || "";
    formData["role"] = job?.role?.current?.value || "";
    formData["jobType"] = job?.jobType?.current?.value || "";
    formData["skills"] = skillsArray || "";
    // formData.append("company",  job?.company?.current?.value || "");
    console.log(formData)
    try {
      setLoad(true);
      const response = await fetch(`${END_POINT}/adminJob/post`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      // console.log(object)
      if (response.ok) {

        console.log(data.job)

        console.log("Data received successfully");
        navigate("/admin2/home")
      } else {
        toast.error(data.message)
        console.log("Data couldn't be sent successfully");
      }
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error);
    }
    finally {
      setLoad(false);
    }
  };

  return load ? <Loader /> : (
    <Pattern1>
      <div className="p-6 max-w-lg mx-auto text-white bg-[#0f172a] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label className="block text-xs md:text-[16px] text-lime-500">Company Name</label>
            <input
              type="text"
              name="name"
              ref={job.name}
              className="w-full text-xs md:text-[16px] my-1 h-8  md:h-10 p-2 border rounded bg-[#213155] text-white"
            />
          </div>

          <div>
            <label className="block text-lime-500">Location</label>
            <input
              type="text"
              name="location"
              ref={job.location}
              className="w-full p-2 text-xs md:text-[16px] my-1 h-8 md:h-10 border rounded bg-[#213155] text-white"
            />
          </div>

          {/* Smaller fields in parallel */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs md:text-[16px] text-lime-500">Role</label>
              <input
                type="text"
                name="role"
                ref={job.role}
                className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-[16px] text-lime-500">Mode</label>
            <select className="w-full text-xs md:text-[16px] my-1  h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
              id='mode'
              ref={job.mode}>
              <option defaultChecked disabled>Select Job Mode</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label className="block text-xs md:text-[16px] text-lime-500">Job Type</label>
            <select className="w-full text-xs md:text-[16px] my-1  h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
              id='jobType'
              ref={job.jobType}>
              <option defaultChecked disabled>Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs md:text-[16px] text-lime-500">Link</label>
              <input
                type="text"
                name="link"
                ref={job.link}
                className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs md:text-[16px] text-lime-500">Skills</label>
              <input
                type="text"
                name="skills"
                ref={job.skills}
                className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
              />
              <p className='text-red-500 text-xs'>* seperate the skills by comma</p>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="text-white  rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]"
          >
            Create
          </button>
        </form>

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
    </Pattern1>
  );
};

export default AdminJobCreate
