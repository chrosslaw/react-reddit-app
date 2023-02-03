import { createSlice } from "@reduxjs/toolkit";

const sliceOptions = {
  name: "subreddits",
  initialState: {
    subList: [],
    hasError: false,
    isLoading: false,
  },
  reducers: {},
};

export const selectAllSubreddits = (state) => state.subreddits.subList;
export const subredditsSlice = createSlice(sliceOptions);
export default subredditsSlice.reducer;
