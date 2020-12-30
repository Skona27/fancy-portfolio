import * as React from "react";
import { useTheme } from "../../hooks/Theme";
import { ISkill } from "./types";

export const Skill: React.FC<ISkill> = React.memo(
  ({ skillName, fullStars, description, halfStars = 0, emptyStars = 0 }) => {
    const { colors, bp } = useTheme();

    const fullStarIcons: JSX.Element[] = React.useMemo(() => {
      const tempArray = [];

      for (let i = 1; i <= fullStars; i++) {
        tempArray.push(<i className="icon icon-star-full" key={"full-" + i} />);
      }
      return tempArray;
    }, [fullStars]);

    const halfStarIcons: JSX.Element[] = React.useMemo(() => {
      const tempArray = [];

      for (let i = 1; i <= halfStars; i++) {
        tempArray.push(<i className="icon icon-star-half" key={"half-" + i} />);
      }
      return tempArray;
    }, [halfStars]);

    const emptyStarIcons: JSX.Element[] = React.useMemo(() => {
      const tempArray = [];

      for (let i = 1; i <= emptyStars; i++) {
        tempArray.push(
          <i className="icon icon-star-empty" key={"empty-" + i} />
        );
      }
      return tempArray;
    }, [emptyStars]);

    return (
      <li
        css={{
          padding: "3px 0",
          [bp.fromTablet]: { padding: 0 },
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
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
              i: { margin: "0 1px", fontSize: 22 },
              [bp.fromTablet]: { fontSize: 20 },
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
