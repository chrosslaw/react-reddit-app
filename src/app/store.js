import { configureStore } from "@reduxjs/toolkit";
import redditsReducer from "../features/reddits/redditsSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";

export const store = configureStore({
  reducer: {
    reddits: redditsReducer,
    subreddits: subredditsReducer,
  },
});
