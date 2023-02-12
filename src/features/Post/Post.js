// import Comments from "../comment/Comments";

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
    num_comments,
    showComment,
  } = post;

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
              <source src={media.reddit_video.scrubber_media_url} />
            </video>
          </div>
        ) : is_self ? (
          <div className="selftext-container">
            <p>{selftext}</p>
          </div>
        ) : is_reddit_media_domain ? (
          <a href={url} className="post-image">
            <img src={url} alt={subreddit} />
          </a>
        ) : (
          <div className="post-url" href={url}>
            <a href={url}>
              <b>Check it out at here </b>
            </a>
          </div>
        )}
      </div>
      <span>
        <button
          type="button"
          className={showComment}
          onClick={() => post.id}
          aria-label="Show comments"
        ></button>

        {num_comments}
      </span>
    </div>
  );
};

export default Post;
