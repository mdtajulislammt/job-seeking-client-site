import React, { createContext, useEffect, useState } from 'react';
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const googleProvider = new GoogleAuthProvider();
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)

      //Google Account setup
      const signInWithGoogle = () => {
          setLoading(true)
         return signInWithPopup(auth, googleProvider)
     }

     // sign In
     const signIn = (email,password)=>{
          setLoading(true); 
          return signInWithEmailAndPassword(auth,email,password);
     }

     //SignUp 
     const createUser = (email,password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password);
     }

     

      //Update User Profile
      const updateUser = (name,img) =>{
          setLoading(true)
         return updateProfile(auth.currentUser, {
          displayName:name, photoURL:img
        })
     }

     //signOut
     const logOut = () =>{
          setLoading(true);
          return signOut(auth);
     }

     //current user
     useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser);
               //  console.log("Current user: ", currentUser);
                setLoading(false);
           })
           return ()=>{
                return unSubscribe();
           }
       },[])

     const authInfo = {
          signInWithGoogle,
          user,
          loading,
          logOut,
          signIn,
          createUser,
          updateUser
     }
     return (
          <AuthContext.Provider value={authInfo}> 
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;