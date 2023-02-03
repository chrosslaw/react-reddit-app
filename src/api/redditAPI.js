import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redditApi = createApi({
  reducerPath: "redditApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reddit.com/" }),
  endpoints: (builder) => ({
    getSubsList: builder.query({
      query: () => `subreddits.json`,
    }),
    getPostData: builder.query({
      query: (posts) => `r/${posts}.json`,
      transformResponse: (response) => response.data.children,
    }),
    getPostComments: builder.query({
      query: (comments) => `r/${comments}.json`,
      transformResponse: (response) => [...response[0].data.children],
    }),
  }),
});

export const {
  useGetSubsListQuery,
  useGetPostDataQuery,
  useGetPostCommentsQuery,
} = redditApi;

// export const getSubredditPosts = async (subreddit) => {
//   const response = await fetch(`${ROOT}/r/${subreddit}.json`);
//   const json = await response.json();
//   return json.data.children.map((post) => post.data);
// };

// export const getPostComments = async (permalink) => {
//   const response = await fetch(`${ROOT}${permalink}.json`);
//   const json = await response.json();

//   return json[1].data.children.map((subreddit) => subreddit.data);
// };
