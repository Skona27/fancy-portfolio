import { useTheme } from "../../../../hooks/Theme";
import React from "react";
import { IActionComponent } from ".";

export const LinkItem: React.FC<IActionComponent> = React.memo(
  ({ active, href, children }) => {
    const { colors, bp } = useTheme();

    console.log(active);

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer preload"
        css={{
          display: "block",
          textDecoration: "none",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: "1.35rem",
          letterSpacing: 2,
          border: "none",
          background: "none",
          outlineColor: colors.pink,
          fontFamily: "inherit",
          color: `${colors.secondary} !important`,
          borderBottom: `3px solid ${
            active ? colors.pink : "transparent"
          } !important`,
          padding: 2,
          transition: "borderColor .15s ease-in",
          ":hover": { borderColor: `${colors.pink} !important` },
          [bp.max380]: { fontSize: "1.3rem" },
          [bp.max360]: { fontSize: "1.14rem" },
          [bp.fromTablet]: { fontSize: "1.3rem" },
          [bp.fromTablet]: { fontSize: "1.2rem" }
        }}
        tabIndex={0}
      >
        {children}
      </a>
    );
  }
);
LinkItem.displayName = "LinkItem";
