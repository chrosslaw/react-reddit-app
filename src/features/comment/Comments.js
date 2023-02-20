import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";

import Reply from "./Reply";

const Comments = ({ post, id }) => {
  const { permalink } = post;

  const { data: comments, isLoading, error } = useGetCommentsQuery(permalink);

  console.log("Comments", comments);
  const getReplies = (repliesArray) => {
    let count = 0;
    //get up to 5 replies
    while (count < (repliesArray.length || 5)) {
      if (repliesArray[count].kind === "t1") {
        const reply = repliesArray[count];
        console.log("test", reply);
        if (reply.data.replies) {
          getReplies(reply.data.replies.data.children);
        }
        return <Reply key={reply.id} reply={reply.data} />;
      }

      count++;
    }
  };
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        "There was an error"
      ) : (
        comments.map((comment) => (
          <div className="comments">
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
