import React from "react";

const Reply = ({ reply }) => {
  return (
    <div className="replies-container">
      <p>{reply.author}</p>
      <p>{reply.body}</p>
    </div>
  );
};

export default Reply;
