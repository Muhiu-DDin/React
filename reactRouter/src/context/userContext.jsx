import {createContext } from "react";
import { useState , useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseInit";


export const UserCont = createContext();

function UserContProvider({children}){
  const [user , setUser] = useState({
    login : false ,
    userDetail : {}
  });

function authChange(user){
  if(user){
    console(user);
    setUser({...user , login : true})
  }
  else{
    console.log("not user is active")
  }
}

useEffect(
  ()=>{
    onAuthStateChanged(auth, authChange)
  } , []
)

return(
  <UserCont.Provider value={{user , setUser}}>
    {children}
  </UserCont.Provider>
)
}
export default UserContProvider