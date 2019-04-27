import * as React from 'react';
import {Blog as BlogComponent} from "../components/Blog";
import {posts} from "../mocks/blog";

const Blog = React.memo(() => {
  return (
    <main>
      <BlogComponent elements={posts} />
    </main>
  )
});

Blog.displayName = "Blog";
export default Blog;
