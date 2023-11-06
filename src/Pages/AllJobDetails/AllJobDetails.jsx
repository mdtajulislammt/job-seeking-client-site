import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AllJobDetails = () => {
     const {id} = useParams();
     const [JobCard, setJobCard] = useState({});
     const jobsCategory = useLoaderData();
     const {name,img,description} = JobCard || {};

     useEffect(()=>{
          const findJobData = jobsCategory?.find(job =>job._id == id)
          setJobCard(findJobData)

     },[id,jobsCategory])

     return (
          <div>
              <h1>{name}</h1> 
          </div>
     );
};

export default AllJobDetails;