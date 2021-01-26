import React from "react";
import { constants } from "../../../config/client";
import { useTheme } from "../../../hooks/Theme";
import { Icon } from "./Icon";

export const Socials = React.memo(() => {
  const { bp, colors } = useTheme();

  return (
    <nav css={{ marginLeft: "auto" }}>
      <ul
        css={{
          marginLeft: 0,
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          width: "11rem",
          fontSize: "1.3rem",
          [bp.max360]: { width: "10rem" },
          [bp.fromTablet]: { width: "9.5rem" },
        }}
      >
        <Icon
          href={constants.githubLink}
          target="_blank"
          aria-label="Profil Github"
          rel="noreferrer"
        >
          <i className="icon icon-github" />
        </Icon>

        <Icon
          href={constants.linkedinLink}
          target="_blank"
          aria-label="Profil LinkedIn"
          rel="noreferrer"
        >
          <i className="icon icon-linkedin2" />
        </Icon>

        {/* TODO: Use standard icon */}
        <Icon
          href={constants.twitterLink}
          target="_blank"
          aria-label="Profil Twitter"
          rel="noreferrer"
        >
          <svg
            css={{
              height: "1.25rem",
              [bp.fromTablet]: {
                height: "1.1rem",
              },
            }}
            viewBox="328 355 335 276"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
              css={{
                fill: colors.pink,
                outlineColor: colors.pink,
                transition: "fill .1s ease-in",
                ":hover, :focus": { fill: `${colors.secondary} !important` },
              }}
            />
          </svg>
        </Icon>

        <Icon href={`mailto:${constants.email}`} aria-label="Contact with me">
          <i className="icon icon-envelope-o" />
        </Icon>
      </ul>
    </nav>
  );
});

Socials.displayName = "Socials";
