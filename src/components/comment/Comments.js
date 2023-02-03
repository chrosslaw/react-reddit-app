import React from "react";

const Comments = ({ comment, id }) => {
  return (
    <div key={id}>
      <div className="author-style">{comment.author}</div>

      <div className="comment-style">
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comments;
