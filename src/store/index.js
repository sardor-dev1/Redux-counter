import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../CounterSlice";
import colorSlice from "../ColorSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    color: colorSlice,
  },
});
