import { configureStore } from "@reduxjs/toolkit";
// import redditsReducer from "../features/reddits/redditsSlice";
// import subredditsReducer from "../features/subreddits/subredditsSlice";
import { apiSlice } from "../features/api/apiSlice";
// import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // reddits: redditsReducer,
    // subreddits: subredditsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
// setupListeners(store.dispatch);
