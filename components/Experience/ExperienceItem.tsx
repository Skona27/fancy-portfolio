import * as React from "react";
import { useTheme } from "../../hooks/Theme";
import { IExperienceItem } from "./types";

export const ExperienceItem: React.FC<IExperienceItem> = React.memo(
  ({ duration, companyName, positionName, description, techStack }) => {
    const { colors } = useTheme();

    return (
      <li css={{ margin: "1rem 0" }}>
        <div>
          <time css={{ color: colors.pink, fontSize: 18, fontWeight: 600 }}>
            {duration}
          </time>

          <span css={{ padding: "0 10px", verticalAlign: 1 }}>|</span>
          <strong>{companyName}</strong>
          <em css={{ display: "block", margin: "1px 0" }}>{positionName}</em>

          <p css={{ marginTop: 0, "&, *": { lineHeight: "26px" } }}>
            {description}

            {techStack && (
              <span css={{ display: "inline-block" }}>
                <span> Używane technologie: </span>
                <em>{techStack}</em>
              </span>
            )}
          </p>
        </div>
      </li>
    );
  }
);

ExperienceItem.displayName = "ExperienceItem";
