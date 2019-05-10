import React from "react";
import { darken, lighten } from "polished";
import { WithRouterProps, withRouter } from "next/router";
import { useTheme } from "../../../hooks/Theme";
import { NavigationItem } from "./NavigationItem";
import { INavigationItem } from "../types";

interface IProps {
  elements: INavigationItem[];
}

const Navigation: React.FC<IProps & WithRouterProps> = React.memo(
  ({ elements, router }) => {
    const { bp, colors, variant } = useTheme();
    const navigationRef = React.useRef<HTMLElement | null>(null);
    const [isStickyToTop, setIsStickyToTop] = React.useState(false);

    const handleScroll = React.useCallback(() => {
      if (!navigationRef || !navigationRef.current) {
        return;
      }
      setIsStickyToTop(navigationRef.current.getBoundingClientRect().top < 0);
    }, [navigationRef]);

    React.useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        ref={navigationRef}
        css={{
          position: "relative",
          zIndex: 1,
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          paddingTop: "2.5rem",
          paddingBottom: "1.75rem",
          transition: "background-color .1s ease-in",
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
            position: "relative",
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

        <div
          css={{
            opacity: isStickyToTop ? 1 : 0,
            transition: "opacity .15s ease-in",
            width: "100vw",
            height: 1,
            boxShadow:
              variant === "light"
                ? "0 0 1px rgba(0, 0, 0, .75)"
                : "0 0 1px white",
            backgroundColor:
              variant === "light"
                ? darken(0.17, colors.primary)
                : lighten(0.2, colors.primary),
            position: "absolute",
            bottom: 0,
            left: "-2rem",
            [bp.max380]: {
              left: "-1.5rem"
            },
            [bp.fromTablet]: {
              display: "none"
            }
          }}
        />
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

export default withRouter(Navigation);
