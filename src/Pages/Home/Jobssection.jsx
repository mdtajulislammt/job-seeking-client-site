import React, { useContext, useEffect, useState } from "react";
import cetegory1 from "../../assets/company-1.jpg"
import cetegory2 from "../../assets/company-2.jpg"
import cetegory3 from "../../assets/company-3.jpg"
import cetegory4 from "../../assets/company-4.jpg"
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

import { Tab, Tabs, TabList} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
// import { motion } from "framer-motion"


const Jobssection = () => {
   const [jobsCategory, setJobsCategory] = useState([])
   const [selectCategory, setSelectCategory] = useState([])
   const { user} = useContext(AuthContext);



     useEffect(()=>{
          fetch(`http://localhost:5000/jobCetagory`)
          .then(res => res.json())
          .then(data => setJobsCategory(data))
     },[])

     const handleDetailsBtn =()=>{
      if(!user){
        Swal.fire({
          title: "Error !",
          text: "You have to log in first to view details",
          imageWidth: 400,
          imageHeight: 200,
          icon: 'error',
        });
        
      }
     }

     
     const handleJobsFilter =filter=>{
      if(selectCategory){
       if(filter === 'all'){
       setSelectCategory(jobsCategory) 
      }
       else if(filter === 'On Site Job'){
        const onSiteJob = jobsCategory.filter(job =>job.category === 'On Site Job' )
        setSelectCategory(onSiteJob)
       }
       else if(filter === 'Remote Job'){
        const onSiteJob = jobsCategory.filter(job =>job.category === 'Remote Job' )
        setSelectCategory(onSiteJob)
       }
       else if(filter === 'Hybrid'){
        const onSiteJob = jobsCategory.filter(job =>job.category === 'Hybrid' )
        setSelectCategory(onSiteJob)
       }
       else if(filter === 'Part Time'){
        const onSiteJob = jobsCategory.filter(job =>job.category === 'Part Time' )
        setSelectCategory(onSiteJob)
       } }
      else{
        setSelectCategory(jobsCategory) 
      }
      
       
     }
  
  return (
    <div className="px-5 md:px-10 lg:px-20 grid lg:grid-cols-7 gap-5 ">
      <div className=" lg:col-span-5 col-span-7 mt-20 mb-5">
      <Tabs>
      <div className=" lg:flex justify-between  items-center -mb-3">
        <h2 className=" text-2xl text-center lg:text-start uppercase font-bold border-b-2 border-[#3994e4] dark:text-white mb-5">
          Resent Jobs
        </h2>
        <div className=" flex justify-center -mt-2 ">
        
        
    <TabList className="bg-[#3994e4] text-white px-[4px] pt-2 rounded-t-lg">
      <Tab  onClick={()=>handleJobsFilter('all')} >All</Tab>
      <Tab  onClick={()=>handleJobsFilter('On Site Job')}>On Site Job</Tab>
      <Tab  onClick={()=>handleJobsFilter('Remote Job')}>Remote Job</Tab>
      <Tab  onClick={()=>handleJobsFilter('Hybrid')}>Hybrid</Tab>
      <Tab  onClick={()=>handleJobsFilter('Part Time')}>Part Time</Tab>
    </TabList>

        </div>
      </div>
      {/* cards */}
      
      <div className=" border-4 px-4 border-[#3994e4] ">
        {
          selectCategory.length == 0 ? <>
          {
          jobsCategory?.map(job => 
            <div key={job._id} className="card card-side bg-base-100 border-2 dark:bg-gray-400 dark:text-white p-5 border-[#3994e4] shadow-xl my-5">
            <figure>
              <img
                src={job.img}
                alt="Movie"
                className=" lg:p-2 border-2 rounded-lg"
              />
            </figure>
            <div className="ml-7 flex  justify-between items-center w-full ">
              <div>
              <h2 className="text-[12px] md:text-xl font-semibold">{job.jobTitle}</h2>
              <p className=" text-gray-500 dark:text-white font-semibold ">{job.name}</p>
              <p className=" text-gray-500 dark:text-white font-semibold ">Application Number : {job.applicantsNumber}</p>
              <div className=" md:flex gap-4 mt-2 ">
                <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><ImLocation2 className=" text-black text-sm dark:text-white"/>{job.location}</p>
                <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"> <BiTimeFive className=" text-black text-sm dark:text-white"/>{job.category}</p>
                <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><CiMoneyBill className=" text-black text-[16px] dark:text-white"/>{job.salaryRange}</p>
              </div>
              </div>
              <div className=" ">
                <div className=" flex items-center gap-2 justify-end ">
                  <span className=" bg-[#3994e467] rounded-md p-2"><AiOutlineHeart /></span>
                  <Link to={`/jobsCategory/${job._id}`}><button onClick={handleDetailsBtn} className=" bg-[#3994e4] text-white p-2  px-7 rounded-md hover:text-black">Details</button></Link>
                </div>
                <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
                <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold  text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Posting : {job.postingDate}</span></p>
              </div>
            </div>
          </div>)}</> 
          : 
          <>{
            selectCategory?.map(job => 
              <div key={job._id} className="card card-side bg-base-100 border-2 dark:bg-gray-400 dark:text-white p-5 border-[#3994e4] shadow-xl my-5">
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
                <div className=" md:flex gap-4 mt-2 ">
                  <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><ImLocation2 className=" text-black text-sm dark:text-white"/>{job.location}</p>
                  <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"> <BiTimeFive className=" text-black text-sm dark:text-white"/>{job.category}</p>
                  <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><CiMoneyBill className=" text-black text-[16px] dark:text-white"/>{job.salaryRange}</p>
                </div>
                </div>
                <div className=" ">
                  <div className=" flex items-center gap-2 md:justify-end ">
                    <span className=" bg-[#3994e467] rounded-md p-2"><AiOutlineHeart /></span>
                  <Link to={`/jobsCategory/${job._id}`}><button onClick={handleDetailsBtn} className=" bg-[#3994e4] text-white p-2  px-7 rounded-md hover:text-black">Details</button></Link>
                  </div>
                  <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
                  <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold  text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Posting : {job.postingDate}</span></p>
                </div>
              </div>
            </div>)}</>
          
        
        }
        
      </div>
     
      </Tabs>
      </div>
      <div className=" lg:col-span-2 col-span-7 py-5 lg:block grid gap-5 grid-cols-2  lg:mt-16 lg:grid-cols-1">
          <div className=" mb-8  shadow-md p-2 dark:bg-gray-400 rounded-lg ">
               <img src={cetegory1} alt="" className=" w-full mb-3 rounded-lg   " />
               <h1 className=" text-lg font-semibold">Company Company</h1>
               <p className=" font-semibold text-gray-400 dark:text-white"><span className=" bg-[#206dfbbd] text-white p-1 rounded-md mr-1">300</span>Open position</p>
          </div>
          <div className=" mb-8 shadow-md p-2 dark:bg-gray-400 rounded-lg">
               <img src={cetegory2} alt="" className=" w-full mb-3  rounded-lg    " />
               <h1 className=" text-lg font-semibold">Brand Name Company</h1>
               <p className=" font-semibold text-gray-400 dark:text-white"><span className=" bg-[#206dfbbd] text-white p-1 rounded-md mr-1">300</span>Open position</p>
          </div>
          <div className="mb-8 shadow-md p-2 dark:bg-gray-400 rounded-lg">
               <img src={cetegory3} alt="" className=" w-full mb-3  rounded-lg    " />
               <h1 className=" text-lg font-semibold">Brand Company</h1>
               <p className=" font-semibold text-gray-400 dark:text-white"><span className=" bg-[#206dfbbd] text-white p-1 rounded-md mr-1">300</span>Open position</p>
          </div>
          <div className="mb-8 shadow-md p-2 dark:bg-gray-400 rounded-lg">
               <img src={cetegory4} alt="" className=" w-full mb-3 rounded-lg " />
               <h1 className=" text-lg font-semibold">Tag Line Company</h1>
               <p className=" font-semibold text-gray-400 dark:text-white"><span className=" bg-[#206dfbbd] text-white p-1 rounded-md mr-1">300</span>Open position</p>
          </div>
      </div>
    </div>
  );
};

export default Jobssection;
