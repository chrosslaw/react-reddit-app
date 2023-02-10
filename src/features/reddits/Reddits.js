import Post from "../Post/Post";
import Spinner from "../../components/spinner/Spinner";

import "./Reddits.css";

export const Reddits = ({ posts, redditPosts, setRedditPosts }) => {
  const { isLoading, error } = posts;
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
      <h1> {redditPosts} Reddits</h1>

      <div className="reddits">
        {error ? (
          "There was an error."
        ) : isLoading ? (
          <Spinner />
        ) : (
          posts.map((post) => (
            <Post
              key={post.data.id}
              post={post.data}
              setRedditPosts={setRedditPosts}
              // toggleComments={post.index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Reddits;
