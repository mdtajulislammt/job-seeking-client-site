import { useState } from "react";
import { useParams } from "react-router-dom";
import useJobsCategoryData from "../../Hooks/useJobsCategoryData";
import { useEffect } from "react";
import apply from "../../assets/applyslid.jpg"

const ApplyJobs = () => {
     const {id} = useParams();
     const [JobCard, setJobCard] = useState({});
     const jobsCategory = useJobsCategoryData();
     const {name,img,jobTitle,category,location,postingDate,deadline,salaryRange,applicantsNumber,description} = JobCard || {};

     useEffect(()=>{
          const findJobData = jobsCategory?.find(job =>job._id == id)
          setJobCard(findJobData)

     },[id,jobsCategory])
     return (
          <div>
               <div>
              <form onSubmit={''}>    
<div className="min-h-screen p-6 dark:bg-black bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
     
          
      <div className="bg-[#3994e4] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="">
            <img src={apply} alt="" className=" h-full object-cover" />
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label htmlFor="email">Product Name</label>
                <input type="name" defaultValue={''}  name="name" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email">Brand Name</label>
                <input type="text" defaultValue={''}  name="brandname" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Product Type</label>
                <input type="text" defaultValue={''}  name="type" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">Price</label>
                <input type="text" defaultValue={''}  name="price" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-4">
                <label htmlFor="state">Image</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="img" defaultValue={''}  id="state"  className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                  
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="state">Rating</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="rating" defaultValue={''}  id="state"  className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                  
                </div>
              </div>
              
              <div className="md:col-span-5">
                <label htmlFor="country">Short description</label>
                <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <textarea name="description" defaultValue={''}  id="country"className="p-2 h-28 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                </div>
              </div>
             

      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">Submit</button>
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
          </div>
     );
};

export default ApplyJobs;