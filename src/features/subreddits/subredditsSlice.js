import { createSlice } from "@reduxjs/toolkit";
import { useGetSubsListQuery } from "../../api/redditAPI";

const subredditsSlice = createSlice({
  name: "subreddit",
  initialState: {
    subList: [],
    hasError: false,
    isLoading: false,
  },
  reducers: {},
});

export const selectAllSubreddits = (state) => state.subreddits.subList;
export default subredditsSlice.reducer;
