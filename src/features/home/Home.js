import React from "react";
import { useState } from "react";
import Header from "../header/Header";
import Subreddits from "../subreddits/Subreddits";
import Reddits from "../reddits/Reddits";
import { useGetSubredditsQuery } from "../api/apiSlice";
import ScrollToTopButton from "../../components/buttons/ScrollToTopButton";

const Home = () => {
  //initially query - Popular posts
  const [redditPosts, setRedditPosts] = useState("Popular");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: subs = [] } = useGetSubredditsQuery("subreddits");
  const { data: searchList = [] } = useGetSubredditsQuery(
    //Search Query
    `search.json?q=${searchTerm}`
  );

  return (
    <div>
      <Header
        setRedditPosts={setRedditPosts}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Subreddits
        subs={subs}
        setRedditPosts={setRedditPosts}
        setSearchTerm={setSearchTerm}
      />
      <Reddits
        redditPosts={redditPosts}
        setRedditPosts={setRedditPosts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchList={searchList}
      />

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
