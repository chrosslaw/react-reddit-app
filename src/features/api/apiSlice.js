import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.reddit.com/",
  }),
  endpoints: (builder) => ({
    getSubreddits: builder.query({
      query: () => `subreddits.json`,
      transformResponse: (response) => response.data.children,
    }),
    getPosts: builder.query({
      query: (searchTerm) => `r/${searchTerm}.json`,
      transformResponse: (response) => response.data.children,
    }),
    // getPostComments: builder.query({
    //   query: (URI) => `r/${URI}.json`,
    //   transformResponse: (response) => [...response[0].data.children],
    // }),
  }),
});
export const {
  useGetSubredditsQuery,
  useGetPostsQuery,
  // useGetPostCommentsQuery,
} = apiSlice;
