import React from "react";

const Reply = ({ reply }) => {
  const { author, body } = reply;
  return (
    <div>
      <h4>
        <b>Author: {author}</b>
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default Reply;
