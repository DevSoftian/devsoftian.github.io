import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./bugs";

export default configureStore({
   reducer: {
      counter: counterReducer,
   },
});
