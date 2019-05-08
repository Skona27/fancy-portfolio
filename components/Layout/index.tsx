import React, { ReactElement } from "react";
import { useTheme } from "../../hooks/Theme";

interface IProps {
  children: ReactElement[];
}

export const Layout: React.FC<IProps> = React.memo(({ children }) => {
  const { colors, bp } = useTheme();

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
        [bp.fromTablet]: {
          paddingTop: 0,
          padding: "4rem 3rem"
        },
        "code, pre": {
          backgroundColor: colors.secondary,
          color: colors.primary
        },
        a: {
          color: colors.pink,
          borderColor: colors.pink,
          transition: "all .1s ease-in",
          "&:hover": {
            color: colors.pink2,
            borderColor: colors.pink2
          }
        }
      }}
    >
      <div
        css={{
          maxWidth: "50rem",
          minHeight: "calc(100vh - 8rem)",
          margin: "auto"
        }}
      >
        {children}
      </div>
    </div>
  );
});

Layout.displayName = "Layout";
