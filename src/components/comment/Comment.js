import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div>
      <div>
        <p>{comment.author}</p>
      </div>
    </div>
  );
};
