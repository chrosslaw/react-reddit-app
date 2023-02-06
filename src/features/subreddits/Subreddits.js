// import { useState } from "react";
import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import { useGetSubredditsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = () => {
  const { data = [], error, isLoading } = useGetSubredditsQuery();
  console.log(data);
  // const selectedSubreddits = useSelector(selectAllSubreddits);

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
              key={subreddit.id}
              href={subreddit.url}
              className={`subs ${subreddit.url}`}
            >
              <button type="button" onClick={() => subreddit.url}>
                <img
                  src={subreddit.icon_img || bolt}
                  alt={`${subreddit.display_name}`}
                />
                {subreddit.display_name}
              </button>
            </a>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Subreddits;
