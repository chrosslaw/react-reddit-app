import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, replies, depth }) => {
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);
  console.log(comments);
  //get Replies recursively gets comments

  const getReplies = (arr) => {
    return arr.map((reply) =>
      reply.kind === "t1" ? (
        <div className={`replies reply-depth-${depth + 1}`}>
          <Comments
            key={reply.data.id}
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
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        "There was an error"
      ) : (
        comments.map((comment) => (
          <div>
            <Reply key={comment.data.id} reply={comment.data} />
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
