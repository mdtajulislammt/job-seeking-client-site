import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { CiMoneyBill } from 'react-icons/ci';
import { ImLocation2 } from 'react-icons/im';
import { SlCalender } from 'react-icons/sl';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Banner from '../../assets/viewDetailsBanner.jpg'
import useJobsCategoryData from '../../Hooks/useJobsCategoryData';
import apply from "../../assets/applyslid.jpg"
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AllJobDetails = () => {
  const { user } = useContext(AuthContext);
     const {id} = useParams();
     const [JobCard, setJobCard] = useState({});
     const jobsCategory = useJobsCategoryData();
     const {_id,name,email,img,jobTitle,category,location,postingDate,deadline,salaryRange,applicantsNumber,description} = JobCard || {};
     const currentTime = Date.now();
     const specificDate = new Date(deadline);
     useEffect(()=>{
          const findJobData = jobsCategory?.find(job =>job._id == id)
          setJobCard(findJobData)

     },[id,jobsCategory])

     const handleSubmitApply=(e)=>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const name = form.name.value;
      const link = form.link.value;
      const details = form.details.value;
      const postId = _id;
      

      const newJobApply = {email, name,postId, link, details,img,jobTitle,category,location,postingDate,deadline,salaryRange,applicantsNumber,description}
      console.log(newJobApply);

      if(user.email === email){
        Swal.fire({
          title: "Error !",
          text: "Do not Apply For Your job Post",
          imageWidth: 400,
          imageHeight: 200,
          icon: 'error',
        });
        document.getElementById('my_modal_4').close();
        form.reset();
        return 
      }

      if(currentTime > specificDate.getTime()){
        Swal.fire({
          title: "Error !",
          text: "Your Apply Date Over.",
          imageWidth: 400,
          imageHeight: 200,
          icon: 'error',
        });
        document.getElementById('my_modal_4').close();
        form.reset();
        return 
      }

       //server 
     fetch("http://localhost:5000/apply",{
      method:"POST",
      headers:{
           "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobApply),
 })
 .then(res=>res.json())
     .then(data=>{
     
      if(data.insertedId){
      Swal.fire({
        title: "Success",
        text: "Your Apply Successfully.",
        imageWidth: 400,
        imageHeight: 200,
        icon: 'success',
      });
      form.reset()
      document.getElementById('my_modal_4').close();
      }
      
     })
      
     }

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
        <div className="absolute h-full w-full  left-0 top-0  ">
            <div className=" text-white space-y-3 md:space-y-7 w-2/4 ml-5 mt-10 md:ml-16 md:mt-28 ">
              <div className=" mx-auto">
                              
               <form className=' w-[315px] md:w-[500px] lg:w-full  mt-20 lg:mt-10 lg:ml-40'>   
               <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
               <h2 className=" text-4xl font-bold">{jobTitle}</h2>
               </form>
              </div>
            </div>
          </div>
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
                  <p className="flex mb-5 md:mb-0 items-center gap-2 dark:text-white text-gray-500 font-semibold text-[12px] md:text-[13px]"><span><SlCalender  className=" text-black text-[8px] md:text-[16px] mb-1 dark:text-white"/></span> <span>Posting Date: {postingDate}</span></p>
                </div>
                </div>
              </div>

              <Link  onClick={()=>document.getElementById('my_modal_4').showModal()} className=" bg-[#3994e467]  md:-mt-[165px] md:-mr-5 lg:-mt-[145px] lg:-mr-5  text-2xl font-semibold rounded-md p-2">Apply</Link>

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="my_modal_4" className="modal ">
                <div className="modal-box  p-0 dark:bg-black">
                
                  
                <form onSubmit={handleSubmitApply} className=''>    
<div className=" rounded-xl  dark:bg-black bg-gray-100 flex items-center justify-center">
  <div className=" ">
    <div>
     
          
      <div className="bg-[#3994e4] rounded shadow-lg p-4 px-4 md:p-8 ">
        <div className="grid gap-4 gap-y-2  text-sm grid-cols-1 lg:grid-cols-3">
          <div className="">
            <img src={apply} alt="" className=" h-full object-cover" />
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label htmlFor="email" className=' text-white font-semibold'>Email</label>
                <input type="email" defaultValue={user.email}  name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>
            

              <div className="md:col-span-5">
                <label htmlFor="name" className=' text-white font-semibold'></label>
                <input type="text" defaultValue={user.displayName}  name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="address" className=' text-white font-semibold'>Resume link</label>
                <input type="text" name="link" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>

              
              <div className="md:col-span-5">
                <label htmlFor="country" className=' text-white font-semibold'>Details</label>
                <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <textarea name="details" id="country"className="p-2 h-28 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                </div>
              </div>
             

      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end gap-3">
                  <input type="submit" value="Submit"  className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded"/>
                <form method="dialog">
      
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
                 </form>
                </div>
              </dialog>

            

              </div>
              <h1 className=" text-xl font-semibold mt-4">
                  {description}
                </h1>
            </div>
          </div>
     );
};

export default AllJobDetails;


//  Modal toggle 
{/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}

//  Main modal 
{/* <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>  */}

