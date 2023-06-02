
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from "./Router";
import { Provider } from 'react-redux';
import store from "./utilites/Redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
// import {ToastContianer} from "react-toastify";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <RouterProvider router={Router}/>
      <ToastContainer theme="colored"/>
    </GoogleOAuthProvider>
  </Provider> 
}

export default App;
