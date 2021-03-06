import * as React from "react";
import { useTheme } from "../../hooks/Theme";
import { Brand, Socials, ThemeSwitch } from "./Components";
import Navigation from "./Components/Navigation";
import { IHeader } from "./types";
import { Dynamic } from "../Dynamic";

export const Header: React.FC<IHeader> = React.memo(
  ({ image, title, subtitle, elements }) => {
    const { bp } = useTheme();

    return (
      <header
        css={{
          position: "relative",
          [bp.fromDesktop]: { position: "static", marginBottom: "3.5rem" },
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            height: "5rem",
          }}
        >
          <Brand title={title} subtitle={subtitle} image={image} />
          <Socials />
        </div>
        <Navigation elements={elements} />
        <Dynamic>
          <ThemeSwitch />
        </Dynamic>
      </header>
    );
  }
);
Header.displayName = "Header";
