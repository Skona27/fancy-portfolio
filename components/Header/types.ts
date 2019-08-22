import { ReactNode } from "react";

export interface IHeader {
  title: string;
  subtitle: string;
  elements: IAction[];
  image: {
    url: string;
    alt: string;
  };
}

export interface IAction {
  href: string;
  title: string;
  type: INavigationItemType;
}

export interface INavigationItem {
  href: string;
  active: boolean;
  type: INavigationItemType;
  children: string | ReactNode;
}

export type INavigationItemType = "LINK" | "BUTTON";
