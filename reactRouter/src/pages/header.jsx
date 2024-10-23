import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { userContext } from "../context/userContext";
import ThemeBtn from "./themebtn";

function Header() {
  // const {userName} =  useContext(userContext);
  return (
    <header className="body-font bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <NavLink to="/" className="cursor-pointer ml-3 text-xl dark:text-white">BOoksShelf</NavLink>
        </div>
        <nav className="dark:text-white md:ml-auto md:mr-auto flex flex-wrap gap-10 items-center text-base justify-center">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-blue-800 mr-5 dark:text-white cursor-pointer font-semibold ${isActive ? "text-black" : "hover:text-gray-900"}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="auth"
            className={({ isActive }) => 
              `text-blue-800 dark:text-white mr-5 cursor-pointer font-semibold ${isActive ? "text-black" : "hover:text-gray-900"}`
            }
          >
            Auth
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => 
              `text-blue-800 mr-5 dark:text-white cursor-pointer font-semibold ${isActive ? "text-black" : "hover:text-gray-900"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => 
              `text-blue-800 mr-5 cursor-pointer dark:text-white font-semibold ${isActive ? "text-black" : "hover:text-gray-900"}`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        <div>
          <NavLink
            to="/auth/signin"
            className={({ isActive }) => 
              `text-blue-800 mr-5 cursor-pointer dark:text-white font-semibold text-right ${isActive ? "text-black" : "hover:text-gray-900"}`
            }
          >
            <span className="dark:text-white">Sign in</span>
          </NavLink>
          <ThemeBtn/>
        </div>
      </div>
    </header>
  );
}

export default Header;
