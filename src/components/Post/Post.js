import React from "react";
// import Comments from "../comment/Comments";
// import Spinner from "../spinner/Spinner";

const Post = ({ post, id, toggleComments }) => {
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
    <article key={post.id}>
      <div>
        <div>
          <span>
            <h5>{post.author}</h5>
          </span>
          <a key={post.id} href={post.url}>
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
        </div>
        {/* {renderComments()} */}
      </div>
    </article>
  );
};

export default Post;
