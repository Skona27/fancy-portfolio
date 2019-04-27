import React from "react";
import {WithRouterProps, withRouter} from 'next/router';
import {useTheme} from "../../../hooks/Theme";
import {NavigationItem} from "./NavigationItem";
import {INavigationItem} from "../types";

interface IProps {
  elements: INavigationItem[]
}

const Navigation: React.FC<IProps & WithRouterProps> = React.memo(({elements, router}) => {
  const {bp} = useTheme();

  if (!router) {
    return null
  }

  return (
    <nav css={{
      display: "flex",
      alignItems: "center",
      marginTop: "2.5rem",
      [bp.fromDesktop]: {
        marginTop: "4rem",
      }
    }}>
      <ul css={{
        listStyle: "none",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        [bp.max360]: {
          justifyContent: "flex-start",
        },
        justifyContent: "space-between",
        [bp.fromTablet]: {
          justifyContent: "flex-start"
        },
      }}>
        {elements.map(link =>
          <NavigationItem href={link.href} active={link.href === router.asPath} key={link.href}>
            {link.title}
          </NavigationItem>
        )}
      </ul>
    </nav>
  )
});

Navigation.displayName = "Navigation";

export default withRouter(Navigation);
