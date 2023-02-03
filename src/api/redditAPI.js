import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redditApi = createApi({
  reducerPath: "redditApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reddit.com/" }),
  endpoints: (builder) => ({
    getSubreddits: builder.query({
      query: () => `subreddits.json`,
    }),
  }),
});

export const { useGetSubreddits } = redditApi;

export const ROOT = "https://reddit.com/";

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${ROOT}/r/${subreddit}.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
};

// export const getSubreddits = async () => {
//   const response = await fetch(`${ROOT}subreddits.json`);
//   const json = await response.json();
//   return json.data.children.map((subreddit) => subreddit.data);
// };

export const getPostComments = async (permalink) => {
  const response = await fetch(`${ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
