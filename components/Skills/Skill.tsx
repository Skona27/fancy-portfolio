import * as React from "react";
import { useTheme } from "../../hooks/Theme";
import { ISkill } from "./types";

export const Skill: React.FC<ISkill> = React.memo(
  ({ skillName, fullStars, description, halfStars = 0, emptyStars = 0 }) => {
    const { colors, bp } = useTheme();

    // @TODO - Apply useMemo here
    const fullStarIcons: JSX.Element[] = [];
    const halfStarIcons: JSX.Element[] = [];
    const emptyStarIcons: JSX.Element[] = [];

    for (let i = 1; i <= fullStars; i++) {
      fullStarIcons.push(<i className="fas fa-star" key={"full-" + i} />);
    }
    for (let i = 1; i <= halfStars; i++) {
      halfStarIcons.push(
        <i className="fas fa-star-half-alt" key={"half-" + i} />
      );
    }
    for (let i = 1; i <= emptyStars; i++) {
      emptyStarIcons.push(<i className="far fa-star" key={"empty-" + i} />);
    }

    return (
      <li
        css={{
          padding: "3px 0",
          [bp.fromTablet]: { padding: 0 }
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}
        >
          <em>{skillName}</em>
          <div
            css={{
              width: 130,
              fontSize: 16,
              color: colors.pink,
              display: "inline",
              marginLeft: 10,
              svg: { margin: "0 1px" },
              [bp.fromTablet]: { fontSize: 20 }
            }}
          >
            {fullStarIcons}
            {halfStarIcons}
            {emptyStarIcons}
          </div>
        </div>

        {description && <span css={{ fontSize: 14 }}>{description}</span>}
      </li>
    );
  }
);

Skill.displayName = "Skill";
