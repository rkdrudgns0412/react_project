import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const mySlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    addPost: (state, action) => {
      // 리스트에.push(새로운 데이터를)
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      state = action.payload;
    },
  },
});

export const { addPost, deletePost } = mySlice.actions;
export default mySlice.reducer;
