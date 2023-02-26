import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, replies, depth }) => {
  //replies is passed as a prop in the getReplies function.
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);

  //getReplies function recursively fetches comments and adds depth for styling
  const getReplies = (arr) => {
    return arr.map((reply) =>
      reply.kind === "t1" ? (
        <div key={reply.data.id} className={`replies reply-depth-${depth + 1}`}>
          <Comments
            post={reply.data}
            replies={reply.data.children}
            depth={depth + 1}
          />
        </div>
      ) : (
        []
      )
    );
  };
  //End getReplies Function
  //return 6 comments(See apiSlice), along with two replies, and those replies as well.
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        "There was an error"
      ) : (
        comments.map((comment) => (
          <div key={comment.data.id}>
            <Reply reply={comment.data} />
            <div className={`replies reply-depth-${depth}`}>
              {/*only get the list of two child elements*/}
              {(comment.data.replies
                ? getReplies(comment.data.replies.data.children)
                : []
              ).slice(0, 2)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
