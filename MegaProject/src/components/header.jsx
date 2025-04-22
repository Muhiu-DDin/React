import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "./logout";


function Header(){
    const navigate = useNavigate()

  const isActive =   useSelector((state)=>state.user.status);
    const navItems = [
        {
            name : "Home" ,
            slug : "/",
            active : true
        } ,
        {
            name : "Sign up" ,
            slug : "/signup",
            active : !isActive
        },        {
            name : "Login" ,
            slug : "/login",
            active : !isActive
        }
        ,
        {
            name : "Add Post" ,
            slug : "/addpost",
            active : isActive
        },
        {
            name : "All Post" ,
            slug : "/allpost",
            active : isActive
        }
    ]

    return(
        <div>
        <nav>
            <ul>
                {
                    navItems.map(
                        (item , index)=>{
                            return item.active ?(
                            <li key={index}>
                            <button  onClick={()=> navigate(item.slug)} 
                            className="px-3 py-2 text-white bg-blue-600 rounded-md">
                            {item.name}
                            </button>
                            </li>
                            ) : null
                        }
                    )
                    
                 }
                 {
                    isActive && (
                    <li>  <LogoutBtn/> </li>
                )
                 }
            </ul>

        </nav>
        </div>
    )
}