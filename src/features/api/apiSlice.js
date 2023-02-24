import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.reddit.com/",
  }),
  endpoints: (builder) => ({
    getSubreddits: builder.query({
      query: (subreddits) => `/${subreddits}.json`,
      transformResponse: (response) => response.data.children,
    }),
    getComments: builder.query({
      query: (permalink) => `${permalink}.json`,
      transformResponse: (response) =>
        response[1].data.children.slice(
          0,
          response[1].data.children > 6 ? 6 : response[1].data.children.length
        ),
    }),
  }),
});
export const { useGetSubredditsQuery, useGetCommentsQuery } = apiSlice;
