import * as React from "react";
import { PulseLoader } from "react-spinners";
import { useTheme } from "../../hooks/Theme";

export const Spinner = React.memo(() => {
  const { colors, bp } = useTheme();

  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "4.25rem",
        [bp.fromTablet]: {
          marginTop: "4.5rem"
        },
        [bp.fromDesktop]: {
          marginTop: "6rem"
        }
      }}
    >
      <PulseLoader color={colors.pink} margin="8px" size={18} />
    </div>
  );
});

Spinner.displayName = "Spinner";
