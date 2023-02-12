import "./Header.css";
import { useState } from "react";
import Logo from "../../images/logo.png";
import bolt from "../../images/bolt.png";
import boltRight from "../../images/bolt-right.png";

export const Header = ({ setRedditPosts, setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");
  const onSearchChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchInputSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput("");
  };

  return (
    <header>
      <div>
        <img src={Logo} alt="logo" />

        <span className="heading">
          <img src={bolt} alt="bolt" height={50} width={50} />

          <h1>Reddit Charged</h1>

          <img src={boltRight} alt="rightBolt" height={50} width={50} />
        </span>
      </div>
      <form className="search-form" onSubmit={onSearchInputSubmit}>
        <input
          id="search"
          type="text"
          value={searchInput}
          onChange={onSearchChangeHandler}
          placeholder="Search"
          className="search"
        />

        <button
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
