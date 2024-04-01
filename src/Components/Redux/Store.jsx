import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/Slice/TodoSlice";


export const store = configureStore({
    reducer : {todoReducer},
})