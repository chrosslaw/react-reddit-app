import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.reddit.com/",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getSubreddits: builder.query({
      query: () => `subreddits.json`,
      transformResponse: (response) => response.data.children,
    }),
    // getPostData: build.query({
    //   query: (endpoint) => `r/${endpoint}.json`,
    //   transformResponse: (response) => response.data.children,
    // }),
    // getPostComments: build.query({
    //   query: (URI) => `r/${URI}.json`,
    //   transformResponse: (response) => [...response[0].data.children],
    // }),
  }),
});
export const {
  useGetSubredditsQuery,
  // useGetPostDataQuery,
  // useGetPostCommentsQuery,
} = apiSlice;
