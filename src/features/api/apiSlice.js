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
      transformResponse: (response) => [
        ...response[0].data.children,
        ...response[1].data.children.slice(0, 15),
      ],
      // }),
      // getComments: builder.query({
      //   query: (postId, subreddit, title) =>
      //     `/r/${subreddit}/comments/${postId}/${title}/.json`,
      //   transformResponse: (response) => [
      //     ...response[0].data.children,
      //     ...response[1].data.children.slice(0, 20),
      //   ],
    }),
  }),
});
export const { useGetSubredditsQuery, useGetCommentsQuery } = apiSlice;
