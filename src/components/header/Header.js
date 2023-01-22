import React from "react";
import "./Header.css";
// import { SearchBar } from "../searchbar/SearchBar";
import Logo from "../../images/logo.png";
import bolt from "../../images/bolt.png";
import boltRight from "../../images/bolt-right.png";

export const Header = () => {
  return (
    <header>
      <div id="heading-container">
        <img src={Logo} alt="logo" />

        <span class="heading">
          <img src={bolt} alt="bolt" height={50} width={50} />

          <p>RedditCharged</p>

          <img src={boltRight} alt="rightBolt" height={50} width={50} />
        </span>

        {/* <div>
        <SearchBar />
      </div> */}
      </div>
    </header>
  );
};
