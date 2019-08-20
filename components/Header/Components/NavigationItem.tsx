import React, { ReactNode } from "react";
import Link from "next/link";
import { useTheme } from "../../../hooks/Theme";

interface IProps {
  href: string;
  active: boolean;
  children: string | ReactNode;
}

export const NavigationItem: React.FC<IProps> = React.memo(
  ({ href, active, children, ...props }) => {
    const { colors, bp } = useTheme();

    return (
      <li
        css={{
          [bp.fromTablet]: {
            margin: 0,
            "&:not(:first-of-type)": { marginLeft: "2.5rem" }
          }
        }}
      >
        <Link href={href} {...props}>
          <button
            css={{
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "1.35rem",
              letterSpacing: 2,
              border: "none",
              background: "none",
              outlineColor: colors.pink,
              fontFamily: "inherit",
              color: "inherit",
              borderBottom: `3px solid ${active ? colors.pink : "transparent"}`,
              padding: 2,
              transition: "borderColor .15s ease-in",
              ":hover, :focus": { borderColor: colors.pink },
              [bp.max380]: { fontSize: "1.3rem" },
              [bp.max360]: { fontSize: "1.14rem" },
              [bp.fromTablet]: { fontSize: "1.3rem" },
              [bp.fromTablet]: { fontSize: "1.2rem" }
            }}
            tabIndex={0}
          >
            {children}
          </button>
        </Link>
      </li>
    );
  }
);

NavigationItem.displayName = "NavLink";
