import * as React from 'react';

const Blog = React.memo(() => {
  return (
    <>
      <h2>Moje wpisy</h2>
    </>
  )
});

Blog.displayName = "Blog";
export default Blog;