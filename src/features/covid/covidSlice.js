import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  country: "",
  covidData: null,
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = covidSlice.actions;

// Select covid
export const selectCovid = (state) => state.covid;

export default covidSlice.reducer;
