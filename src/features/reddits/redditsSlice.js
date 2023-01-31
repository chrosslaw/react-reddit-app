import {
  createSlice,
  createAsyncThunk,
  // createSelector,
} from "@reduxjs/toolkit";
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
    searchTerm: "",
    subreddits: "r/pics/",
  },
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setSubreddits(state, action) {
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
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
      if (!state.posts[action.payload].showingComments) {
        return;
      }
      state.posts[action.payload].isLoading = true;
      state.posts[action.payload].hasError = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.posts[action.payload.index].comments = action.payload.comments;
      state.posts[action.payload.index].isLoading = false;
      state.posts[action.payload.index].hasError = false;
    },
    [loadComments.rejected]: (state, action) => {
      state.posts[action.payload].isLoading = false;
      state.posts[action.payload].hasError = true;
    },
    [loadPosts.pending]: (state, action) => {
      state.posts[action.payload].isLoading = true;
      state.posts[action.payload].hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.posts.isLoading = false;
      state.posts.hasError = false;
    },
    [loadPosts.rejected]: (state) => {
      state.posts.isLoading = false;
      state.posts.hasError = true;
    },
  },
};

export const redditsSlice = createSlice(sliceOptions);
export const { setPosts, setSubreddits, toggleCommentsSwitch } =
  redditsSlice.actions;
const selectAllPosts = (state) => state.reddits.posts;
export const selectSubreddits = (state) => state.reddits.subreddits;

export const selectFilteredPosts = (state) => {
  const posts = selectAllPosts(state);
  const searchTerm = selectSearchTerm;
  if (searchTerm !== "") {
    posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return posts;
};

// export const selectFilteredPosts = createSelector(
//   [selectAllPosts, selectSearchTerm],
//   (posts, searchTerm) => {
//     if (searchTerm !== "") {
//       return posts.filter((post) =>
//         post.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     return posts;
//   }
// );

export default redditsSlice.reducer;
