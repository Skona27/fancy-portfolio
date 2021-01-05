import React from "react";
import { INavigationItem, INavigationItemType } from "../../types";
import { ButtonItem } from "./ButtonItem";
import { LinkItem } from "./LinkItem";

export type IActionComponent = Omit<INavigationItem, "type">;

const actionComponentMap: Record<
  INavigationItemType,
  React.FunctionComponent<IActionComponent>
> = {
  BUTTON: ButtonItem,
  LINK: LinkItem,
};

export const NavigationItem: React.FC<INavigationItem> = React.memo(
  ({ href, active, type, locale, children }) => {
    const Component = actionComponentMap[type] || actionComponentMap["BUTTON"];

    return (
      <li>
        <Component href={href} active={active} locale={locale}>
          {children}
        </Component>
      </li>
    );
  }
);

NavigationItem.displayName = "NavLink";
