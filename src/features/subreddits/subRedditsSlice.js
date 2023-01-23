import { createSlice } from "@reduxjs/toolkit";
import getSubreddits from "../../api/redditAPI";

const loadSubs = () => {
  return async (dispatch) => {
    const subs = await getSubreddits();
    dispatch({ type: "subreddits/addSubs", payload: subs });
  };
};

export const subRedditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
  },
  reducers: {
    addSub(state, action) {
      state.subreddits = action.payload;
    },
  },
});

export default subRedditsSlice.reducer;
