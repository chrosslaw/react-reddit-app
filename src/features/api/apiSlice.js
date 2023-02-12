import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.reddit.com/",
  }),
  endpoints: (builder) => ({
    getSubreddits: builder.query({
      query: (subreddits) => `${subreddits}.json`,
      transformResponse: (response) => response.data.children,
    }),
  }),
});
export const { useGetSubredditsQuery } = apiSlice;
