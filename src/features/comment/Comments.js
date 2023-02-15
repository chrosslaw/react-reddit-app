import React from "react";
import { useGetCommentsQuery } from "../api/apiSlice";
import Spinner from "../../components/spinner/Spinner";
import Replies from "./Replies";

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
        comments.map((replies) => (
          <Replies key={replies.data.id} replies={replies.data} />
        ))
      )}
    </div>
  );
};
export default Comments;
