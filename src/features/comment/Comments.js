import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, replies }) => {
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);

  const getReplies = (arr) => {
    return arr.map((reply) =>
      reply.kind === "t1" ? (
        <Comments
          key={reply.id}
          post={reply.data}
          replies={reply.data.children}
        />
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
          <div className="comments" key={comment.data.id}>
            <Reply key={comment.data.id} reply={comment.data} />

            {comment.data.replies
              ? getReplies(comment.data.replies.data.children)
              : []}
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
