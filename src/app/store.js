import { configureStore } from "@reduxjs/toolkit";
import redditsReducer from "../features/reddits/redditsSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import headerReducer from "../features/header/headerSlice";

export const store = configureStore({
  reducer: {
    reddits: redditsReducer,
    subreddits: subredditsReducer,
    header: headerReducer,
  },
});
