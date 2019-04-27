import React from "react";
import {useTheme} from "../../hooks/Theme";
import Switch from "@material-ui/core/Switch";
import {InterpolationWithTheme} from "@emotion/core";

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

  const iStyle: InterpolationWithTheme<any> = {
    position: "absolute",
    fontSize: "1.2rem",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "opacity .1s ease-in"
  };

  return (
    <div css={{
      position: "absolute",
      top: "0",
      right: 0,
      display: "flex",
      alignItems: "center",
      padding: "1.75rem 3rem",
      [bp.fromTablet]: {
        padding: "1.5rem 3rem",
      },
      [bp.fromDesktop]: {
        position: "fixed"
      }
    }}>

      <div css={{
        position: "relative",
        width: 4,
        height: 48,
        ".fa-moon": {
          opacity: isChecked ? 1 : 0
        },
        ".fa-sun": {
          opacity: isChecked ? 0 : 1
        }
      }}>
        <i className="fas fa-moon" css={iStyle}>
        </i>

        <i className="fas fa-sun" css={iStyle}>
        </i>
      </div>

      <Switch
        checked={isChecked}
        onChange={toggle}
        role="switch"
        aria-checked="false"
        css={{
          transform: "translate(50%)",
          "span": {
            color: colors.pink
          },
          [bp.fromTablet]: {
            transform: "translate(25%)"
          }
        }}
      />
    </div>
  )
});

ThemeSwitch.displayName = "ThemeSwitch";
