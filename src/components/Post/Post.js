// import React, { useEffect, useState } from "react";
import Comments from "../comment/Comments";
import Spinner from "../spinner/Spinner";

const Post = ({ post, index, toggleComments }) => {
  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h5>An error occurred while loading comments.</h5>
        </div>
      );
    }
    if (post.loadingComments) {
      <Spinner />;
    }
    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comments comment={comment} key={comment.id} />
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
