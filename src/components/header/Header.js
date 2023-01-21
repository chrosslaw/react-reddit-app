import React from "react";
import "./Header.css";
// import { SearchBar } from "../searchbar/SearchBar";
import Logo from "../../resources/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <p>RedditCharged</p>
      </div>

      {/* <div>
        <SearchBar />
      </div> */}
    </header>
  );
};
