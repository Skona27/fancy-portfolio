import React, {ReactElement} from "react";

export type IColor = "white" | "black" | "pink";
type IColors = { [Key in IColor]: string };

type IBreakpoint = "fromTablet" | "fromDesktop";
type IBreakpoints = { [Key in IBreakpoint]: string };

const breakpoints: IBreakpoints = {
  fromTablet: "@media (min-width: 768px)",
  fromDesktop: "@media (min-width: 992px)"
};

const lightColors: IColors = {
  white: "#fafafa",
  black: "#444",
  pink: "#e84f7a"
};

const darkColors: IColors = {
  white: "#3a3535",
  black: "#ffffff",
  pink: "#f54e7d"
};

interface ITheme {
  colors: IColors;
  bp: IBreakpoints;
  dispatch: (action: IAction) => void;
}

const defaultTheme: ITheme = {
  colors: lightColors,
  bp: breakpoints,
  // tslint:disable-next-line:no-empty
  dispatch: () => {
  }
};

type IThemeAction = "setLightTheme" | "setDarkTheme";

interface IAction {
  type: IThemeAction;
}

const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "setLightTheme":
      return {...state, colors: lightColors};
    case "setDarkTheme":
      return {...state, colors: darkColors};
    default:
      return state;
  }
};

export const ThemeContext = React.createContext(defaultTheme);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const Theme: React.FC<{children: ReactElement}> = React.memo(({children}) => {
  const [state, dispatch] = React.useReducer(reducer, defaultTheme);

  return (
    <ThemeContext.Provider value={{...state, dispatch}}>{children}</ThemeContext.Provider>
  );
});

Theme.displayName = "Theme";
