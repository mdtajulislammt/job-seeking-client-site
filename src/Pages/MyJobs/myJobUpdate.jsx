import React, { useContext, useState } from 'react';
import jobsBanner from '../../assets/addajobBanner.avif'
import { AuthContext } from '../../Providers/AuthProvider';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const myJobUpdate = () => {
     const { user} = useContext(AuthContext);
     const [postingDate, setPostingDate] = useState(new Date());
     const [deadline, setDeadline] = useState(new Date());
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

          const newAdd = {jobTitle,email,name,category,deadline,postingDate,applicantsNumber,salaryRange,description,img};
          
             //server 
     fetch("http://localhost:5000/jobCetagory",{
          method:"PUT",
          headers:{
               "Content-Type": "application/json",
          },
          body: JSON.stringify(newAdd),
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
     
          
      <div className="bg-[#3994e4] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="">
            <img src={jobsBanner} alt="" className=' h-full object-cover w-full' />
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label htmlFor="email" className=' text-white font-semibold'>Job Title</label>
                <input type="name" name="jobTitle" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
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
                <DatePicker selected={postingDate} onChange={(date) => setPostingDate(date)} className="h-10  border mt-1 rounded px-4 w-full bg-gray-50" />
                
              </div>
              
              <div className="md:col-span-1">
                <label htmlFor="city" className=' text-white font-semibold'>Date Line</label>
                <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} className="h-10  border mt-1 rounded px-4 w-full bg-gray-50" />
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
                  <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">Add</button>
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

export default myJobUpdate;
