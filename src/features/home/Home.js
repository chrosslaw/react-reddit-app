import React from "react";
import { useState } from "react";
import Header from "../header/Header";
import Subreddits from "../subreddits/Subreddits";
import Reddits from "../reddits/Reddits";
import { useGetSubredditsQuery, useGetPostsQuery } from "../api/apiSlice";

const Home = () => {
  const [redditPosts, setRedditPosts] = useState("Popular");
  const { data: subs = [] } = useGetSubredditsQuery();
  const { data: posts = [] } = useGetPostsQuery(redditPosts);
  console.log("!!", posts);
  const changeReddits = (e) => {
    setRedditPosts(e.target.value);
  };

  return (
    <div>
      <Header posts={posts} changeReddits={changeReddits} />
      <Subreddits subs={subs} changeReddits={changeReddits} />
      <Reddits
        posts={posts}
        changeReddits={changeReddits}
        redditPosts={redditPosts}
      />
    </div>
  );
};

export default Home;
