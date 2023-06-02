import{ useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';

function ProctectedLogin(props) {
    const {isLoggedIn,token}=useSelector(features=>features.barerToken);
    const Navigate=useNavigate();
    
    // handle is loggin with effet to make sure it first running when this file opened
    useEffect(()=>{
        if(isLoggedIn || token )Navigate("/");
    },[isLoggedIn,token,Navigate])
  return props.children;
}

export default ProctectedLogin