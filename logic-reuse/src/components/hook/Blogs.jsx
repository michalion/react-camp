import React from "react";

import Blog from "../buildingBlocks/Blog";
import BlogDataSource from "../../data/BlogDataSource";
import useDataSource from "./useDataSource";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Blogs = () => {
  const blogs = useDataSource(BlogDataSource, BlogDataSource.getBlogs());

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
