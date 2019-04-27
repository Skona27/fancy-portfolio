import React, {ReactNode} from "react";
import {useTheme} from "../../hooks/Theme";

interface IProps {
  href: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export const NavIcon: React.FC<IProps> = React.memo((
  {children, ...props}) => {
  const {colors} = useTheme();

  return (
    <li>
      <a css={{
        color: colors.pink,
        transition: "color .1s ease-in",
        "&:hover": {
          color: colors.secondary
        }
      }} {...props}>
        {children}
      </a>
    </li>
  )
});

NavIcon.displayName = "NavIcon";
