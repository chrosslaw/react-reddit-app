import React from "react";

const Reply = ({ reply }) => {
  return (
    <div className="replies" key={reply.id}>
      <h4>
        <b>Author: {reply.author}</b>
      </h4>
      <p>{reply.body}</p>
    </div>
  );
};

export default Reply;
