import React, { useState } from "react";
import Comments from "../comment/Comments";

import "./Post.css";

const Post = ({ post, setRedditPosts, setSearchTerm }) => {
  const {
    id,
    is_self,
    selftext,
    is_video,
    media,
    is_reddit_media_domain,
    title,
    author,
    subreddit,
    url,
    is_gallery,
    num_comments,
    thumbnail,
  } = post;
  const [commentsShowing, setCommentsShowing] = useState(false);

  return (
    <div key={id} className="post-container">
      <h2>{title}</h2>
      <h5>Post by: {author}</h5>
      <button
        onClick={() => {
          //if search term is currently used, clear it out. Then query the clicked post name
          setSearchTerm("");
          setRedditPosts(subreddit);
        }}
      >
        _{subreddit}
      </button>

      <div className="media-container">
        {is_video ? (
          <div className="video-container">
            <video controls className="video">
              <source src={media.reddit_video.fallback_url} />
            </video>
          </div>
        ) : is_self ? (
          <div className="selftext-container">
            {selftext.length < 400 ? selftext : `${selftext.slice(0, 400)}`}
          </div>
        ) : is_reddit_media_domain ? (
          <div>
            <a href={url} className="post-image">
              <img src={url} alt={subreddit} />
            </a>
          </div>
        ) : is_gallery ? (
          <div>
            <a href={url} className="post-image">
              <img src={thumbnail} alt={subreddit} />
            </a>
          </div>
        ) : (
          <div className="post-url" href={url}>
            <a href={url}>
              <b>Check it out at here </b>
            </a>
          </div>
        )}
      </div>
      <button
        type="button"
        className="commentsButton"
        onClick={() => {
          setCommentsShowing(!commentsShowing);
        }}
      >
        <b>
          <p>
            {commentsShowing ? "^ Hide Comments ^" : `${num_comments} Comments`}
          </p>
        </b>
      </button>
      {commentsShowing && (
        <div className="comments ">
          <Comments key={id} post={post} postId={id} />
        </div>
      )}
    </div>
  );
};

export default Post;
