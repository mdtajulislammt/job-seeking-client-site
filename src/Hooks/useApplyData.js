import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useApplyData = () => {
     const [applyData, setApplyData] = useState();

  useEffect(()=>{
     fetch('https://job-seeking-server-site.vercel.app/apply')
     .then(res=>res.json())
     .then(data=>setApplyData(data))
  },[])
     return applyData
     
};

export default useApplyData;