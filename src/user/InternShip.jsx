import React, { useEffect, useState, useMemo } from 'react'
import AdminJobCard from './AdminJobCard'
import { addJob } from '../redux/JobSlice'
import NotFound from './NotFound'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { handleSavee } from './APIreq'
import { END_POINT } from '../utils/constants'
import { Search } from "lucide-react"; // Import search icon
import Input from '../components/Input'
import Loader from "../components/Loader"

const Internship = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const jobsData = useSelector((state) => state.job.job);
  const [inp, setInp] = useState(filter || "");
  const [load, setLoader] = useState(false);
 
  const filterData = useMemo(() => {
    //console.log(jobsData)
    return jobsData?.length > 0 &&   jobsData?.filter((job) => ((job.jobType == "Intern")&&((job?.name?.toLowerCase().replace(/\s+/g, '').includes(inp?.toLowerCase())) || inp?.trim() === "" || (job?.role?.toLowerCase().replace(/\s+/g, '').includes(inp?.toLowerCase())))))
  }, [inp, jobsData])
 // console.log(filterData)

  function debounce(func, time) {
    let timeOutId;
    return (...args) => {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => {
        func(...args)
      }, time)
    }
  }

  const handleChange = debounce((value) => {
    setInp(value);
  }, 500);

  const handleSave = async (jobId) => {
    const result = await handleSavee(jobId)
    if(result === "authentication failed"){
      toast.error(result)
    }
    else{
      toast.success(result)
    }
  }
  const getJobs = async () => {
    // console.log("get job called")
    let timeOutId;
    setLoader(true);
    try {
      timeOutId = setTimeout(()=>{
        toast.error("Data is taking too long to load. Please refresh the page.")
      },60000)
      const response = await fetch(`${END_POINT}/adminJob/get`, {
        method: "GET",
        credentials: "include",
      })
      const data = await response.json();
     // console.log(data)
      dispatch(addJob(data.jobData));
    } catch (error) {
      //console.log(error)
      toast.error("Something went wrong")
    }
    finally {
      clearTimeout(timeOutId)
      setLoader(false);
      
    }
  }

  useEffect(() => {
    getJobs();
  }, [])

  return load ? <Loader /> : (
    <div className='pb-5 m-auto w-full hide-scrollbar '>
      <div className='flex justify-center items-center px-10 py-5 text-black'>
      
<input
  type="text"
  placeholder="Search for jobs..."
  className="w-full sm:w-auto px-4 py-2 text-[16px] sm:text-[18px] rounded-xl  
             border-2 border-transparent bg-blue-300 text-black focus:border-blue-800
             focus:ring-2 focus:ring-blue-300 transition-all duration-300 
             shadow-md hover:shadow-lg outline-none 
             placeholder-gray-500"
  onChange={(e) => handleChange(e.target.value)}
/>
       
      </div>
      <div className='flex px-5 flex-wrap  justify-center items-center gap-10 w-full  hide-scrollbar'>
        {(filterData?.length > 0) ? (filterData.map((job, index) => (
          <AdminJobCard key={index} data={job} handleSave={handleSave} />
        ))) : ((<NotFound />))}
      </div>
    </div>

  )
}

export default Internship
