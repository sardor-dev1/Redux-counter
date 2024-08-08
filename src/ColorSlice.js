import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    bgColor: "bg-black", 
  },
  reducers: {
    changeColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
