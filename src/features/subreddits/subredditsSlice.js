import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/redditAPI";

export const loadSubs = createAsyncThunk("subreddits/loadSubs", async () => {
  return getSubreddits();
});

const sliceOptions = {
  name: "subreddits",
  initialState: {
    subList: [],
    hasError: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [loadSubs.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadSubs.fulfilled]: (state, action) => {
      state.subList = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadSubs.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const selectAllSubreddits = (state) => state.subreddits.subList;
export const subredditsSlice = createSlice(sliceOptions);
export default subredditsSlice.reducer;
