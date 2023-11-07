import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Banner from '../../assets/viewDetailsBanner.jpg'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { CiMoneyBill } from 'react-icons/ci';
import { ImLocation2 } from 'react-icons/im';
import { SlCalender } from 'react-icons/sl';
import useJobsCategoryData from '../../Hooks/useJobsCategoryData';

const JobsectionDeatls = () => {
     const {id} = useParams();
     const [JobCard, setJobCard] = useState({});
     const jobsCategory = useJobsCategoryData();
     const {name,img,jobTitle,category,location,postingDate,deadline,salaryRange,applicantsNumber,description} = JobCard || {};

     useEffect(()=>{
          const findJobData = jobsCategory?.find(job =>job._id == id)
          setJobCard(findJobData)

     },[id,jobsCategory])
     return (
          <div className='px-8 md:px-14 lg:px-20 dark:bg-[#242323] py-10'>
          <div className=' py-5'>
             <div className=" dark:bg-[#242323] ">
    <div className="carousel w-full h-[180px] md:h-[300px] rounded-xl">
      <div className="carousel-item relative w-full">
        
        <img
          src={Banner}
          className="w-full  object-cover"
        />
      
      </div>
    </div>
  </div>
             </div >
            <div className=" rounded-lg  bg-base-100 border-2 dark:bg-gray-400 dark:text-white p-5 border-[#3994e4] shadow-xl ">
            <div className=' md:flex justify-center gap-10 items-center'>
            
              <img
                src={img}
                alt=""
                className=" lg:p-2 border-2 rounded-lg ml-7  "
              />
            
            <div className="  w-full ">
              <div className=' '>
              <h2 className="text-[12px] md:text-xl font-semibold">{jobTitle}</h2>
              <p className=" text-gray-500 dark:text-white font-semibold ">{name}</p>
              <p className=" text-gray-500 text-xs dark:text-white font-semibold ">Application Number : {applicantsNumber}</p>
              <div className=" md:flex gap-4 mt-2 ">
                <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><ImLocation2 className=" text-black text-sm dark:text-white"/>{location}</p>
                <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"> <BiTimeFive className=" text-black text-sm dark:text-white"/>{category}</p>
                <p className=" flex items-center gap-1 text-[12px] dark:text-white text-gray-500 font-semibold"><CiMoneyBill className=" text-black text-[16px] dark:text-white"/>{salaryRange}</p>
              </div>
              <div>
                <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {deadline}</span></p>
                <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Posting Date: {postingDate}</span></p>
              </div>
              </div>
            </div>
            <span className=" bg-[#3994e467] hidden md:block md:-mt-[145px] md:-mr-5 lg:-mt-[128px] lg:-mr-5 -mt-[165px] -mr-5 text-5xl rounded-md p-2"><AiOutlineHeart /></span>
            </div>
            <h1 className=" text-xl font-semibold mt-8">
                {description}
              </h1>
          </div>
        </div>
     );
};

export default JobsectionDeatls;