// import Comments from "../comment/Comments";
// import Spinner from "../spinner/Spinner";

import "./Post.css";
const Post = ({ post, toggleComments }) => {
  const {
    id,
    is_self,
    selftext,
    is_video,
    media,
    title,
    author,
    subreddit,
    url,
  } = post;
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
      <p>_{subreddit}</p>
      <div className="image-container">
        {is_video ? (
          <div className="video-container">
            <video controls className="video">
              <source src={media.reddit_video.scrubber_media_url} />
            </video>
          </div>
        ) : is_self ? (
          <p>{selftext}</p>
        ) : (
          <a href={url} className="post-image">
            <img src={url} alt={subreddit} />
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
