import { configureStore } from "@reduxjs/toolkit"; //toollkit daha basit redux kullanımı sağlar
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


export default store;
