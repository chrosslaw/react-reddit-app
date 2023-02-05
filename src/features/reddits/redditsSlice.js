import { createSlice } from "@reduxjs/toolkit";

const redditsSlice = createSlice({
  name: "reddits",
  initialState: {
    posts: [],
    hasError: false,
    isLoading: false,
    searchTerm: "",
    subreddits: "popular",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSubreddits: (state, action) => {
      state.subreddits = action.payload;
      state.searchTerm = "";
    },
    toggleCommentsSwitch: (state, action) => {
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
    },
  },
});

export const { setPosts, setSubreddits, toggleCommentsSwitch, setSearchTerm } =
  redditsSlice.actions;

export const selectSubreddits = (state) => state.reddits.subreddits;

export const selectSearchTerm = (state) => state.reddits.searchTerm;
const selectAllPosts = (state) => state.reddits.posts;

export const selectFilteredPosts = (state) => {
  const posts = selectAllPosts(state);
  const searchTerm = selectSearchTerm(state);
  if (searchTerm !== "") {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return posts;
};

export default redditsSlice.reducer;
