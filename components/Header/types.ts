import { ReactNode } from "react";
import { Languages } from "../../hooks/useLang/types";

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
  locale?: Languages;
  children: string | ReactNode;
}

export type INavigationItemType = "LINK" | "BUTTON";
