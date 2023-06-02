import {  Fragment,useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getProfile } from '../utilites/Redux/action/login';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { logout } from '../utilites/Redux/action/login';

function Navbar() {
  const [btnHumberger, setBtnHumberger] = useState(false);
  const [isLoading,setLoading]=useState(true);
  // define global state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get data from global var 
  const { isLoggedIn, token,dataUser } = useSelector(features => features.barerToken);
  useEffect(() => {
    if (isLoggedIn && token){
      dispatch(getProfile(setLoading))
    }else{
      setLoading(false);
    }
    // else navigate("/login");
   
  }, [isLoggedIn, token, dispatch, navigate]);

  return (
    <nav className="bg-gradient-to-r from-transparent to-black fixed backdrop-blur-md md:bg-transparent dark:bg-gray-900   w-full z-20 top-0 left-0 ">
    <div className="max-w-screen-xl relative md:static flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink to="" className="flex items-center order-2 md:order-1">
        <span className=" text-textColor2 tracking-wider uppercase self-center text-2xl font-semibold whitespace-nowrap dark:text-white  transition-colors">Hesoyam </span>
      </NavLink>
      
     {!isLoading &&
        <div className="flex items-center h-full order-1 relative md:order-2 text-rose-800">
        {
          isLoggedIn &&
          <Menu as="div" className="flex items-center h-full" >
            <Menu.Button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-12 -right-[4.8rem] md:right-0 lg:-right-[2.5rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                <div className="px-1 py-1 ">
                <Menu.Item>
                     <p className='text-center my-2 mx-4 text-black'>Hallo,  <span className='font-bold'>{dataUser.data.name}</span></p>
                  </Menu.Item>
                  <Menu.Item className="flex justify-center">
                      <button
                      onClick={e=>dispatch(logout(navigate))}
                        className={` group flex w-full items-center text-left rounded-md pr-2 py-0.5 text-sm hover:bg-btnColor hover:text-white`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Logout
                      </button>
                  </Menu.Item>
                
                </div>

              </Menu.Items>
            </Transition>
          </Menu>
        }
        
       {!isLoggedIn && <Link to="/login" className='py-2 px-3 text-xs text-white bg-red-800 rounded-md hover:bg-red-900'> 
      login</Link>} 
        </div>
     }
      
      
      <button onClick={() => setBtnHumberger(current => !current)} className={` order-3 btn-mobile ${btnHumberger ? 'active' : ''}`} >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={` order-3 absolute  -bottom-[7rem] animate-[fadeUp_450ms_ease-in-out] right-0 md:static  transition-all items-center justify-between  w-full md:flex md:w-auto md:order-1 ${btnHumberger ? '' : 'hidden'}`} id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-none border-gray-100 md:rounded-lg bg-black/70 md:bg-transparent  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active navigation-link' : 'navigation-link'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/search" end className={({ isActive }) => isActive ? 'active navigation-link' : 'navigation-link'}>Search</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar