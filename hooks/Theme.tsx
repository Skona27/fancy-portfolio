import React, { ReactElement } from "react";
import {
  IColors,
  IBreakpoints,
  themeVariants,
  breakpoints,
  IThemeVariant
} from "../ui";

interface ITheme {
  variant: IThemeVariant;
  colors: IColors;
  bp: IBreakpoints;
  dispatch: (action: IAction) => void;
}

interface IAction {
  type: IThemeAction;
}

type IThemeAction = "setLightTheme" | "setDarkTheme";

const theme: ITheme = {
  variant: "light",
  colors: themeVariants.light,
  bp: breakpoints,
  // tslint:disable-next-line:no-empty
  dispatch: () => {}
};

const themeReducer = (state: ITheme, action: IAction) => {
  switch (action.type) {
    case "setLightTheme":
      sessionStorage.setItem("themeVariant", "light");
      return { ...state, colors: themeVariants.light, variant: "light" };
    case "setDarkTheme":
      sessionStorage.setItem("themeVariant", "dark");
      return { ...state, colors: themeVariants.dark, variant: "dark" };
    default:
      return state;
  }
};

const ThemeContext = React.createContext(theme);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const Theme: React.FC<{ children: ReactElement }> = React.memo(
  ({ children }) => {
    // @ts-ignore
    const [state, dispatch] = React.useReducer(themeReducer, theme);
    const [variant, setVariant] = React.useState<IThemeVariant>("light");

    React.useEffect(() => {
      const currentVariant: IThemeVariant =
        sessionStorage.getItem("themeVariant") !== "dark" ? "light" : "dark";
      setVariant(currentVariant);
    }, [state]);

    return (
      <ThemeContext.Provider
        value={{ ...state, colors: themeVariants[variant], variant, dispatch }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
);

Theme.displayName = "Theme";
