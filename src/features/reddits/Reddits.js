import { useState } from "react";
import Post from "../Post/Post";
import Spinner from "../../components/spinner/Spinner";
import { useGetPostsQuery } from "../api/apiSlice";
import "./Reddits.css";

export const Reddits = () => {
  const [redditPosts, setRedditPosts] = useState("Popular");
  const { data: posts, error, isLoading } = useGetPostsQuery(redditPosts);
  console.log(posts, error);

  const changeReddits = (e) => {
    setRedditPosts(e.target.value);
  };

  // if (posts.length === 0) {
  //   return (
  //     <div>
  //       <h2>No posts matching {posts.data.title}</h2>
  //       {/* <button type="button" onClick={() => pop}>
  //         Popular
  //       </button> */}
  //     </div>
  //   );
  // }

  return (
    <div className="title">
      <h1>{redditPosts} Reddits</h1>
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
              changeReddits={changeReddits}
              // toggleComments={post.index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Reddits;
