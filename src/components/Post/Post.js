import React from "react";
import Comment from "../comment/Comment";
import Spinner from "../spinner/Spinner";

const Post = ({ post, toggleComments }) => {
  const renderComments = () => {
    if (post.hasError) {
      return (
        <div>
          <h5>Oops, there has been an error.</h5>
        </div>
      );
    }
    if (post.loading) {
      <Spinner />;
    }
    if (post.showComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
    return null;
  };
  return (
    <article key={post.id}>
      <div>
        <div>
          <h3>post.title</h3>

          <img src={post.url} alt="post" />
        </div>
        <div>
          <span>
            <h5>{post.author}</h5>
          </span>
          <span className="post-comments-container">
            <button
              type="button"
              className={post.showComment}
              onClick={() => toggleComments(post.id)}
              aria-label="Show comments"
            ></button>

            {post.num_comments}
          </span>
        </div>
        {renderComments()}
      </div>
    </article>
  );
};

export default Post;
