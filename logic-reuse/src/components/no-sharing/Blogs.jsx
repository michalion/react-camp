import React, { useState, useEffect } from "react";

import DataSource from "../../data/BlogDataSource";
import Blog from "../buildingBlocks/Blog";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const Blogs = () => {
  const [blogs, setBlogs] = useState(DataSource.getBlogs());

  useEffect(() => {
    DataSource.addSubscriber(setBlogs);
    return () => {
      DataSource.removeSubscriber(setBlogs);
    };
  }, []);

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
