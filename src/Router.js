import React from 'react';
import {createBrowserRouter} from "react-router-dom";
// import Index from './pages/Index';
// import Index from './pages';
import Index from './pages/index.js';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DetailMovie from './pages/DetailMovie.jsx';
import Protected from './components/Protected.jsx';
import ProctectedLogin from './components/ProctectedLogin.jsx';
import Register from "./pages/Register.jsx";
import ErrorPage from './pages/ErrorPage.jsx';
import SearchMovie from './pages/SearchMovie.jsx';

// handle router
const router= createBrowserRouter([
  {
    path:"/",
    element:<Index/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      },
     
    ]
  },
  {
    path:"/movies",
    element:<Protected/>,
    children:[
      {
        path:"detail/:idData",
        element:<DetailMovie/>
      },
      {
        path:"search",
        element:<Index/>,
        children:[
          {
            index:true,
            element:<SearchMovie/>
          }
        ]
      }
    ]
  },
  {
    path:"/login",
    element:<ProctectedLogin><Login/></ProctectedLogin>
  },
  {
    path:"/register",
    element:<Register/>
  }
  ]);

  export default router;
