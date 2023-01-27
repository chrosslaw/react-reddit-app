import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    clearSearchTerm: (state) => (state = ""),
  },
});

export const { setSearchTerm, clearSearchTerm } = headerSlice.actions;

export const selectSearchTerm = (state) => state.search;

export default headerSlice.reducer;
