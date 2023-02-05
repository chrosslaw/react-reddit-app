import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reddit.com" }),
  endpoints: (builder) => ({
    getSubsList: builder.query({
      query: () => `/subreddits.json`,
      transformResponse: (response) => response.data.children,
    }),
    getPostData: builder.query({
      query: (endpoint) => `/r/${endpoint}.json`,
      transformResponse: (response) => response.data.children,
    }),
    getPostComments: builder.query({
      query: (URI) => `/r/${URI}.json`,
      transformResponse: (response) => [...response[0].data.children],
    }),
  }),
});

export const {
  useGetSubsListQuery,
  useGetPostDataQuery,
  useGetPostCommentsQuery,
} = apiSlice;
