import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,Outlet } from 'react-router-dom';

function Protected() {
    // define navigation 
    const navigate=useNavigate();
    // define global var to proved the use has been login
    const { isLoggedIn,token}=useSelector(features=>features.barerToken);
    //checked if user loggin or not
    useEffect(()=>{
        if(!(isLoggedIn && token)) return navigate("/login");
    },[isLoggedIn,token,navigate]);
    

    // called all children here
    return <Outlet/>
}

export default Protected