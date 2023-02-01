import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadSubs, selectAllSubreddits } from "./subredditsSlice";
import "./Subreddits.css";
import { setSubreddits, selectSubreddits } from "../reddits/redditsSlice";
import bolt from "../../images/bolt.png";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectAllSubreddits);
  const selectedSubreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(loadSubs());
  }, [dispatch]);

  return (
    <div>
      <h1 className="subs">Subreddits</h1>
      <div className="subreddits">
        {subreddits.map((subreddit) => (
          <a
            key={subreddit.id}
            href={subreddit.url}
            className={`subs ${selectedSubreddits === subreddit.url}`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSubreddits(subreddit.url))}
            >
              <img
                src={subreddit.icon_img || bolt}
                alt={`${subreddit.display_name}`}
              />
              {subreddit.display_name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Subreddits;
