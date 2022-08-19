import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCovidDataByCountry = createAsyncThunk(
  "covid/fetchData",
  async (countryName) => {
    if (countryName === "Global") {
      const response = await fetch(`https://covid19.mathdro.id/api`);
      const data = await response.json();
      const dailyResponse = await fetch("https://covid19.mathdro.id/api/daily");
      const dailyData = await dailyResponse.json();
      return { data, countryName, dailyData };
    }
    const response = await fetch(
      `https://covid19.mathdro.id/api/countries/${countryName}`
    );
    const data = await response.json();
    return { data, countryName };
  }
);

const initialState = {
  value: 0,
  country: "",
  covidData: null,
  dailyData: null,
  loading: false,
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCovidDataByCountry.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchCovidDataByCountry.fulfilled, (state, action) => {
        state.loading = false;
        // add data to state
        state.covidData = action.payload.data;
        state.country = action.payload.countryName;
        if (action.payload.dailyData) {
          state.dailyData = action.payload.dailyData;
        }
      });
  },
});

// Select covid
export const selectCovid = (state) => state.covid;

export default covidSlice.reducer;
