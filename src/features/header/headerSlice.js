import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
  },
});

export const { setSearchTerm } = headerSlice.actions;

export const selectSearchTerm = (state) => state.searchTerm;

export default headerSlice.reducer;
