import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';

const Root = () => {
     const location = useLocation();
     const [theme, setTheme] = useState('light')

     useEffect(()=>{
          document.body.className = theme ;
     },[theme])

     useEffect(()=>{
          if(location.pathname === '/'){
               document.title = 'Searching Jobs | Home'
          }else{

               document.title =`Searching Jobs ${location.pathname.replace('/',' | ')}` 
          }
     },[location.pathname])
     return (
          <div className=" font-poppins">
               <Navbar theme={theme} setTheme={setTheme}></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
               <ToastContainer />
          </div>
     );
};

export default Root;