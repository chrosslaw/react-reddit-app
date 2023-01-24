import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import Tile from "../../components/tile/Tile";
import { loadSubs } from "./subredditsSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();
  //   const allSubreddits = useSelector(selectAllSubreddits);
  const { isLoading } = useSelector((state) => state.allSubreddits);

  useEffect(() => {
    dispatch(loadSubs());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Tile>
        <ul>
          {/* allSubreddits.map((subs) => ( */}
          <li key="Key">
            Hi
            {/* <button type="button"></button>
              <img src="" alt="subreddit" />
              {"name"} */}
          </li>
          {/* )) */}
        </ul>
      </Tile>
    </div>
  );
};

export default Subreddits;
