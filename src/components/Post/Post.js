// import Comments from "../comment/Comments";
// import Spinner from "../spinner/Spinner";

import "./Post.css";
const Post = ({ post, toggleComments }) => {
  // const renderComments = () => {
  //   if (post.errorComments) {
  //     return (
  //       <div>
  //         <h5>An error occurred while loading comments.</h5>
  //       </div>
  //     );
  //   }
  //   if (post.showingComments) {
  //     return (
  //       <div>
  //         {post.comments.map((comment) => (
  //           <Comments comment={comment} key={comment.id} />
  //         ))}
  //       </div>
  //     );
  //   }
  //   return null;
  // };
  return (
    <div key={post.id} className="post-container">
      <h2>{post.title}</h2>
      <h5>Author: {post.author}</h5>

      <a key={post.id} href={post.url} className="post-image">
        <img src={post.url} alt={post.subreddit} />
      </a>
      <span>
        {/* <button
              type="button"
              className={post.showComment}
              onClick={() => toggleComments(post.id)}
              aria-label="Show comments"
            ></button> */}

        {/* {post.data.num_comments} */}
      </span>

      {/* {renderComments()} */}
    </div>
  );
};

export default Post;
