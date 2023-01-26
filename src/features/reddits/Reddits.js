import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadComments,
  loadPosts,
  selectFilteredPosts,
  setSearchTerm,
} from "./redditsSlice";
import Reddit from "./Reddit";

export const Reddits = () => {
  const reddits = useSelector((state) => state.reddits);
  const { hasError, searchTerm, selectedSubreddit } = reddits;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  const toggleComments = (index) => {
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

  return (
    <>
      {posts.map((post, index) => (
        <Reddit
          key={post.id}
          post={post}
          toggleComments={toggleComments(index)}
        />
      ))}
    </>
  );
};
