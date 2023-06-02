
import axios from "axios";
import { login as fLogin, setUser, setIsLoggedIn, logout as fLogout } from '../reducers/barerToken';
import { toast } from "react-toastify";

export const login = (data, navigate, resetUsername, resetPassword) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}auth/login`,
      {
        email: data.valueUsername,
        password: data.valuePassword
      },
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data?.data;

    dispatch(fLogin(token));
    dispatch(setIsLoggedIn(true));
      
    // reset password and useranme
    resetUsername();
    resetPassword();
    // redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const logout = (navigate) => {
  return (dispatch) => {
    console.log("masuk");
    dispatch(fLogout());
    dispatch(fLogin());
    dispatch(setIsLoggedIn(false));
    navigate("/login");
  }
}
export const getProfile = (setLoading) => {

  return async (dispatch, getState) => {
    try {
      const { token } = getState().barerToken;

      const response = await axios.get(`${process.env.REACT_APP_POSTS_API}auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log(response);
      dispatch(setUser(response?.data));

    } catch (error) {
      // console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }
    }
    // set the loading to be false
    setLoading(false);
  }
}

export const googleLogin = (data, navigate) => async (dispatch) => {

  console.log(data, navigate);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}auth/google`, data,
      { "Content-Type": "application/json" }
    );
    const { token } = response?.data?.data;

    dispatch(fLogin(token));
    dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const register = (data, navigate,resetUsername,resetPassword,resetName,setRequest) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}auth/register`,
      data,
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data?.data;

    dispatch(fLogin(token));
    dispatch(setIsLoggedIn(true));
    // reset al field
    resetName();
    resetUsername();
    resetPassword();
    // redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
  // if request has done
  setRequest(false);
};
