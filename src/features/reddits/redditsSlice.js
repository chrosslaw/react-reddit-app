import {
  createSlice,
  createAsyncThunk,
  // createSelector,
} from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../../api/redditAPI";

export const loadPosts = createAsyncThunk(
  "reddits/loadPosts",
  async (dispatch) => {
    const data = await getSubredditPosts(selectAllPosts);
    const posts = data.map((post) => ({
      ...post,
      showingComments: false,
      comments: [],
      loadingComments: false,
      errorComments: false,
    }));
    dispatch(loadPosts.fulfilled(posts));
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
      state.posts.isLoading = true;
      state.posts.hasError = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
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
export const { setPosts, setSubreddits, toggleCommentsSwitch, setSearchTerm } =
  redditsSlice.actions;
const selectAllPosts = (state) => state.reddits.posts;
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
