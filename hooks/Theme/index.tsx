import React, { ReactElement } from "react";
import { themeVariants, breakpoints, IThemeVariant } from "../../ui";
import { ITheme, IAction } from "./types";

const hours = new Date().getHours();
const isDay = hours > 7 && hours < 21;

const theme: ITheme = {
  variant: isDay ? "light" : "dark",
  colors: isDay ? themeVariants.light : themeVariants.dark,
  bp: breakpoints,
  dispatch: () => {}
};

const themeReducer = (state: ITheme, action: IAction): ITheme => {
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
    const [state, dispatch] = React.useReducer(themeReducer, theme);

    React.useEffect(() => {
      const currentVariant = sessionStorage.getItem(
        "themeVariant"
      ) as IThemeVariant;

      if (currentVariant === "light") {
        dispatch({ type: "setLightTheme" });
      }

      if (currentVariant === "dark") {
        dispatch({ type: "setDarkTheme" });
      }
    }, []);

    return (
      <ThemeContext.Provider value={{ ...state, dispatch }}>
        {children}
      </ThemeContext.Provider>
    );
  }
);

Theme.displayName = "Theme";
