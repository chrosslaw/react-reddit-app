import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../../components/tile/Tile";
import { loadSubs, selectAllSubreddits } from "./subredditsSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const allSubreddits = useSelector(selectAllSubreddits);
  //   const { isLoading } = useSelector((state) => state.allSubreddits);

  useEffect(() => {
    dispatch(loadSubs());
  }, [dispatch]);

  return (
    <div>
      <Tile>
        <ul>
          {allSubreddits.map((subs) => (
            <li key="Key">
              <button type="button"></button>
              <img src="" alt="subreddit" />
              {"name"}
            </li>
          ))}
        </ul>
      </Tile>
    </div>
  );
};

export default Subreddits;
