import React from "react";

import Blog from "../buildingBlocks/Blog";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h3>Blogs stream</h3>
      <div style={style}>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.author} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
