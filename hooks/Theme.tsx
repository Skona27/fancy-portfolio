import React, {ReactElement} from "react";
import {IColors, IBreakpoints, themeVariants, breakpoints} from "../ui";

interface ITheme {
  colors: IColors;
  bp: IBreakpoints;
  dispatch: (action: IAction) => void;
}

interface IAction {
  type: IThemeAction;
}

type IThemeAction = "setLightTheme" | "setDarkTheme";

const theme: ITheme = {
  colors: themeVariants.light,
  bp: breakpoints,
  // tslint:disable-next-line:no-empty
  dispatch: () => {}
};

const themeReducer = (state: ITheme, action: IAction) => {
  switch (action.type) {
    case "setLightTheme":
      return {...state, colors: themeVariants.light};
    case "setDarkTheme":
      return {...state, colors: themeVariants.dark};
    default:
      return state;
  }
};

const ThemeContext = React.createContext(theme);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const Theme: React.FC<{children: ReactElement}> = React.memo(({children}) => {
  const [state, dispatch] = React.useReducer(themeReducer, theme);

  return (
    <ThemeContext.Provider value={{...state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
});

Theme.displayName = "Theme";
