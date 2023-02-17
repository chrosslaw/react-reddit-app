import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post }) => {
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
          <div>
            <h5>{comment.data.author}</h5>
            <p>{comment.data.body}</p>
            <div className="replies-container">
              {comment.data.replies
                ? comment.data.replies.data.children.map((reply) => (
                    <Reply key={reply.id} reply={reply.data} />
                  ))
                : null}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
