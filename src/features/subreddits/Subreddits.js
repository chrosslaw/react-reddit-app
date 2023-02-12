// import { useState } from "react";
import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = ({ subs, setRedditPosts, setSearchTerm }) => {
  const { isLoading, error } = subs;

  return (
    <div className="subreddits-container">
      <h1> Subreddits</h1>
      <ul className="subreddits">
        {error ? (
          "Oops, there was an error"
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
                onClick={() => {
                  //if search term is currently used, clear it out. Then query the clicked post name
                  setSearchTerm("");
                  setRedditPosts(subreddit.data.display_name);
                }}
              >
                <img
                  src={
                    //if there isn't an icon_image, default to bolt
                    subreddit.data.icon_img || bolt
                  }
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
