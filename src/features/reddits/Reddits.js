import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments, loadPosts, selectFilteredPosts } from "./redditsSlice";
import Post from "../../components/Post/Post";
import { setSearchTerm } from "../header/headerSlice";

export const Reddits = () => {
  const reddits = useSelector((state) => state.reddits);
  const { hasError, searchTerm, subreddits } = reddits;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(subreddits));
  }, [subreddits, dispatch]);

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
        <button type="button" onClick={() => dispatch(loadPosts(subreddits))}>
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
        <Post
          key={post.id}
          post={post}
          toggleComments={toggleComments(index)}
        />
      ))}
    </>
  );
};