import React from "react";

import Comment from "../buildingBlocks/Comment";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Comments = ({ comments }) => {
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
