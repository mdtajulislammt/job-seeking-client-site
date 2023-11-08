import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
     const [applyJobs,setApplyJobs] = useState([])
     useEffect(()=>{
          axios.get('http://localhost:5000/apply')
          .then(res=>setApplyJobs(res.data))
     },[])
     return (
          <div className="px-28 grid grid-cols-1 gap-5 py-10 bg-gradient-to-t from-[#439ae7de] to-[#adabab2c]">
               {
                    applyJobs?.map(job =>
                    <div key={job._id} className="card card-side bg-base-100 border-2 dark:bg-gray-400 dark:text-white p-5 border-[#3994e4] shadow-xl ">
                    <figure>
                      <img
                        src={job.img}
                        alt="Movie"
                        className=" lg:p-2 border-2 rounded-lg"
                      />
                    </figure>
                    <div className="ml-7 md:flex  justify-between items-center w-full ">
                      <div>
                      <h2 className="text-[12px] md:text-xl font-semibold">{job.jobTitle}</h2>
                      <p className=" text-gray-500 dark:text-white font-semibold ">{job.name}</p>
                      <p className=" text-gray-500 dark:text-white font-semibold ">Application Number : {job.applicantsNumber}</p>
                      <div className="  gap-4 mt-2 ">
                        <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><ImLocation2 className=" text-black text-sm dark:text-white"/>{job.location}</p>
                        <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"> <BiTimeFive className=" text-black text-sm dark:text-white"/>{job.category}</p>
                        <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><CiMoneyBill className=" text-black text-[16px] dark:text-white"/>{job.salaryRange}</p>
                      </div>
                      </div>
                      <div className=" ">
                        <div className=" flex items-center gap-2 md:justify-end ">
                          <span className=" bg-[#3994e467] rounded-md p-2"><AiOutlineHeart /></span>
                        <Link to={`/jobDetails/${job._id}`} ><button  className=" bg-[#3994e4] text-white p-2  px-7 rounded-md hover:text-black">View Details</button></Link>
                        </div>
                        <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
                      </div>
                    </div>
                  </div>)
               }
          </div>
     );
};

export default AppliedJobs;