import React from "react";
import Tile from "../tile/Tile";
import { Comment } from "../comment/Comment";

const Post = ({ post, toggleComments }) => {
  const renderComments = () => {
    if (post.hasError) {
      return (
        <div>
          <h5>An error has occured</h5>
        </div>
      );
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
      <Tile>
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
                onClick={() => toggleComments(post.permalink)}
                aria-label="Show comments"
              ></button>

              {post.num_comments}
            </span>
          </div>
          {renderComments()}
        </div>
      </Tile>
    </article>
  );
};

export default Post;
