import { configureStore } from "@reduxjs/toolkit";
import redditsReducer from "../features/reddits/redditsSlice";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import { redditApi } from "../api/redditAPI";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    [redditApi.reducerPath]: redditApi.reducer,
    reddits: redditsReducer,
    subreddits: subredditsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware),
});
setupListeners(store.dispatch);
