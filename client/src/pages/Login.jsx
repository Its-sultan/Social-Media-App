import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaRegUserCircle, FaUser,  } from 'react-icons/fa';
import { ImSpinner, ImSpinner3, ImSpinner4, ImSpinner5, ImSpinner6, ImSpinner7, ImSpinner8, ImSpinner9 } from 'react-icons/im';
import axios from 'axios';
import { userActions } from '../stores/user-slice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: ""})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate =useNavigate()
  const dispatch = useDispatch()

  //  function to change userdata
   const changeInputHandler = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  // function to login user 
  // const loginUser = async (e) => {
  //   e.preventDefault(); 

  //   try {
  //     await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, userData);
  //      if(response.status === "200"){
  //       dispatch(userActions.changeCurrentUser(response?.data))
  //       localStorage.setItem("currentUser", JSON.stringify(response?.data));
  //       toast.success("Login successful!");
  //       navigate("/");
  //      }

  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Something went wrong");
  //   }
  // }


  // console.log(userData)


   const loginUser = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, userData)
      if (response.status === 200) {
        dispatch(userActions.changeCurrentUser(response.data))
        localStorage.setItem("currentUser", JSON.stringify(response.data))
        toast.success("Login successful!")
        navigate("/")
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className=" flex justify-center items-center h-screen bg-gradient-to-r from-gray-100 to-gray-200">
       <div className="register_container bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    

          <h2 className='text-3xl text-teal-500 font-bold text-center mb-6'>
            <FaRegUserCircle className="inline-block mr-2 animate-pulse text-4xl text-teal-500 transition-transform duration-300 hover:rotate-12" />
            Sign In</h2>

           {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
           <form action="" className='space-y-5' onSubmit={loginUser}>
           

              {/* email */}
              <div className="relative">
                <FaEnvelope className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
             <input type="email" name="email" placeholder="Enter Your Email"  id="" onChange=
             {changeInputHandler} className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 '  />
               </div>


             <div className="password_controller relative">
              <FaLock className="absolute right-3 top-3 text-gray-400 hover:text-teal-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6" />
              <input type={showPassword ? "text" : "password"} name="password" placeholder='Enter Your Password ' id="" 
              onChange={changeInputHandler} className='w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ' />
              {/* <span onClick={() => setShowPassword(!showPassword)}  className="absolute right-3 top-2.5 text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye />}</span> */}
             </div>


             <button type="submit" className={` w-full flex items-center justify-center gap-2  bg-teal-600  text-white py-2 rounded-md transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-teal-700'} `}
              disabled={loading}> 
              
              {loading ? (
                <>
              <ImSpinner4 className="animate-spin text-center " />
              Signing in...
              </>
            ) : (
              <>
              Login
              </>
            )}
            
            </button>

             <p className="text-sm mt-4 text-center text-gray-600">Don't have an account? <Link to="/register" className='text-teal-600 hover:underline '>Sign up</Link> </p>
            
            
            
            </form>     
                
                </div>
    </section>
  )
}

export default Login