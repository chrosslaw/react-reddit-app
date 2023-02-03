import {
  createSlice,
  createAsyncThunk,
  // createSelector,
} from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../../api/redditAPI";

export const loadPosts = createAsyncThunk(
  "reddits/loadPosts",
  async (subreddits, dispatch) => {
    const data = await getSubredditPosts(subreddits);
    const json = await data.json();
    return json;
  }
);

export const loadComments = createAsyncThunk(
  "reddits/loadComments",
  async (permalink) => {
    const data = await fetch(getPostComments);
    const json = await data.json();
    return json;
  }
);

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
  extraReducers: {
    [loadComments.pending]: (state, action) => {
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
      if (!state.posts[action.payload].showingComments) {
        return;
      }
      state.posts[action.payload].showingComments = true;
      state.posts[action.payload].error = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].error = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    [loadComments.rejected]: (state, action) => {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].error = true;
    },
    [loadPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { setPosts, setSubreddits, toggleCommentsSwitch, setSearchTerm } =
  redditsSlice.actions;
export const selectAllPosts = (state) => state.reddits.posts;
export const selectSubreddits = (state) => state.reddits.subreddits;
export const selectSearchTerm = (state) => state.reddits.searchTerm;

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
