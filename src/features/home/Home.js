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

  console.log("!!", subs);
  console.log("!!!!!", posts);
  return (
    <div>
      <Header posts={posts} setRedditPosts={setRedditPosts} />
      <Subreddits subs={subs} setRedditPosts={setRedditPosts} />
      <Reddits
        posts={posts}
        redditPosts={redditPosts}
        setRedditPosts={setRedditPosts}
      />
    </div>
  );
};

export default Home;
