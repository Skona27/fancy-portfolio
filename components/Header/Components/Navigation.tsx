import React from "react";
import { WithRouterProps, withRouter } from "next/router";
import { useTheme } from "../../../hooks/Theme";
import { NavigationItem } from "./NavigationItem";
import { INavigationItem } from "../types";

interface IProps {
  elements: INavigationItem[];
}

const Navigation: React.FC<IProps & WithRouterProps> = React.memo(
  ({ elements, router }) => {
    const { bp, colors } = useTheme();

    if (!router) {
      return null;
    }

    const isElementActive = (href: string) => {
      if (href === router.route) {
        return true;
      }
      return !!(href === "/blog" && router.route === "/post");
    };

    return (
      <nav
        css={{
          position: "relative",
          zIndex: 1,
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          paddingTop: "2.5rem",
          paddingBottom: "2.6rem",
          transition: "background-color .1s ease-in",
          [bp.fromTablet]: {
            paddingBottom: "1.75rem"
          },
          [bp.fromDesktop]: {
            paddingTop: "4rem",
            paddingBottom: 0
          }
        }}
      >
        <ul
          css={{
            listStyle: "none",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: 0,
            justifyContent: "space-between",
            [bp.fromTablet]: {
              justifyContent: "flex-start"
            }
          }}
        >
          {elements.map(link => (
            <NavigationItem
              href={link.href}
              active={isElementActive(link.href)}
              key={link.href}
            >
              {link.title}
            </NavigationItem>
          ))}
        </ul>
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

export default withRouter(Navigation);
