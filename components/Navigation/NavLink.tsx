import React, {ReactNode} from "react";
import Link from 'next/link';
import {useTheme} from "../../hooks/Theme";

interface IProps {
  href: string;
  active: boolean;
  children: string | ReactNode;
}

export const NavLink: React.FC<IProps> = React.memo(({href, active, children}) => {
  const {colors} = useTheme();

  return (
    <li css={{
      padding: 2,
      borderBottom: `3px solid ${active ? colors.pink : "transparent"}`,
      cursor: "pointer",
      transition: "borderColor .15s ease-in",
      "&:not(:first-of-type)": {
        marginLeft: "2.5rem"
      },
      "&:hover": {
        borderColor: colors.pink
      }
    }}>
      <Link href={href}>
        <a css={{
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "1.2rem",
          letterSpacing: 2
        }}>
          {children}
        </a>
      </Link>
    </li>
  )
});

NavLink.displayName = "NavLink";
