import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const conterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});
export const { increment, decrement } = conterSlice.actions;
export default conterSlice.reducer;
console.log(conterSlice);