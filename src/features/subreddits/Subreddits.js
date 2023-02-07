// import { useState } from "react";

import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import { useGetSubredditsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = () => {
  const { data = [], error, isLoading } = useGetSubredditsQuery();
  console.log(data, error);

  return (
    <div>
      <h1 className="subs">Subreddits</h1>
      <div className="subreddits">
        {error ? (
          "There was an error"
        ) : isLoading ? (
          <Spinner />
        ) : data ? (
          data.map((subreddit) => (
            <a
              key={subreddit.data.id}
              href={subreddit.data.url}
              className={`subs ${subreddit.url}`}
            >
              <button type="button" onClick={() => subreddit.url}>
                <img
                  src={subreddit.data.icon_img || bolt}
                  alt={`${subreddit.data.display_name}`}
                />
                {subreddit.data.display_name}
              </button>
            </a>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Subreddits;
