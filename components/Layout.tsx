import  React, {ReactElement} from "react";
import {useTheme} from "../hooks/Theme";

export const Layout: React.FC<{children: ReactElement[]}> = React.memo(({children}) => {
  const {colors, bp} = useTheme();

  return (
    <div css={{
      width: "100%",
      height: "100%",
      fontFamily: "Montserrat, sans-serif",
      lineHeight: 1.4,
      color: colors.black,
      background: colors.white,
      padding: "4rem 2rem",
      paddingTop: "5.5rem",
      transition: ".1s all ease-in",
      [bp.fromTablet]: {
        paddingTop: 0,
        padding: "4rem 3rem",
      }
    }}>
      <div css={{
        maxWidth: "50rem",
        margin: "auto",
        height: "100rem"
      }}>
        {children}
      </div>
    </div>
  )
});

Layout.displayName = "Layout";