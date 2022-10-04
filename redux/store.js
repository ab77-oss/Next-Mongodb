import { configureStore } from "@reduxjs/toolkit";
import carteReducer from "./cartSlice"

export default configureStore({
    reducer:{
        cart:carteReducer,
    },
});