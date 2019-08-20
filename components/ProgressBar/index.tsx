import * as React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import { Global } from "@emotion/core";
import { useTheme } from "../../hooks/Theme";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export const ProgressBar: React.FC = React.memo(() => {
  const { colors } = useTheme();

  return (
    <Global
      styles={`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: ${colors.pink};
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }
      `}
    />
  );
});

ProgressBar.displayName = "ProgressBar";
