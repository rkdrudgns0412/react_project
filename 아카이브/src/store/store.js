import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./slices/authSlice";
import myReducer from "./slices/mySlice";
const store = configureStore({
  reducer: {
    auth: authReduce,
    click: myReducer,
  },
});

export default store;
