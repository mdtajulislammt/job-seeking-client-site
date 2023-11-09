import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs } from "react-tabs";
import { usePDF } from 'react-to-pdf';
import { AuthContext } from "../../Providers/AuthProvider";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
     const [applyJobs,setApplyJobs] = useState([])
     const [selectJob, setSelectJob] = useState([])
     const [filterData, setFilterData] = useState([])
     
console.log(selectJob);
     const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
     
   


     useEffect(()=>{
      axios.get('http://localhost:5000/apply')
      .then(res=>setApplyJobs(res.data))
 },[])

     useEffect(()=>{
       const filter = applyJobs?.filter(job=>job.name === user.displayName)

       setFilterData(filter)
     },[applyJobs,user])


     const handleJobsFilter =filter=>{
      if(selectJob){
        if(filter === 'all'){
          setSelectJob(filterData) 
         }
       else if(filter === 'On Site Job'){
        const onSiteJob = filterData.filter(job =>job.category === 'On Site Job' )
        setSelectJob(onSiteJob)
       }
       else if(filter === 'Remote Job'){
        const onSiteJob = filterData.filter(job =>job.category === 'Remote Job' )
        setSelectJob(onSiteJob)
       }
       else if(filter === 'Hybrid'){
        const onSiteJob = filterData.filter(job =>job.category === 'Hybrid' )
        setSelectJob(onSiteJob)
       }
       else if(filter === 'Part Time'){
        const onSiteJob = filterData.filter(job =>job.category === 'Part Time' )
        setSelectJob(onSiteJob)
       } }
      else{
        setSelectJob(filterData) 
      }
      
       
     }
     
     return (
      <div className="px-5 md:px-10 lg:px-20 grid lg:grid-cols-7 gap-5 dark:bg-black ">
      <div className=" lg:col-span-7 col-span-7 mt-20 mb-5">
      <Tabs>
      <div className=" lg:flex justify-between  items-center -mb-3">
        <h2 className=" text-2xl text-center lg:text-start uppercase font-bold border-b-2 border-[#3994e4] dark:text-white mb-5">
          Applied Jobs
        </h2>
        <div className=" flex justify-center -mt-2 ">
        
        
    <TabList className="bg-[#3994e4] text-white px-[4px] pt-2 rounded-t-lg">
      <Tab  onClick={()=>handleJobsFilter('all')}>all</Tab>
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
          selectJob.length == 0 ? <>{
            filterData?.map(job => <div key={job._id} className="card card-side bg-base-100 border-2 dark:bg-gray-400 dark:text-white p-5 border-[#3994e4] shadow-xl my-5">
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
                  <Link ><button onClick={() => toPDF()} className=" bg-[#3994e4] text-white p-2  px-7 rounded-md hover:text-black">Resume Download</button></Link>
                  </div>
                  <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
                  <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold  text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Posting : {job.postingDate}</span></p>
                  <div className=" hidden" ref={targetRef}>
                  {job.link}
                </div>
                </div>
              </div>
            </div>)}
          </>
          
          : 
          <>{
            selectJob?.map(job => 
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
                  <Link ><button onClick={() => toPDF()} className=" bg-[#3994e4] text-white p-2  px-7 rounded-md hover:text-black">Resume Download</button></Link>
                  </div>
                  <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
                  <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold  text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Posting : {job.postingDate}</span></p>
                  <div className=" hidden" ref={targetRef}>
                  {job.link}
                </div>
                </div>
              </div>
            </div>)}</>
          
        
        }
        
      </div>
      
      </Tabs>
      </div>
      
    </div>
     );
};

export default AppliedJobs;
