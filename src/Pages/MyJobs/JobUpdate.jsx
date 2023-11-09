import React, { useContext, useState } from 'react';
import jobsBanner from '../../assets/addajobBanner.avif'
import { AuthContext } from '../../Providers/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useJobsCategoryData from '../../Hooks/useJobsCategoryData';
import { useEffect } from 'react';

const JobUpdate = () => {


  const [jobsCategory, setJobsCategory] = useState([])
  const [jobs, setJobs] = useState([])
  console.log(jobsCategory);
  const {id} = useParams();
  console.log(id);
  useEffect(()=>{
    fetch(`https://job-seeking-server-site.vercel.app/jobCetagory/`)
    .then(res => res.json())
    .then(data => setJobsCategory(data))
},[])

  useEffect(()=>{
    const jobs = jobsCategory.find(job => job._id === id)
    setJobs(jobs)
},[])
console.log(jobs);



     const { user} = useContext(AuthContext);

     const [postingDate, setPostingDateIn] = useState(new Date());
     const [deadlineIn, setDeadlineIn] = useState(new Date());
     const applicantsNumber = 0
     const email = user.email
     const handleAddJob =(e)=>{
          e.preventDefault();
          const form = e.target;
          const jobTitle = form.jobTitle.value;
          const name = form.name.value;
          const category = form.category.value;
          const salaryRange = form.salaryRange.value;
          const description = form.description.value;
          const img = form.img.value;

          const postingDate = deadlineIn.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          const deadline = deadlineIn.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          
          const newUpdate = {jobTitle,email,name,category,deadline,postingDate,applicantsNumber,salaryRange,description,img};
          
             //server 
     fetch(`https://job-seeking-server-site.vercel.app/jobCetagory/${id}`,{
          method:"PUT",
          headers:{
               "Content-Type": "application/json",
          },
          body: JSON.stringify(newUpdate),
     })
     .then(res=>res.json())
     .then(data=>{
      if(data.matchedCount){
          Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Product Added Success',
               showConfirmButton: false,
               timer: 1500
             })
      }
      
     })   
     }
     return (
          <div>
            
                <form onSubmit={handleAddJob}>    
<div className=" p-6  bg-gradient-to-t from-[#439ae7de] to-[#adabab2c] dark:bg-black flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
     
     <div className=' flex items-center justify-between'>
      <h2 className=' text-2xl font-bold  my-3'>Update Job</h2>
      <Link to={'/myjobs'} className=' bg-[#3994e4] text-white p-1 rounded-md px-5'>Back</Link>
     </div>
          
      <div className="bg-[#3994e4] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="">
            <img src={jobsBanner} alt="" className=' h-full object-cover w-full' />
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label htmlFor="email" className=' text-white font-semibold'>Job Title</label>
                <input type="name" defaultValue={''} name="jobTitle" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email" className=' text-white font-semibold'>Full Name</label>
                <input type="text" name="name" defaultValue={user.displayName} id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address" className=' text-white font-semibold'>Job Category</label>
                <select name="category" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                    <option value="On Site Job">On Site Job</option>
                    <option value="Remote Job">Remote Job</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="city" className=' text-white font-semibold'>Posting Date</label>
                <DatePicker selected={postingDate} onChange={(date) => setPostingDateIn(date)} className="h-10  border mt-1 rounded px-4 w-full bg-gray-50" />
                
              </div>
              
              <div className="md:col-span-1">
                <label htmlFor="city" className=' text-white font-semibold'>Date Line</label>
                <DatePicker selected={deadlineIn} onChange={(date) => setDeadlineIn(date)} className="h-10  border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>
              
              <div className="md:col-span-5">
                <label htmlFor="city" className=' text-white font-semibold'>Salary Range</label>
                <input type="text" name="salaryRange" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="country" className=' text-white font-semibold'> description</label>
                <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <textarea name="description" id="country"className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"></textarea>
                </div>
              </div>

              
              <div className="md:col-span-5">
                <label htmlFor="state" className=' text-white font-semibold'>Image</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="img" id="state"  className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                  
                </div>
              </div>

      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <input type="submit" value="Update" className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded"/>
                  
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
     );
};

export default JobUpdate;