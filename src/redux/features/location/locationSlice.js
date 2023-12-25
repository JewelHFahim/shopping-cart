import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  division: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getDivision: (state, actions) => {
      state.division = actions.payload;
    },
  },
});

export const { getDivision } = locationSlice.actions;
export default locationSlice.reducer;
