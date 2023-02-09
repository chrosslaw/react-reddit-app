import React from "react";
import Header from "../header/Header";
import Subreddits from "../subreddits/Subreddits";
import Reddits from "../reddits/Reddits";

const Home = () => {
  return (
    <div>
      <Header />
      <Subreddits />
      <Reddits />
    </div>
  );
};

export default Home;
