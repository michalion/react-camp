import Blogs from "../Blogs";
import withSubscription from "./withSubscription";

import blogDataSource from "../../../data/BlogDataSource";

const withDataSource = withSubscription(
  Blogs,
  blogDataSource,
  blogDataSource.getBlogs
);

export default withDataSource;
