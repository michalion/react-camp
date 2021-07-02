import Observable from "./Observable";

import { getBlogs } from "./dummyData";

class BlogDataSource extends Observable {
  constructor() {
    super();

    this.index = 0;
    this.blogs = getBlogs(this.index);
    this.interval = null;

    this.getBlogs = this.getBlogs.bind(this);
    this.startBlogGeneration = this.startBlogGeneration.bind(this);

    this.startBlogGeneration();
  }

  getBlogs() {
    return this.blogs;
  }

  startBlogGeneration() {
    this.interval = setInterval(() => {
      this.blogs = getBlogs(this.index);
      this.index += 1;
      this.notifySubscribers(this.blogs);
    }, 2000);
  }
}

const singletonBlogDataSource = new BlogDataSource();

export default singletonBlogDataSource;
