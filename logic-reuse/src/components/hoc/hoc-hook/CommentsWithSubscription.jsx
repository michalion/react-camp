import Comments from "../Comments";
import withSubscription from "./withSubscription";

import commentDataSource from "../../../data/CommentDataSource";

const withDataSource = withSubscription(
  Comments,
  commentDataSource,
  commentDataSource.getComments
);

export default withDataSource;
