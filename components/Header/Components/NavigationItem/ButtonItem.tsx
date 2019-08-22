import Link from "next/link";
import { useTheme } from "../../../../hooks/Theme";
import React from "react";
import { IActionComponent } from ".";

export const ButtonItem: React.FC<IActionComponent> = React.memo(
  ({ active, href, children }) => {
    const { colors, bp } = useTheme();

    return (
      <Link href={href}>
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
    );
  }
);
ButtonItem.displayName = "ButtonItem";
