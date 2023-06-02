import React, { useState } from 'react';
import useInput from '../utilites/customHooks/use-input';
import { useDispatch } from "react-redux";
import { register } from '../utilites/Redux/action/login';
import { useNavigate,Link } from 'react-router-dom';
import Alert from '../components/alert/alert';
import { toast } from "react-toastify";
import GoogleLoginPage from '../components/GoogleLoginPage';

function Register() {
  // define distpach for get global function
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // define for alert is worng
  const [failedLogin, SetFailedLogin] = useState(false);
  const [requestRegister,setRequest]=useState(false);

  const {
    value: valueUsername,
    isInvalid: invalidUsername,
    handlerBlur: handleBlurUsername,
    handlerChange: handleChangeUsername,
    reset: resetUsername
  } = useInput(e => e.includes("@"));
  const {
    value: valuePassword,
    isInvalid: invalidPassword,
    handlerBlur: handleBlurPassword,
    handlerChange: handleChangePassword,
    reset: resetPassword
  } = useInput(e => e.length > 3);
  const {
    value: valueName,
    isInvalid: invalidName,
    handlerBlur: handleBlurName,
    handlerChange: handleChangeName,
    reset: resetName
  } = useInput(e => e.length > 3);
  //handle when close clicked
  const handlerCloseAlert = (e) => {
    const element = e.target.parentElement;
    element.classList.add("opacity-0")
    // console.log(e);
    setTimeout(() => {
      SetFailedLogin(false);
    }, 320)
  }
  // handle when submit clicked
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (valueUsername.length <= 0 || valuePassword.length <= 0) return toast.error("You must add all of input", { position: toast.POSITION.TOP_CENTER });
    const data={name:valueName,email:valueUsername,password:valuePassword}
    setRequest(true);
    dispatch(register(data, navigate, resetUsername, resetPassword,resetName,setRequest));
  }
  return (
    <>
    <div className='flex w-full absolute h-full justify-center items-center overflow-hidden'>
      <span className='bg-animation fill-mode-forwards'></span>
    </div>
    <div className='absolute w-full h-full  bg-white/60 backdrop-blur-md '>
      <div className='container mx-auto h-full font-main z-20'>
        <div className='grid grid-cols-1 h-full justify-items-center  content-center px-4'>
          <div className='bg-slate-50 shadow-md p-5 rounded-lg w-full max-w-lg '>
            <h1 className='mb-5  text-center text-2xl font-bold tracking-wider '>Register Account </h1>
            {failedLogin && <Alert onClose={handlerCloseAlert} className="bg-rose-700  text-white" classNameBtn=" text-rose-200 hover:text-rose-500 hover:bg-rose-200">
              Error ,Filed check again Username and password
            </Alert>}
            <form onSubmit={handlerSubmit}>
            <div className='flex flex-col w-full h-full'>
                <label className='mb-2 font-normal text-lg'>Your Name</label>
                <input type='text' name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 block w-full p-2.5 " onChange={handleChangeName} onBlur={handleBlurName} value={valueName} placeholder="put your Name" />
                {invalidName && < p className="message-error-input">your name must more than 3 words</p>}
              </div>
              <div className='flex flex-col w-full h-full'>
                <label className='mb-2 font-normal text-lg'>Email</label>
                <input type='email' name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 block w-full p-2.5 " onChange={handleChangeUsername} onBlur={handleBlurUsername} value={valueUsername} placeholder="put your username" />
                {invalidUsername && < p className="message-error-input">your Email must includes @</p>}
              </div>
              <div className='flex flex-col w-full h-full'>
                <label className='mb-2 font-normal text-lg'>Password</label>
                <input type='password' name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 block w-full p-2.5 " onChange={handleChangePassword} onBlur={handleBlurPassword} value={valuePassword} placeholder="put your Passowrd...." />
                {invalidPassword && < p className="message-error-input">your password must grater than 3 words</p>}
              </div>
              <div className='mt-4 flex justify-end'>
             
                {requestRegister && "loading"}
                {!requestRegister && 
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Daftar</button>
                }
            </div>
           
            </form>
            <div className='grid grid-cols-1 justify-items-center gap-x-4 w-full'>
              <GoogleLoginPage>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 48 48">
                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Continue With Google
              </GoogleLoginPage>
              <p className='text-center mb-5 mt-3'>Already Have Account <span> <Link className='text-blue-500 hover:text-blue-800' to="/login">Login</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register