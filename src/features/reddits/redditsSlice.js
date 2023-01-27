import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../header/headerSlice";

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
    subreddits: "r/pics/",
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setSubreddit(state, action) {
      state.subreddits = action.payload;
      state.searchTerm = "";
    },
    toggleCommentsSwitch(state, action) {
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
    },
  },
  extraReducers: {
    [loadComments.pending]: (state, action) => {
      state.reducers.toggleCommentsSwitch(state, action);
      if (!state.posts[action.payload].showingComments) {
        return;
      }
      state.reddits[action.payload].isLoading = true;
      state.reddits[action.payload].hasError = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.reddits[action.payload.index].comments = action.payload.comments;
      state.reddits[action.payload.index].isLoading = false;
      state.reddits[action.payload.index].hasError = false;
    },
    [loadComments.rejected]: (state, action) => {
      state.reddits[action.payload].isLoading = false;
      state.reddits[action.payload].hasError = true;
    },
    [loadPosts.pending]: (state, action) => {
      state.reddits[action.payload].isLoading = true;
      state.reddits[action.payload].hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.reddits[action.payload.index].reddits = action.payload;
      state.reddits[action.payload.index].isLoading = false;
      state.reddits[action.payload.index].hasError = false;
    },
    [loadPosts.rejected]: (state, action) => {
      state.reddits[action.payload].isLoading = false;
      state.reddits[action.payload].hasError = true;
    },
  },
};

const selectAllPosts = (state) => state.reddits.posts;
export const selectSubreddit = (state) => state.reddit.subreddits;

export const selectFilteredPosts = (state) => {
  const reddits = selectAllPosts(state);
  const searchTerm = selectSearchTerm;
  return reddits.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export const redditsSlice = createSlice(sliceOptions);
export const { setPosts, setSubreddit, toggleCommentsSwitch } =
  redditsSlice.actions;
export default redditsSlice.reducer;
