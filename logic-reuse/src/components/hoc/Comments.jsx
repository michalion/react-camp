import React from "react";

import Comment from "../buildingBlocks/Comment";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Comments = ({ data }) => {
  return (
    <div>
      <h3>Comment stream</h3>
      <div style={style}>
        {data.map((comment) => (
          <Comment comment={comment} key={comment.author} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
