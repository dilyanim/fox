import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite:(state,action) =>{
      state.favorite.push(action.payload)
    }
  },
});

export default todoSlice.reducer;

export const {addToFavorite} = todoSlice.actions;
