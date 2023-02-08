// import { useState } from "react";
import Post from "../../components/Post/Post";
import Spinner from "../../components/spinner/Spinner";
import { useGetPostsQuery } from "../api/apiSlice";
import "./Reddits.css";

export const Reddits = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery("popular");
  console.log(posts, error);

  if (posts.length === 0) {
    return (
      <div>
        <h2>No posts matching {posts.data.title}</h2>
        {/* <button type="button" onClick={() => pop}>
          Popular
        </button> */}
      </div>
    );
  }

  return (
    <div className="title">
      <h1>Reddits</h1>
      <div className="reddits">
        {error ? (
          "There was an error."
        ) : isLoading ? (
          <Spinner />
        ) : (
          posts.map((post) => (
            <Post
              post={post.data}
              key={post.data.id}
              // toggleComments={post.index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Reddits;
