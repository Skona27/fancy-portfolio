import React, {ReactNode} from "react";
import {useTheme} from "../../hooks/Theme";

interface IProps {
  href: string;
  blank?: boolean;
  children: ReactNode;
}

export const NavIcon: React.FC<IProps> = React.memo((
  {href, blank, children, ...props}) => {
  const {colors} = useTheme();

  return (
    <li>
      <a href={href} target={blank ? "_blank" : ""} css={{
        color: colors.pink,
        transition: "color .1s ease-in",
        "&:hover": {
          color: colors.black
        }
      }} {...props}>
        {children}
      </a>
    </li>
  )
});

NavIcon.displayName = "NavIcon";
