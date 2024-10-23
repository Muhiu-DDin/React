import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function AuthenticationBlock() {
  const navigate = useNavigate(); 
  const handleSignin = () => navigate("/auth/signin");
  const handleSignup = ()=> navigate("/auth/signup");
  const navigateBack = () => navigate("/");
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-800">
      <div className="mt-10 mx-auto w-[25rem] flex flex-col border rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center mt-5 mb-4 text-gray-900 dark:text-white">Authentication</h2>
        <p className="mt-12 text-gray-600 dark:text-gray-400 text-center mb-6">
          Please sign in to access your account, or sign up if you're new to our platform. 
          We value your privacy and ensure a secure experience.
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <button 
            onClick={handleSignin} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Sign In
          </button>
          <button onClick={handleSignup} className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
        <button onClick={navigateBack} className="mt-10 flex items-center text-blue-500 bg-transparent border-none cursor-pointer dark:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
            viewBox="0 0 24 24"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </button>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthenticationBlock;
