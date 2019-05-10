import React, { ReactNode } from "react";
import { useTheme } from "../../../hooks/Theme";

interface IProps {
  href: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export const Icon: React.FC<IProps> = React.memo(({ children, ...props }) => {
  const { colors, bp } = useTheme();

  return (
    <li>
      <a
        css={{
          color: colors.pink,
          fontSize: "1.6rem",
          transition: "color .1s ease-in",
          textDecoration: "none",
          border: "none",
          outlineColor: colors.pink,
          ":hover, :focus": {
            color: `${colors.secondary} !important`
          },
          [bp.fromMobile]: {
            fontSize: "1.5rem"
          },
          [bp.fromTablet]: {
            fontSize: "1.3rem"
          }
        }}
        {...props}
      >
        {children}
      </a>
    </li>
  );
});

Icon.displayName = "NavIcon";
