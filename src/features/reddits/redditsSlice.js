import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
  "reddits/getAllSubredditsPosts",
  async (subreddit) => {
    const data = await fetch(`https://www.reddit.com/${subreddit}.json`);
    const json = await data.json();
    return json.data.children.map((post) => post.data);
  }
);
export const loadComments = createAsyncThunk(
  "reddits/getAllComments",
  async (permalink) => {
    const data = await fetch(`https://www.reddit.com/${permalink}.json`);
    const json = await data.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

const sliceOptions = {
  name: "reddits",
  initialState: {
    posts: [],
    hasError: false,
    isLoading: false,
    searchTerm: "",
    subreddits: "r/pics/",
  },
  reducers: {},
  extraReducers: {
    [loadComments.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadComments.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [loadPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const redditsSlice = createSlice(sliceOptions);
export default redditsSlice.reducer;
