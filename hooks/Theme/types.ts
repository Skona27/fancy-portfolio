import { IThemeVariant, IColors, IBreakpoints } from "../../ui";

export interface ITheme {
  variant: IThemeVariant;
  colors: IColors;
  bp: IBreakpoints;
  dispatch: (action: IAction) => void;
}

export interface IAction {
  type: IThemeAction;
}

export type IThemeAction = "setLightTheme" | "setDarkTheme";
