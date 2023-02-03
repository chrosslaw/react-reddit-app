import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetPostDataQuery,
  useGetPostCommentsQuery,
} from "../../api/redditAPI";
import {
  setSearchTerm,
  selectFilteredPosts,
  selectSubreddits,
} from "./redditsSlice";
import Post from "../../components/Post/Post";
import Spinner from "../../components/spinner/Spinner";

export const Reddits = () => {
  const reddits = useSelector((state) => state.reddits);
  const { searchTerm, subreddits, hasError, isLoading } = reddits;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  const { data, error, loading } = useGetPostDataQuery(posts);

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  // const toggleComments = (index) => {
  //   const getComments = (permalink) => {
  //     dispatch(loadComments(index, permalink));
  //   };
  //   return getComments;
  // };
  if (isLoading) {
    return <div>{Array(20).fill(<Spinner />)}</div>;
  }
  if (hasError) {
    return (
      <div>
        <h2>Failed to load posts.</h2>
        <button type="button" onClick={() => dispatch(data)}>
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
    <div className="reddits">
      {posts.map((post, index) => (
        <Post key={post.id} post={post} toggleComments={index} />
      ))}
    </div>
  );
};

export default Reddits;
