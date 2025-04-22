import {authservice} from "../service/auth"
import { logout } from "../store/slice"
import { useDispatch } from "react-redux"

export function LogoutBtn(){
    const dispatch = useDispatch();

    const logoutHandler =()=>{
        authservice.logout().then(()=>dispatch(logout()))
    }

    return(
        <button className="px-3 py-2 text-white bg-blue-600 rounded-md" onClick={logoutHandler}>
            Logout
        </button>
    )
}