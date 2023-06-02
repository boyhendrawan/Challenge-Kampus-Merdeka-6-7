import { combineReducers } from "@reduxjs/toolkit";
import barerToken from "./barerToken";
import dataMovies from "./dataMovies";
// console.log(barerToken)
export default combineReducers({
    barerToken,
    dataMovies,
})