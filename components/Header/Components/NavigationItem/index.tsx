import React from "react";
import { useTheme } from "../../../../hooks/Theme";
import { INavigationItem, INavigationItemType } from "../../types";
import { ButtonItem } from "./ButtonItem";
import { LinkItem } from "./LinkItem";

export type IActionComponent = Omit<INavigationItem, "type">;

const actionComponentMap: Record<
  INavigationItemType,
  React.FunctionComponent<IActionComponent>
> = {
  BUTTON: ButtonItem,
  LINK: LinkItem
};

export const NavigationItem: React.FC<INavigationItem> = React.memo(
  ({ href, active, type, children }) => {
    const { bp } = useTheme();

    const Component = actionComponentMap[type] || actionComponentMap["BUTTON"];

    return (
      <li
        css={{
          [bp.fromTablet]: {
            margin: 0,
            "&:not(:first-of-type)": { marginLeft: "2.5rem" }
          }
        }}
      >
        <Component href={href} active={active}>
          {children}
        </Component>
      </li>
    );
  }
);

NavigationItem.displayName = "NavLink";
