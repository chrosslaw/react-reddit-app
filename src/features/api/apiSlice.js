import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.reddit.com/",
  }),
  endpoints: (builder) => ({
    getSubreddits: builder.query({
      query: () => `subreddits`,
      transformResponse: (response) => response.data.children,
    }),
    getPosts: builder.query({
      query: (posts) => `r/${posts}.json`,
      transformResponse: (response) => response.data.children,
    }),
  }),
});
export const {
  useGetSubredditsQuery,
  useGetPostsQuery,
  // useGetPostCommentsQuery,
} = apiSlice;
