import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "./headerSlice";
import "./Header.css";
import Logo from "../../images/logo.png";
import bolt from "../../images/bolt.png";
import boltRight from "../../images/bolt-right.png";

export const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <header>
      <div id="heading-container">
        <img src={Logo} alt="logo" />

        <span class="heading">
          <img src={bolt} alt="bolt" height={50} width={50} />

          <p>RedditCharged</p>

          <img src={boltRight} alt="rightBolt" height={50} width={50} />
        </span>

        <div className="search-form">
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={onSearchChangeHandler}
            placeholder="Search"
            className="search"
          />

          <button
            onClick={onSearchTermClearHandler}
            type="button"
            id="search-clear-button"
            className="search-button"
          >
            🔎
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
