import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadComments,
  loadPosts,
  selectFilteredPosts,
  setSearchTerm,
} from "./redditsSlice";

const Reddits = () => {
  const reddits = useSelector((state) => state.reddits);
  const { isLoading, hasError, searchTerm, selectedSubreddit } = reddits;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  const toggleCommentsSwitch = (index) => {
    const getComments = (permalink) => {
      dispatch(loadComments(index, permalink));
    };
    return getComments;
  };

  if (hasError) {
    return (
      <div>
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(loadPosts(selectedSubreddit))}
        >
          Load Posts
        </button>
      </div>
    );
  }
  if (posts.length === 0) {
    return (
      <div>
        <h2>No posts matching {searchTerm}</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(""))}>
          Home
        </button>
      </div>
    );
  }
  return <div></div>;
};
