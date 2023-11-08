import React from 'react';
import tranding1 from '../../assets/tranding1.jpg'
import tranding2 from '../../assets/hiring_img2.jpg'
import tranding3 from '../../assets/hiring_img4.jpg'
import tranding4 from '../../assets/tranding4.jpg'
import tranding5 from '../../assets/tranding5.jpg'
import Marquee from "react-fast-marquee";

const TrandingJobs = () => {
     return (
          <div className=' flex items-center justify-between rounded-xl  my-10 border md:mx-20 mx-10 lg:mx-28 '>
               <h2 className=' rounded-l-lg text-2xl bg-[#3994e4] border-r p-5 text-white '>Tranding Jobs Company</h2>
               
                 <Marquee >
                    <div className=' flex justify-between md:gap-28'>
                       <img src={tranding1} alt="" className=' w-full' />
               <img src={tranding2} alt="" className=' w-full' />
               <img src={tranding3} alt="" className=' w-full' />
               <img src={tranding4} alt="" className=' w-full'/>  
               <img src={tranding5} alt="" className=' w-full'/>  
                    </div>
               
                </Marquee>   
               
               
               
          </div>
     );
};

export default TrandingJobs;