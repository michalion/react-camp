import Observable from "./Observable";

import { getComments } from "./dummyData";

class CommentDataSource extends Observable {
  constructor() {
    super();

    this.index = 0;
    this.comments = [];
    this.interval = null;

    this.getComments = this.getComments.bind(this);
    this.startBlogGeneration = this.startCommentsGeneration.bind(this);

    this.startCommentsGeneration();
  }

  getComments() {
    return this.comments;
  }

  startCommentsGeneration() {
    this.interval = setInterval(() => {
      this.comments = getComments(this.index);
      this.notifySubscribers(this.comments);
      this.index += 1;
    }, 2000);
  }
}

const singletonCommentDataSource = new CommentDataSource();

export default singletonCommentDataSource;
