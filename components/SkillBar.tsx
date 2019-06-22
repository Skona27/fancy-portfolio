import * as React from "react";
import { useTheme } from "../hooks/Theme";

interface IProps {
  full: number;
  half?: number;
  empty?: number;
  skill: string;
  description?: string;
}

export const SkillBar: React.FC<IProps> = React.memo(
  ({ skill, full, description, half = 0, empty = 0 }) => {
    const { colors } = useTheme();

    const fullStars = [];
    const halfStars = [];
    const emptyStars = [];

    for (let i = 1; i <= full; i++) {
      fullStars.push(<i className="fas fa-star" />);
    }
    for (let i = 1; i <= half; i++) {
      halfStars.push(<i className="fas fa-star-half-alt" />);
    }
    for (let i = 1; i <= empty; i++) {
      emptyStars.push(<i className="far fa-star" />);
    }

    return (
      <>
        <div
          css={{
            width: 250,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <em>{skill}</em>
          <div
            css={{
              fontSize: 20,
              color: colors.pink,
              display: "inline",
              svg: {
                margin: "0 1px"
              }
            }}
          >
            {fullStars}
            {halfStars}
            {emptyStars}
          </div>
        </div>

        {description && (
          <span
            css={{
              fontSize: 14,
              padding: "0 3px"
            }}
          >
            {description}
          </span>
        )}
      </>
    );
  }
);

SkillBar.displayName = "SkillBar";
