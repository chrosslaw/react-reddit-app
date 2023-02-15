import React from "react";
import ReactMarkdown from "react-markdown";

const Comment = ({ comment }) => {
  return (
    <div className="comments-container">
      <div>{comment.author}</div>
      <ReactMarkdown source={comment.body} />
    </div>
  );
};

export default Comment;
