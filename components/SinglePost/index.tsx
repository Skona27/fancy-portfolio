import React from "react";
import {IPost} from "../Blog/types";

export const SinglePost: React.FC<IPost> = React.memo(({title, content}) => {
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}} />;
    </article>
  )
});

SinglePost.displayName = "SinglePost";
