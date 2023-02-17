import React from "react";

const Reply = ({ reply, kind }) => {
  return (
    <div className="replies">
      {
        <div>
          <h4>
            <b>Author: {reply.author}</b>
          </h4>
          <p>{reply.body}</p>
        </div>
      }
    </div>
  );
};

export default Reply;
