import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSubreddits } from "./subredditsSlice";
import "./Subreddits.css";
import { setSubreddits, selectSubreddits } from "../reddits/redditsSlice";
import bolt from "../../images/bolt.png";
import { useGetSubreddits } from "../../api/redditAPI";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetSubreddits();
  const selectedSubreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(selectSubreddits);
  }, [data, dispatch]);

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
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Subreddits;
