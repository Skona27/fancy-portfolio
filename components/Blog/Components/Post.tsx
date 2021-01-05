import * as React from "react";
import { useTheme } from "../../../hooks/Theme";
import { IPost } from "../types";
import Link from "next/link";
import { Languages } from "../../../hooks/useLang/types";

interface IProps extends IPost {
  dayMonth: string;
}

const langs: Record<Languages, string> = {
  pl: "PL",
  "en-US": "ENG",
};

export const Post: React.FC<IProps> = React.memo(
  ({ id, title, dayMonth, slug, lang }) => {
    const { colors, bp } = useTheme();

    return (
      <li
        css={{
          color: colors.pink,
          margin: ".6rem 0",
          [bp.fromTablet]: { margin: ".3rem 0" },
        }}
      >
        <article css={{ color: colors.secondary }}>
          <Link href={`/post/${slug || id}`}>
            <a style={{ color: colors.secondary, border: "none" }}>
              <h3
                css={{
                  display: "inline",
                  letterSpacing: 1,
                  fontWeight: 400,
                  borderBottom: `3px solid transparent`,
                  cursor: "pointer",
                  padding: 2,
                  marginRight: 20,
                  ":hover": { borderColor: colors.pink },
                }}
              >
                [{langs[lang]}] - {title}
              </h3>
            </a>
          </Link>
          <span css={{ fontSize: ".875rem", letterSpacing: 1 }}>
            {dayMonth}
          </span>
        </article>
      </li>
    );
  }
);

Post.displayName = "Post";
