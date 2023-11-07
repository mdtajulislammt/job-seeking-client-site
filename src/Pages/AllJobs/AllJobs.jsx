import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/alljobsBanner.jpg';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiMoneyBill } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import useJobsCategoryData from '../../Hooks/useJobsCategoryData';

const AllJobs = () => {
     const jobsCategory = useJobsCategoryData()
     const [search, setSearch] = useState('')
     const [searchBtn, setSearchBtn]= useState('');


    const handleSearch = (searchBtn)=>{
            setSearch(searchBtn)
          
    
    }
      
     return (
          <div className='px-8 md:px-16 lg:px-20 dark:bg-[#242323]'>
               
               <div className="">
      <div className="carousel w-full h-[180px] md:h-[300px] rounded-xl">
        <div className="carousel-item relative w-full">
          
          <img
            src={Banner}
            className="w-full  object-cover"
          />
          <div className="absolute h-full w-full  left-0 top-0 bg-gradient-to-r from-[#439ae7de] to-[#adabab2c] ">
            <div className=" text-white space-y-3 md:space-y-7 w-2/4 ml-5 mt-10 md:ml-16 md:mt-28 ">
              <div className=" mx-auto">
                              
               <form className=' w-[315px] md:w-[500px] lg:w-full  mt-20 lg:mt-10 lg:ml-40'>   
               <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
               <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                         </svg>
                    </div>
                    <input onChange={(e)=>{setSearchBtn(e.target.value)}} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#3994e4] focus:border-[#3994e4] dark:bg-[#242323] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3994e4] dark:focus:border-[#3994e4]" placeholder="Search Jobs . . ." required />
                    <Link>
                    <button onClick={()=>handleSearch(searchBtn)} type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#3994e4] hover:bg-[#2b6ba3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#3994e4] dark:hover:bg-[#2a6eaa] dark:focus:ring-[#3994e4]">Search</button>
                    </Link>
               </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
               <div  className=' grid lg:grid-cols-2 gap-10 py-8'>
               {
                    jobsCategory?.filter((job)=>{

                         if(search == ""){
                              return job;
                         }else if (job?.jobTitle.toLowerCase().includes(search.toLowerCase())){
                              return job ;
                         }
                    })?.map(job=>{
                         return <div key={job._id} className="card card-side bg-base-100 border-2 dark:bg-gray-400 dark:text-white p-5 border-[#3994e4] shadow-xl ">
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
                             <Link to={`/alljobs/${job._id}`}><button  className=" bg-[#3994e4] text-white p-2  px-7 rounded-md hover:text-black">View Details</button></Link>
                             </div>
                             <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
                           </div>
                         </div>
                       </div>
                    })
                   
               }  
               </div>
               
          </div>
     );
};

export default AllJobs;

  