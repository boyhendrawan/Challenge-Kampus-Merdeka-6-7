import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../utilites/Redux/action/login';
import { useNavigate } from 'react-router-dom';
const GoogleLoginPage = (props) => {
  // declare global fecthing Data
  const dispatch=useDispatch();
  const  navigate=useNavigate();

  const login=useGoogleLogin({
    onSuccess:(tokenResponse)=>{
      // decelare object access token
      const data={
        access_token:tokenResponse.access_token,
      }
      dispatch(googleLogin(data,navigate))
    },
});
  return (
    <button onClick={e =>login()} className='bg-white max-w-md shadow-lg hover:bg-slate-100 p-2 rounded-lg text-center flex justify-center gap-x-4'>
        {props.children}
    </button>
  )
}

export default GoogleLoginPage