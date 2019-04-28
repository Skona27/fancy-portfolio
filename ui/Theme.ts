export type IColor = "primary" | "secondary" | "pink" | "pink2";
export type IBreakpoint = "max360" | "max380" | "fromMobile" | "fromTablet" | "fromDesktop";
export type IThemeVariant = "light" | "dark";

export type IColors = { [Key in IColor]: string };
export type IBreakpoints = { [Key in IBreakpoint]: string };
export type IThemeVariants = { [Key in IThemeVariant] : IColors};

export const breakpoints: IBreakpoints = {
  max360: "@media (max-width: 360px)",
  max380: "@media (max-width: 380px)",
  fromMobile:"@media (min-width: 450px)",
  fromTablet: "@media (min-width: 600px)",
  fromDesktop: "@media (min-width: 950px)"
};

export const themeVariants: IThemeVariants = {
  light: {
    primary: "#fafafa",
    secondary: "#444",
    pink: "#e84f7a",
    pink2: "#bd0a31"
  },
  dark: {
    primary: "#2d2b2b",
    secondary: "#e4e4e4",
    pink: "#f54e7d",
    pink2: "#ff9595"
  }
};
