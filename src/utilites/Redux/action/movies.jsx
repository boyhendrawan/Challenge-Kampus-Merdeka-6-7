import axios from "axios";
import { setData,setDataDetail,setDataSearch} from "../reducers/dataMovies";
import {toast} from "react-toastify";


export const getMovies=(setIsLoading,pages=1) =>{
    // declare redux thunk
    return async(dispatch)=>{
        // making request
        try{
            // request using axios
        const request=await axios.get(`${process.env.REACT_APP_POSTS_API}movie/popular?page=${pages}`);
        // to handle if request is not success
        if(request.status!==200) throw new Error("Sorry, got error when trying request data");
        // save data into redux
        dispatch(setData({data:request?.data?.data,page:request.data?.page,totalPages:request?.data?.total_pages}));
        }catch(error){
            // if error form axios
            if(axios.isAxiosError(error)){
                toast.error(error?.response?.message);
                return;
            }
            toast.error(error?.message);
        }
        setIsLoading(false);
    }
}
export const detailMovies =(id,setLoading)=> async(dispatch,getState)=>{

    try{
        // get token
        const {token}=getState().barerToken;
        // request 
        const request=await axios.get(`${process.env.REACT_APP_POSTS_API}movie/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
        });
        // if(request?.status !== 200) throw new Error("Error When accessed that");
         dispatch(setDataDetail({data:request?.data?.data}));

    }catch(error){
        // if error form axios
        if(axios.isAxiosError(error)){
            toast.error(error?.response?.message);
            return;
        }
        toast.error(error?.message);
    }
    setLoading(false);
}

export const searchMovies=(query="a",setIsLoading,page=1) =>{
    return async(dispatch)=>{
        try{
            const response = await axios.get(`${process.env.REACT_APP_POSTS_API}search/movie?query=${query}&page=${page}`);

            if(response?.status !==200) throw new Error("Error when try it");

            dispatch(setDataSearch(response?.data))
        }
        catch(error){
            // if error form axios
            if(axios.isAxiosError(error)){
                toast.error(error?.response?.message);
                return;
            }
            toast.error(error?.message);
        }
        setIsLoading(false);
    }
}