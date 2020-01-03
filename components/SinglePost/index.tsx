import React from "react";
import Link from "next/link";
import { IPost } from "../Blog/types";
import { useTheme } from "../../hooks/Theme";

export const SinglePost: React.FC<IPost> = React.memo(({ title, content }) => {
  const { bp } = useTheme();

  React.useEffect(() => {
    // @ts-ignore
    Prism.highlightAll();
  });

  return (
    <>
      <article>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content.replace(/\\n/g, "\n") }}
        />
      </article>

      <div
        css={{
          marginTop: "2rem",
          textAlign: "right",
          fontSize: "1.25rem",
          [bp.fromDesktop]: { marginTop: "3rem", textAlign: "left" }
        }}
      >
        <Link href="/blog">
          <a>
            <i className="icon icon-arrow-left2" />
            <span css={{ marginLeft: ".7rem" }}>Wszystkie posty</span>
          </a>
        </Link>
      </div>
    </>
  );
});

SinglePost.displayName = "SinglePost";
