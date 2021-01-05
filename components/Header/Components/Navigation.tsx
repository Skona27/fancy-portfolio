import React from "react";
import { useTheme } from "../../../hooks/Theme";
import { NavigationItem } from "./NavigationItem";
import { IAction } from "../types";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";

interface IProps {
  elements: IAction[];
}

const Navigation: React.FC<IProps & WithRouterProps> = React.memo(
  ({ elements, router }) => {
    const { bp, colors } = useTheme();

    const navigationRef = React.useRef<HTMLElement | null>(null);

    if (!router) {
      return null;
    }

    const isElementActive = (href: string) => {
      if (href === router.route) {
        return true;
      }
      if (href === "/blog") {
        return router.route === "/post/[id]";
      }
      if (href === "/resources") {
        return router.route === "/materialy";
      }
      return false;
    };

    return (
      <nav
        ref={navigationRef}
        css={{
          marginTop: 5,
          position: "relative",
          zIndex: 1,
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          paddingTop: "2.5rem",
          paddingBottom: "1.75rem",
          transition: "background-color .1s ease-in",
          [bp.fromDesktop]: { paddingTop: "4rem", paddingBottom: 0 },
        }}
      >
        <ul
          css={{
            listStyle: "none",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: 0,
            position: "relative",
            li: {
              ":not(:last-of-type)": {
                marginRight: 20,
                [bp.fromTablet]: { marginRight: 30 },
                [bp.fromDesktop]: { marginRight: "2rem" },
              },
            },
          }}
        >
          {elements.map((link) => (
            <NavigationItem
              href={link.href}
              type={link.type}
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
