import React from "react";
import { useTheme } from "../hooks/Theme";

export const Button: React.FC<{ active?: boolean }> = React.memo(
  ({ active, children, ...rest }) => {
    const { colors, bp } = useTheme();

    return (
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
          [bp.max380]: { fontSize: "1.4rem" },
          [bp.max360]: { fontSize: "1.2rem" },
          [bp.fromTablet]: { fontSize: "1.3rem" },
          [bp.fromTablet]: { fontSize: "1.2rem" },
        }}
        tabIndex={0}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
