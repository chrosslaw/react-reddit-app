import React from "react";
import { useGetSubredditsQuery } from "../api/apiSlice";

const Comments = ({ post, id }) => {
  // {error ? (
  //   "There was an error loading the comments."
  // ) : isLoading ? (
  //   <Spinner />
  // ) : commentsShowing ? (
  //   <Comments post={post} />
  // ) : null}
  return <div className="comments-container" key={id}></div>;
};

export default Comments;
