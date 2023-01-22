import React, { useRef } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  const searchInputRef = useRef();
  const onSearchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input
        type="text"
        className="search"
        placeholder="Search"
        ref={searchInputRef}
      />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};
