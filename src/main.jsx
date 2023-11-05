import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Providers/AuthProvider';
import LogIn from './Pages/Home/LogIn';
import SingUp from './Pages/Home/SignUp';
import AllJobs from './Pages/AllJobs/AllJobs';
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs';
import MyJobs from './Pages/MyJobs/MyJobs';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Addajobs from './Pages/Addajobs/Addajobs';
import PrivedRoute from './PrivedRoute/PrivedRoute';

 
 const router = createBrowserRouter([
  {
  path: "/",
  errorElement:<ErrorPage/>,
  element: <Root></Root>,
  children:[
    {
      path: "/",
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<LogIn></LogIn>
    },
    {
      path:'/signup',
      element:<SingUp></SingUp>
    },
    {
      path:'/alljobs',
      element:<AllJobs></AllJobs>
    },
    {
      path:'/appliedjobs',
      element:<PrivedRoute><AppliedJobs></AppliedJobs></PrivedRoute>
    },
    {
      path:'/addajobs',
      element:<PrivedRoute><Addajobs></Addajobs></PrivedRoute>
    },
    {
      path:'/myjobs',
      element:<PrivedRoute><MyJobs></MyJobs></PrivedRoute>
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    
  ]
   },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
