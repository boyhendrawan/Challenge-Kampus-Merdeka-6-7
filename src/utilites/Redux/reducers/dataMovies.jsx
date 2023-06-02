import { createSlice } from '@reduxjs/toolkit'

const initialState={
    data:null,
    dataSearch:null,
    dataDetail:null,
}
const dataMovies=createSlice({
    name:"movies",
    initialState,
    reducers:{
        setData(state,action){
            state.data=action.payload;
        },
        setDataSearch(state,action){
            state.dataSearch=action.payload;
        },
        setDataDetail(state,action){
            state.dataDetail=action.payload.data;
        },
        clearDataDetail(state){
            state.dataDetail=null;
        }
    }
});
export default dataMovies.reducer;
export const{setData,setDataSearch,setDataDetail,clearDataDetail}=dataMovies.actions;