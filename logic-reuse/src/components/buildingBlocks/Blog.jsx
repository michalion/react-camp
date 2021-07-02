import React from "react";
import { string, shape } from "prop-types";

const style = {
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

const Blog = ({ blog }) => (
  <div style={style}>
    <h4 style={headerStyle}>{blog.author}</h4>
    <p style={textStyle}>{blog.text}</p>
  </div>
);

Blog.propTypes = {
  blog: shape({
    author: string,
    text: string,
  }),
};

export default Blog;
