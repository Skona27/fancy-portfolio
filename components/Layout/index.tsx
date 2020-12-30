import React, { ReactElement } from "react";
import { useTheme } from "../../hooks/Theme";
import { ProgressBar } from "../ProgressBar";

interface IProps {
  children: ReactElement[];
}

export const Layout: React.FC<IProps> = React.memo(({ children }) => {
  const { colors, bp, variant } = useTheme();

  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        color: colors.secondary,
        background: colors.primary,
        padding: "4rem 2rem",
        paddingTop: "5.5rem",
        transition: ".1s all ease-in",
        [bp.max380]: { padding: "4rem 1.5rem" },
        [bp.fromTablet]: { paddingTop: 0, padding: "4rem 3rem" },
        pre: { backgroundColor: variant === "light" ? "#383838" : "#484848" },
        a: {
          color: colors.pink,
          borderColor: colors.pink,
          outlineColor: colors.pink2,
          transition: "all .1s ease-in",
          ":hover, :focus": { color: colors.pink2, borderColor: colors.pink2 },
        },
      }}
    >
      <ProgressBar />
      <div
        css={{
          maxWidth: "50rem",
          minHeight: "calc(100vh - 8rem)",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
});

Layout.displayName = "Layout";
