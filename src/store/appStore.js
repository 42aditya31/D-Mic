import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import saveSlice from "./saveSlice";


const appStore = configureStore({
  reducer: {
   user: userSlice,
   post:postSlice,
   save:saveSlice
  },
});

export default appStore;
