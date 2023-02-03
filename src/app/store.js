import { configureStore } from "@reduxjs/toolkit";
import redditsReducer from "../features/reddits/redditsSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import { redditApi } from "../api/redditAPI";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    reddits: redditsReducer,
    subreddits: subredditsReducer,
    [redditApi.reducerPath]: redditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware),
});
setupListeners(store.dispatch);
