import { createSlice } from "@reduxjs/toolkit";

export const subredditsSlice = createSlice({
  name: "subreddit",
  initialState: {
    subList: [],
    hasError: false,
    isLoading: false,
  },
  reducers: {
    setSubList: (state, action) => {
      state.subList = action.payload;
    },
  },
});

export const { setSubList } = subredditsSlice.actions;

export const selectAllSubreddits = (state) => state.subreddits.subList;
export default subredditsSlice.reducer;
