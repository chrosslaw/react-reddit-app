import React from "react";
import scoreBolt from "../../images/score-bolt.png";
const Reply = ({ reply }) => {
  const { author, body, score } = reply;
  //displays comments or replies along with their score
  return (
    <div>
      <div className="score">
        <h4>
          <b className="author">{author}</b>
        </h4>
        <img src={scoreBolt} alt="bolt" height={25} width={25} />
        {score}
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Reply;
