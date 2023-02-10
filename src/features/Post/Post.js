// import Comments from "../comment/Comments";

import "./Post.css";
const Post = ({ post, setRedditPosts }) => {
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
  } = post;
  const handleClick = (e) => {
    e.preventDefault();
    setRedditPosts(e.target.value);
  };
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
    <div key={id} className="post-container">
      <h2>{title}</h2>
      <h5>Post by: {author}</h5>
      <button value={subreddit} onClick={handleClick}>
        <em>_{subreddit}</em>
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
            <blockquote>{selftext}</blockquote>
          </div>
        ) : is_reddit_media_domain ? (
          <a href={url} className="post-image">
            <img src={url} alt={subreddit} />
          </a>
        ) : (
          <a className="post-url" href={url}>
            Check it out at: {url}
          </a>
        )}
      </div>
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
