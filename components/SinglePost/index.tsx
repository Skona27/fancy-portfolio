import React from "react";
import Link from "next/link";
import {IPost} from "../Blog/types";

export const SinglePost: React.FC<IPost> = React.memo(({title, content}) => {
  return (
    <>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </article>

      <div css={{ marginTop: "1.5rem" }}>
        <Link href="/blog">
          <a>
            <i className="fas fa-arrow-left"></i>
            <span css={{ marginLeft: ".7rem" }}>Blog</span>
          </a>
        </Link>
      </div>
    </>
  )
});

SinglePost.displayName = "SinglePost";
