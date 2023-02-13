import React, { useState } from "react";
import Comment from "../comment/Comment";
import Gallery from "../gallery/Gallery";
import { useGetSubredditsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";
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
    permalink,
  } = post;
  const [commentsShowing, setCommentsShowing] = useState(false);
  const [commentQuery, setCommentQuery] = useState("");
  const { data: commentList = [] } = useGetSubredditsQuery(commentQuery);
  // const showComments = () => {
  //   return (
  //     <div id="comments">
  //       {error ? (
  //         "There was an error loading the comments."
  //       ) : isLoading ? (
  //         <Spinner />
  //       ) : commentsShowing ? (
  //         <div>
  //           {post.comments.map((comment) => (
  //             <Comment comment={comment} key={id} />
  //           ))}
  //         </div>
  //       ) : null}
  //     </div>
  //   );
  // };

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
            <Gallery />
          </div>
        ) : (
          <div className="post-url" href={url}>
            <a href={url}>
              <b>Check it out at here </b>
            </a>
          </div>
        )}
        {/* <button onClick={toggleComments}> Show Comments</button>
        <div id="comments">{showComments()}</div> */}
      </div>
    </div>
  );
};

export default Post;
