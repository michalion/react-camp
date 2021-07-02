import React from "react";

import Comment from "../buildingBlocks/Comment";
import CommentDataSource from "../../data/CommentDataSource";
import useDataSource from "./useDataSource";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Comments = () => {
  const comments = useDataSource(
    CommentDataSource,
    CommentDataSource.getComments()
  );

  return (
    <div>
      <h3>Comment stream</h3>
      <div style={style}>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.author} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
