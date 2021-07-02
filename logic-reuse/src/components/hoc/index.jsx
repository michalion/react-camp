import React from "react";

import BlogsWithHooks from "./hoc-hook/BlogsWithSubscription";
import CommentsWithHooks from "./hoc-hook/CommentsWithSubscription";

import BlogsWithClass from "./hoc-class/BlogsWithSubscription";
import CommentsWithClass from "./hoc-class/CommentsWithSubscription";

export const HocClass = () => (
  <>
    <h1>HOC Class</h1>
    <CommentsWithClass />
    <BlogsWithClass />
  </>
);

export const HocHook = () => (
  <>
    <h1>HOC Hooks</h1>
    <CommentsWithHooks />
    <BlogsWithHooks />
  </>
);
