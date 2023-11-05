import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";

const Root = () => {
     const [theme, setTheme] = useState('light')

     useEffect(()=>{
          document.body.className = theme ;
     },[theme])
     return (
          <div className=" font-poppins">
               <Navbar theme={theme} setTheme={setTheme}></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Root;