import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useJobsCategoryData = () => {
     const [jobsCategory, setJobsCategory] = useState();

  useEffect(()=>{
     fetch('https://job-seeking-server-site.vercel.app/jobCetagory')
     .then(res=>res.json())
     .then(data=>setJobsCategory(data))
  },[])
  return jobsCategory ;
};

export default useJobsCategoryData;