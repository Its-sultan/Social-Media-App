// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useState } from 'react';
// import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaRegUserCircle, FaUser, FaUserAlt, FaUserPlus,  } from 'react-icons/fa';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// const Register = () => {
//   const [userData, setUserData] = useState({fullName: "", email: "",  password: "", confirmPassword: ""})
//   const [error, setError] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const navigate =useNavigate()


//   //  function to change userdata
//    const changeInputHandler = (e) => {
//     setUserData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }))
//   }
//   // function to register user   
//   const registerUser = async (e) => {
//     e.preventDefault(); 

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, userData);
//       if(response.status === "201"){
//         toast.success("Registration successful!");
//         navigate("/login");
//       } else {
//         toast.error("Registration failed. Please try again.");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   }








//   // console.log(userData)

//   return (
//     <section className=" flex justify-center items-center h-screen bg-gradient-to-r from-gray-100 to-gray-200">
//        <div className="register_container bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10">
    

//           <h2 className='text-3xl text-teal-500 font-bold text-center mb-6'>
//              <FaRegUserCircle className="inline-block mr-2 animate-pulse text-4xl text-teal-500 transition-transform duration-300 hover:rotate-12" />
//             Sign up</h2>

//            {/* {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>} */}
//            <form action="" className='space-y-5' onSubmit={registerUser}>
//             <div className="relative">

//              <FaUser className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
//              <input type="text" name="fullName" placeholder="Enter Your Fullname"  id="" onChange=
//              {changeInputHandler} autoFocus className='w-full  pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 '  />
            
//             </div>

//               {/* email */}
//               <div className="relative">
//                 <FaEnvelope className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
//              <input type="email" name="email" placeholder="Enter Your Email"  id="" onChange=
//              {changeInputHandler} className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 '  />
//                </div>


//              <div className="password_controller relative">
//               <FaLock className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
//               <input type={showPassword ? "text" : "password"} name="password" placeholder='Enter Your Password ' id="" 
//               onChange={changeInputHandler} className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ' />
//               {/* <span onClick={() => setShowPassword(!showPassword)}  className="absolute right-3 top-2.5 text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye />}</span> */}
//              </div>

//               <div className="password_controller relative">
//                 <FaLock className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
//               <input type={showPassword ? "text" : "password"} name="confirmPassword" placeholder='Confirm Your Password ' id="" 
//               onChange={changeInputHandler} className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ' />
//                {/* <span onClick={() => setShowPassword(!showPassword)}  className="absolute right-3 top-2.5 text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye />}</span> */}
//              </div>

//              <button type="submit" className='btn w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition duration-300'>Register</button>

//              <p className="text-sm mt-4 text-center text-gray-600">Already have an account? <Link to="/login" className='text-teal-600 hover:underline '>Sign in</Link> </p>
            
            
            
//             </form>     
                
//                 </div>
//     </section>
//   )
// }

// export default Register

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock, FaRegUserCircle, FaUser } from 'react-icons/fa';
import { ImSpinner2, ImSpinner4 } from 'react-icons/im';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const registerUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, userData);

      if (response.status === 201) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="register_container bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10">

        <h2 className='text-3xl text-teal-500 font-bold text-center mb-6'>
          <FaRegUserCircle className="inline-block mr-2 animate-pulse text-4xl text-teal-500 transition-transform duration-300 hover:rotate-12" />
          Sign up
        </h2>

        <form className='space-y-5' onSubmit={registerUser}>
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Fullname"
              onChange={changeInputHandler}
              autoFocus
              required
              className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={changeInputHandler}
              required
              className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              onChange={changeInputHandler}
              required
              className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Your Password"
              onChange={changeInputHandler}
              required
              className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`btn w-full bg-teal-600 text-white py-2 rounded-md transition duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-teal-700'}`}
          >
            {isLoading ? (
              <>
                <ImSpinner4 className="animate-spin text-lg" />
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>

          <p className="text-sm mt-4 text-center text-gray-600">
            Already have an account? <Link to="/login" className='text-teal-600 hover:underline'>Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Register;
