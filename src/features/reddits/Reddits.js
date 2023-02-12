import Post from "../post/Post";
import Spinner from "../../components/spinner/Spinner";

import "./Reddits.css";

export const Reddits = ({
  posts,
  redditPosts,
  setRedditPosts,
  searchTerm,
  setSearchTerm,
  searchList,
}) => {
  const { isLoading, error } = posts;

  return (
    <div className="title">
      <h1> {redditPosts} </h1>

      <div className="reddits">
        {error ? (
          "There was an error."
        ) : isLoading ? (
          <Spinner />
        ) : (
          (searchTerm === "" ? posts : searchList).map((post) => (
            <Post
              key={post.data.id}
              post={post.data}
              redditPosts={redditPosts}
              setRedditPosts={setRedditPosts}
              setSearchTerm={setSearchTerm}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Reddits;
