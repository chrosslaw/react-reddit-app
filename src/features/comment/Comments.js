import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, id }) => {
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);

  console.log("Comments", comments);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        "There was an error"
      ) : (
        comments.map((comment) => (
          <div className="comments" key={id}>
            <h4>
              <b>{comment.data.author}</b>
            </h4>

            <p>{comment.data.body}</p>

            {comment.data.replies
              ? comment.data.replies.data.children.map((reply) =>
                  reply.kind === "t1" ? (
                    <Reply key={reply.id} reply={reply.data} />
                  ) : null
                )
              : null}
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
