import { useEffect, useState } from 'react'
import { login ,logout } from './store/slice'
import { useDispatch } from "react-redux"
import { authservice } from './service/auth';
import {BrowserRouter, Route , Routes} from 'react-router-dom'
function App() {
  const [loading , setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    ()=>{
      setLoading(true);
      authservice.getUser()
      .then((userData)=>{
        if(userData){
          dispatch(login(userData));
        }
        else{
          dispatch(logout());
        }
      })
      .catch((e)=>console.log("error in getting userData =>" , e))

      .finally(() => setLoading(false))
    } , []
  )

  if(loading) return <div>Loading....</div>

  return (
    <div className='min-h-screen'> 
          <h1>hey there!!</h1>

    </div>
  )
}

export default App
