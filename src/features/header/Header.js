import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../reddits/redditsSlice";
import "./Header.css";
import Logo from "../../images/logo.png";
import bolt from "../../images/bolt.png";
import boltRight from "../../images/bolt-right.png";

export const Header = () => {
  const [headerSearchTerm, setHeaderSearchTerm] = useState("");
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchChangeHandler = (e) => {
    setHeaderSearchTerm(e.target.value);
  };

  useEffect(() => {
    setHeaderSearchTerm(searchTerm);
  }, [searchTerm, dispatch]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(headerSearchTerm));
  };

  return (
    <header>
      <div>
        <img src={Logo} alt="logo" />

        <span className="heading">
          <img src={bolt} alt="bolt" height={50} width={50} />

          <h1>RedditCharged</h1>

          <img src={boltRight} alt="rightBolt" height={50} width={50} />
        </span>
      </div>
      <form className="search-form" onSubmit={onSearchTermSubmit}>
        <input
          id="search"
          type="text"
          value={headerSearchTerm}
          onChange={onSearchChangeHandler}
          placeholder="Search"
          className="search"
        />

        <button
          onClick={onSearchTermSubmit}
          type="submit"
          id="search-clear-button"
          className="search-button"
          aria-label="Search"
        >
          🔎
        </button>
      </form>
    </header>
  );
};

export default Header;
