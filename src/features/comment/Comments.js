import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, replies }) => {
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);
  // console.log(comments);
  const getReplies = (arr) => {
    return arr.map((reply) =>
      reply.kind === "t1" ? (
        <div>
          <Comments
            key={reply.id}
            post={reply.data}
            replies={reply.data.children}
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
          <div className="comments" key={comment.data.id}>
            <Reply key={comment.data.id} reply={comment.data} />
            <div className="replies">
              {comment.data.replies
                ? getReplies(comment.data.replies.data.children).slice(0, 2)
                : []}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
