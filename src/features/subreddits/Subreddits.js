// import { useState } from "react";
import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import { useGetSubredditsQuery, useGetPostsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = () => {
  const { data: subs, error, isLoading } = useGetSubredditsQuery();
  const { data: reddits } = useGetPostsQuery();

  return (
    <div>
      <h1 className="subs">Subreddits</h1>
      <div className="subreddits">
        {error ? (
          "There was an error"
        ) : isLoading ? (
          <Spinner />
        ) : subs ? (
          subs.map((subreddit) => (
            <a
              key={subreddit.id}
              href={subreddit.data.url}
              className={`subs ${subreddit.url}`}
            >
              <button type="button" onClick={() => reddits(subreddit.url)}>
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
