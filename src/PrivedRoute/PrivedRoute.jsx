import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import PropTypes from 'prop-types';


const PrivedRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     const location = useLocation()
     
      
     if(loading){
          
          return <div className="text-center  h-[550px] mt-64"><span className="loading loading-spinner loading-lg"></span></div>
          
     }

     if(user){
          return children ;
     }

     return <Navigate state={location} to='/login'></Navigate>
};




PrivedRoute.propTypes = {

children: PropTypes.node,
}

export default PrivedRoute;