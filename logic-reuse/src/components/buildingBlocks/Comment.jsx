import React from "react";
import { string, shape } from "prop-types";

const containerStyle = {
  margin: "0.5em",
  border: "2px solid black",
  borderRadius: "15px",
  width: "150px",
  height: "140px",
};

const headerStyle = {
  borderBottom: "1px solid black",
  padding: "0.1em 0.4em",
};

const textStyle = {
  padding: "0.5em",
};

const Comment = ({ comment }) => (
  <div style={containerStyle}>
    <h4 style={headerStyle}>{comment.author}</h4>
    <p style={textStyle}>{comment.text}</p>
  </div>
);

Comment.propTypes = {
  comment: shape({
    author: string,
    text: string,
  }),
};

export default Comment;
