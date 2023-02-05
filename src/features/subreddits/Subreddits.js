import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSubreddits, setSubList } from "./subredditsSlice";
import "./Subreddits.css";
import bolt from "../../images/bolt.png";
import { useGetSubsListQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

export const Subreddits = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetSubsListQuery();
  const selectedSubreddits = useSelector(selectAllSubreddits);

  useEffect(() => {
    if (data) {
      dispatch(setSubList(data));
    }
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
              className={`subs ${
                selectedSubreddits === subreddit.url ? "selected" : ""
              }`}
            >
              <button type="button" onClick={() => dispatch(subreddit.url)}>
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
