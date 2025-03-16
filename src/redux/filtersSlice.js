import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const selectNameFilter = (state) => state.filter;
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
