import React from "react";

import DataProvider from "./DataProvider";
import BlogDataSource from "../../data/BlogDataSource";
import CommentDataSource from "../../data/CommentDataSource";

import Blogs from "./Blogs";
import Comments from "./Comments";
import FancierDataProvider from "./FancierDataProvider";

const RenderProps = () => (
  <>
    <h1>Render props</h1>
    <DataProvider
      observable={CommentDataSource}
      initialDataGetter={CommentDataSource.getComments}
      render={({ data }) => <Comments comments={data} />}
    />
    <FancierDataProvider
      observable={BlogDataSource}
      initialDataGetter={BlogDataSource.getBlogs}
      render={(data) => <Blogs blogs={data} />} // NOTE: argument diff
    />
  </>
);

export default RenderProps;
