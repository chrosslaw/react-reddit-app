// import { useState } from "react";
import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import { useGetSubredditsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = () => {
  const { data: subs, error, isLoading } = useGetSubredditsQuery();

  console.log("SUBS", subs);

  return (
    <div className="subreddits-container">
      <h1 className="subs">Subreddits</h1>
      <ul className="subreddits">
        {error ? (
          "There was an error"
        ) : isLoading ? (
          <Spinner />
        ) : subs ? (
          subs.map((subreddit) => (
            <li
              key={subreddit.data.id}
              className={`subs ${subreddit.data.url}`}
            >
              <button type="button">
                <img
                  src={subreddit.data.icon_img || bolt}
                  alt={`${subreddit.data.display_name}`}
                />
                {subreddit.data.display_name}
              </button>
            </li>
          ))
        ) : null}
      </ul>
    </div>
  );
};

export default Subreddits;
