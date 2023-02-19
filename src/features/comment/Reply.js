import React from "react";

const Reply = ({ reply }) => {
  return (
    <div className="replies">
      {
        <div>
          <h4>
            <b>{reply.author}</b>
          </h4>
          <p>{reply.body}</p>
        </div>
      }
    </div>
  );
};

export default Reply;
