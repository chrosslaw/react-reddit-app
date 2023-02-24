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
    subreddit_name_prefixed,
    url,
    is_gallery,
    num_comments,
    thumbnail,
    replies,
  } = post;
  const [commentsShowing, setCommentsShowing] = useState(false);

  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>
        <b>Post by: {author}</b>
      </p>

      <button
        onClick={() => {
          //if search term is currently used, clear it out. Then query the clicked post name
          setSearchTerm("");
          setRedditPosts(subreddit);
        }}
      >
        <b>{subreddit_name_prefixed}</b>.
      </button>

      <div className="media-container">
        {is_video ? (
          <div className="video-container">
            <video controls className="video">
              <source type="video/mp4" src={media.reddit_video.fallback_url} />
            </video>
          </div>
        ) : is_self ? (
          <div className="selftext-container">
            <p>
              {selftext.includes("http")
                ? selftext.slice(0, 100)
                : selftext.length < 400
                ? selftext
                : `${selftext.slice(0, 300)}`}
              ......
            </p>
            <b>
              <a href={url} target="_blank" rel="noreferrer">
                <em>Read more here.</em>
              </a>
            </b>
          </div>
        ) : is_reddit_media_domain ? (
          <div className="post-image">
            <a href={url}>
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
            <a href={url} target="_blank" rel="noreferrer">
              <b>Check it out here </b>
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
          {commentsShowing
            ? "^ Hide Comments ^"
            : `${num_comments} Total Comments`}
        </b>
      </button>

      {commentsShowing && (
        <div className="comments">
          <Comments key={id} post={post} replies={replies} depth={0} />

          <a href={url} className="comment-link">
            <b>Head to the source to see the full list of comments.</b>
          </a>
          <button
            type="button"
            className="commentsButton"
            onClick={() => {
              setCommentsShowing(!commentsShowing);
            }}
          >
            <b>^ Hide Comments ^</b>
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
