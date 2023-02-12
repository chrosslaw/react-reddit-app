import React from "react";
import { useState } from "react";
import Header from "../header/Header";
import Subreddits from "../subreddits/Subreddits";
import Reddits from "../reddits/Reddits";
import { useGetSubredditsQuery } from "../api/apiSlice";

const Home = () => {
  //initially query Popular posts
  const [redditPosts, setRedditPosts] = useState("Popular");
  const [searchTerm, setSearchTerm] = useState("");
  //List of Subreddits
  const { data: subs = [] } = useGetSubredditsQuery("subreddits");
  const { data: searchList = [] } = useGetSubredditsQuery(
    //Search Query
    `search.json?q=${searchTerm}`
  );

  //list of Reddit Posts
  const { data: posts = [] } = useGetSubredditsQuery(`r/${redditPosts}`);
  console.log(posts);
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
