import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import { todoSlice } from "./userSlice/Reducer";
export  const store = configureStore({
  reducer: {
    favorite: todoSlice,
    user: userReducer,
  },
});
