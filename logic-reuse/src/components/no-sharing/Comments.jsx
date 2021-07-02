import React, { useState, useEffect } from "react";

import DataSource from "../../data/CommentDataSource";
import Comment from "../buildingBlocks/Comment";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Comments = () => {
  const [comments, setComments] = useState(DataSource.getComments());

  useEffect(() => {
    DataSource.addSubscriber(setComments);
    return () => {
      DataSource.removeSubscriber(setComments);
    };
  }, []);

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
