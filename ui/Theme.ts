export type IColor = "primary" | "secondary" | "pink";
export type IBreakpoint = "fromMobile" | "fromTablet" | "fromDesktop";
export type IThemeVariant = "light" | "dark";

export type IColors = { [Key in IColor]: string };
export type IBreakpoints = { [Key in IBreakpoint]: string };
export type IThemeVariants = { [Key in IThemeVariant] : IColors};

export const breakpoints: IBreakpoints = {
  fromMobile:"@media (min-width: 430px)",
  fromTablet: "@media (min-width: 600px)",
  fromDesktop: "@media (min-width: 950px)"
};

export const themeVariants: IThemeVariants = {
  light: {
    primary: "#fafafa",
    secondary: "#444",
    pink: "#e84f7a"
  },
  dark: {
    primary: "#2d2b2b",
    secondary: "#e4e4e4",
    pink: "#f54e7d"
  }
};
