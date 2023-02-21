import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, id }) => {
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);
  const getReplies = (arr) => {
    return arr.map((reply) =>
      reply.kind === "t1" ? <Reply key={reply.id} reply={reply.data} /> : []
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
            <h4>
              <b>{comment.data.author}</b>
            </h4>
            <p>{comment.data.body}</p>

            {comment.data.replies
              ? getReplies(comment.data.replies.data.children)
              : null}
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
