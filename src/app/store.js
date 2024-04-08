import { configureStore } from "@reduxjs/toolkit";
import Userslice from "../features/userslice";
import Adminslice from "../features/Adminslice";


export const store = configureStore({
  reducer: {
    user:Userslice,
    admin:Adminslice  
  },
});