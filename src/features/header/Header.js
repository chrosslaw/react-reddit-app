// import { useState } from "react";

import "./Header.css";
import Logo from "../../images/logo.png";
import bolt from "../../images/bolt.png";
import boltRight from "../../images/bolt-right.png";

export const Header = () => {
  const onSearchChangeHandler = (e) => {};

  const onSearchTermSubmit = (e) => {};

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
          // value={}
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
