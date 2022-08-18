import { configureStore } from "@reduxjs/toolkit";
import covidSliceReducer from "../features/covid/covidSlice";

export const store = configureStore({
  reducer: {
    covid: covidSliceReducer,
  },
});
