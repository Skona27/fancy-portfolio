import React from "react";
import {useTheme} from "../../hooks/Theme";
import Switch from "@material-ui/core/Switch";

export const ThemeSwitch = React.memo(() => {
  const {colors, bp, dispatch} = useTheme();
  const [isChecked, setIsChecked] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsChecked(!isChecked);

    if (isChecked) {
      dispatch({type: "setLightTheme"});
    }
    if (!isChecked) {
      dispatch({type: "setDarkTheme"});
    }
  }, [isChecked]);

  return (
    <div css={{
      position: "absolute",
      top: "0",
      right: 0,
      padding: "1.75rem 3rem",
      [bp.fromTablet]: {
        padding: "1.5rem 3rem",
      },
      [bp.fromDesktop]: {
        position: "fixed"
      }
    }}>
      <Switch
        checked={isChecked}
        onChange={toggle}
        css={{
          transform: "translate(50%)",
          "span": {
            color: colors.pink
          },
          [bp.fromDesktop]: {
            transform: "translate(25%)",
          }
        }}
      />
    </div>
  )
});

ThemeSwitch.displayName = "ThemeSwitch";
