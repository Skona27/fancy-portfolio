import React from "react";
import { useTheme } from "../../../hooks/Theme";
import Switch from "@material-ui/core/Switch";
import { Interpolation } from "@emotion/core";

export const ThemeSwitch = React.memo(() => {
  const { colors, bp, dispatch, variant } = useTheme();
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (variant === "dark") {
      setIsChecked(true);
    }
  }, [variant]);

  const toggle = React.useCallback(() => {
    if (isChecked) {
      dispatch({ type: "setLightTheme" });
    } else {
      dispatch({ type: "setDarkTheme" });
    }

    setIsChecked(!isChecked);
  }, [isChecked, dispatch]);

  const iStyle: Interpolation = {
    position: "absolute",
    fontSize: "1.2rem",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "opacity .1s ease-in"
  };

  return (
    <div
      css={{
        position: "absolute",
        top: "0",
        right: 0,
        transform: "translate(17.5%,-80%)",
        display: "flex",
        alignItems: "center",
        padding: "1.75rem 3rem",
        [bp.max380]: { transform: "translate(15%, -75%)" },
        [bp.fromMobile]: { transform: "translate(20%,-80%)" },
        [bp.fromTablet]: {
          padding: "1.5rem 3rem",
          transform: "translate(30%, -75%)"
        },
        [bp.fromDesktop]: { position: "fixed", transform: "translate(0)" }
      }}
    >
      <div
        css={{
          position: "relative",
          width: 4,
          height: 48,
          ".fa-moon": { opacity: isChecked ? 1 : 0 },
          ".fa-sun": { opacity: isChecked ? 0 : 1 }
        }}
      >
        <i className="fas fa-moon" css={iStyle} />

        <i className="fas fa-sun" css={iStyle} />
      </div>

      <label
        htmlFor="themeSwitch"
        aria-hidden="false"
        css={{ position: "absolute", left: -10000 }}
      >
        Zmień motyw
      </label>

      <Switch
        checked={isChecked}
        onChange={toggle}
        role="switch"
        aria-checked="false"
        id="themeSwitch"
        css={{
          transform: "translate(50%)",
          span: { color: colors.pink },
          [bp.fromTablet]: { transform: "translate(25%)" }
        }}
      />
    </div>
  );
});

ThemeSwitch.displayName = "ThemeSwitch";
