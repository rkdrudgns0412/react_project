import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isSelectIn: false,
  // isAdmin: false,
  // user : {
  //   name : 'anonimoususer'
  // }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },

    selects: (state, action) => {
      state.isSelectIn = true;
    },
    noselects: (state, action) => {
      state.isSelectIn = false;
    },
  },
});

export const { login, logout, selects, noselects } = authSlice.actions;
export default authSlice.reducer;
