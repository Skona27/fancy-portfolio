import React from "react";
import { useTheme } from "../../../hooks/Theme";
import { Icon } from "./Icon";

export const Socials = React.memo(() => {
  const { bp } = useTheme();

  return (
    <nav css={{ marginLeft: "auto" }}>
      <ul
        css={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          width: "7.5rem",
          fontSize: "1.3rem",
          [bp.fromTablet]: { width: "7rem" }
        }}
      >
        <Icon
          href="https://github.com/Skona27"
          target="_blank"
          aria-label="Profil Github"
          rel="noreferrer"
        >
          <i className="icon icon-github" />
        </Icon>

        <Icon
          href="https://www.linkedin.com/in/jskoneczny/"
          target="_blank"
          aria-label="Profil LinkedIn"
          rel="noreferrer"
        >
          <i className="icon icon-linkedin2" />
        </Icon>

        <Icon
          href="mailto:skoneczny.j@gmail.com"
          aria-label="Skontaktuj się ze mną"
        >
          <i className="icon icon-envelope-o" />
        </Icon>
      </ul>
    </nav>
  );
});

Socials.displayName = "Socials";
