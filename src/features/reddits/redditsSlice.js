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
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
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
      state.isLoading = true;
      state.hasError = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.recipes = action.payload.comments;
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

const selectAllPosts = (state) => state.reddits.posts;
export const selectSearchTerm = (state) => state.reddits.searchTerm;

export const selectFilteredPosts = (state) => {
  const reddits = selectAllPosts(state);
  const searchTerm = selectSearchTerm(state);

  return reddits.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export const redditsSlice = createSlice(sliceOptions);
export const { setSearchTerm, setPosts, setSubreddit, toggleCommentsSwitch } =
  redditsSlice.actions;
export default redditsSlice.reducer;
