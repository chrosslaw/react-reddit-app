import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubs = createAsyncThunk(
  "subreddits/getAllSubreddits",
  async () => {
    const data = await fetch(`https://www.reddit.com/subreddits.json`);
    const json = await data.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

const sliceOptions = {
  name: "subreddits",
  initialState: {
    subList: [],
    hasError: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [loadSubs.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadSubs.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadSubs.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const selectAllSubreddits = (state) => state.subreddits.subList;
export const subredditsSlice = createSlice(sliceOptions);
export default subredditsSlice.reducer;
