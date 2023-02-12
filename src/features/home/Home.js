import React from "react";
import { useState } from "react";
import Header from "../header/Header";
import Subreddits from "../subreddits/Subreddits";
import Reddits from "../reddits/Reddits";
import { useGetSubredditsQuery } from "../api/apiSlice";

const Home = () => {
  const [redditPosts, setRedditPosts] = useState("Popular");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: subs = [] } = useGetSubredditsQuery("subreddits");
  const { data: searchList = [] } = useGetSubredditsQuery(
    `search.json?q=${searchTerm}`
  );
  const { data: posts = [] } = useGetSubredditsQuery(`r/${redditPosts}`);
  console.log(searchTerm, searchList);
  console.log("subs", subs);
  console.log("posts", posts);
  return (
    <div>
      <Header setRedditPosts={setRedditPosts} setSearchTerm={setSearchTerm} />
      <Subreddits
        subs={subs}
        setRedditPosts={setRedditPosts}
        setSearchTerm={setSearchTerm}
      />
      <Reddits
        posts={posts}
        redditPosts={redditPosts}
        setRedditPosts={setRedditPosts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchList={searchList}
      />
    </div>
  );
};

export default Home;
