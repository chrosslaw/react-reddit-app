import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.author}</p>

      <div>{comment.body}</div>
    </div>
  );
};

export default Comment;
