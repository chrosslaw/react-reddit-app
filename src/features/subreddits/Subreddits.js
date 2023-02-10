// import { useState } from "react";
import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = ({ subs, handleClick }) => {
  const { isLoading, error } = subs;

  return (
    <div className="subreddits-container">
      <h1> Subreddits</h1>
      <ul className="subreddits">
        {error ? (
          "There was an error"
        ) : isLoading ? (
          <Spinner />
        ) : subs ? (
          subs.map((subreddit) => (
            <li
              key={subreddit.data.id}
              className={`list-item ${subreddit.data.url}`}
            >
              <button
                className="sub-button"
                type="button"
                value={subreddit.data.display_name}
                onClick={handleClick}
              >
                <img
                  src={subreddit.data.icon_img || bolt}
                  alt={`${subreddit.data.display_name}`}
                />
                {` ${subreddit.data.display_name}`}
              </button>
            </li>
          ))
        ) : null}
      </ul>
    </div>
  );
};

export default Subreddits;
