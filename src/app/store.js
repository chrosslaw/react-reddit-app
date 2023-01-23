import { configureStore } from "@reduxjs/toolkit";
import redditsReducer from "../features/reddits/redditsSlice";
import subRedditsReducer from "../features/subreddits/subRedditsSlice";

export const store = configureStore({
  reducer: {
    reddits: redditsReducer,
    subreddits: subRedditsReducer,
  },
});
