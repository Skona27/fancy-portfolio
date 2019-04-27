import  React, {ReactElement} from "react";
import {useTheme} from "../hooks/Theme";

export const Layout: React.FC<{children: ReactElement[]}> = React.memo(({children}) => {
  const {colors, bp} = useTheme();

  return (
    <div css={{
      width: "100%",
      height: "100%",
      color: colors.secondary,
      background: colors.primary,
      padding: "4rem 2rem",
      paddingTop: "5.5rem",
      transition: ".1s all ease-in",
      [bp.fromTablet]: {
        paddingTop: 0,
        padding: "4rem 3rem",
      },
      "code, pre": {
        backgroundColor: colors.secondary,
        color: colors.primary
      }
    }}>
      <div css={{
        maxWidth: "50rem",
        margin: "auto"
      }}>
        {children}
      </div>
    </div>
  )
});

Layout.displayName = "Layout";