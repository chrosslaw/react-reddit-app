import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../../components/tile/Tile";
import { loadSubs, selectAllSubreddits } from "./subredditsSlice";
import "./Subreddits.css";
import { setSubreddits, selectSubreddits } from "../reddits/redditsSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const allSubreddits = useSelector(selectAllSubreddits);
  const selectedSubreddits = useSelector(selectSubreddits);
  //   const { isLoading } = useSelector((state) => state.allSubreddits);

  useEffect(() => {
    dispatch(loadSubs());
  }, [dispatch]);

  return (
    <div className="subreddits">
      <Tile>
        <h1>Subreddits</h1>
        <ul>
          {allSubreddits.map((subreddit) => (
            <li
              key={subreddit.id}
              className={`${
                selectedSubreddits === subreddit.url && `selected-subreddit`
              }`}
            >
              <button
                type="button"
                onClick={() => dispatch(setSubreddits(subreddit.url))}
              >
                <img
                  src={subreddit.icon_img || subreddit.display_name}
                  alt={`${subreddit.display_name}`}
                />
                {subreddit.display_name}
              </button>
            </li>
          ))}
        </ul>
      </Tile>
    </div>
  );
};

export default Subreddits;
