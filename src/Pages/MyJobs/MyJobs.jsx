import React, { useEffect, useState } from 'react';
import useJobsCategoryData from '../../Hooks/useJobsCategoryData';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ImLocation2 } from 'react-icons/im';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiMoneyBill } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const myJobs= useJobsCategoryData()
  const [jobs,setJobs]= useState([]);
  // const [updateJobs,setUpdateJobs] = useState(myJobs);

  useEffect(()=>{
    const newMyJobs = myJobs?.filter(job=>job.email === user.email)
    setJobs(newMyJobs)
  },[myJobs, user.email])
  console.log(jobs);



  const handleDelete = (_id) => {
    Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
       
         fetch(`http://localhost:5000/jobCetagory/${_id}`,{
              method: 'DELETE'
            

         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data);
              if(data.deletedCount>0){
                  Swal.fire(
                    'Deleted!',
                    'Your Job Post has been deleted.',
                  'success'
                  )
                  const remaining = jobs.filter(job =>job._id !==_id);
                  setJobs(remaining);
                  // setUpdateJobs(remaining)
              }

         })
         }
       })
   
}




  return (
   <div className=' grid lg:grid-cols-2 grid-cols-1 gap-8 py-10 lg:px-28 md:px-20 px-10'>
    {
    jobs?.map(job =>
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
    
          <div className='my-5  '>
          <Link  ><button  className=" bg-[#3994e4] text-white p-2 block  px-7 rounded-md hover:text-black">View Details</button></Link>
          <Link to={`/jobUpdate/${job._id}`} ><button  className=" bg-[#17d667] text-white p-2 block my-3 w-full px-7 rounded-md hover:text-black">Update</button></Link>
          <Link  ><button onClick={()=>handleDelete(job._id)} className=" bg-[#e43939] text-white p-2 block w-full px-7 rounded-md hover:text-black">Delete</button></Link>
          </div>
          </div>
          <p className="flex  items-center gap-2 dark:text-white text-gray-500 font-semibold mt-4 text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Date Line: {job.deadline}</span></p>
        </div>
      </div>
    </div>)
  }
   </div>
  );
};

export default MyJobs;