import * as React from "react";
import { Skill } from "./Skill";
import { useTheme } from "../../hooks/Theme";
import { ISkillSection } from "./types";

export const SkillsSection: React.FC<ISkillSection> = React.memo(
  ({ skillList }) => {
    const { bp } = useTheme();

    return (
      <section
        css={{
          marginTop: 15,
          [bp.fromTablet]: { display: "flex" },
        }}
      >
        {skillList.map((singleList, index) => (
          <div
            key={"singleList-" + index}
            css={{
              flex: 1,
              [bp.fromTablet]: {
                padding: "0 8px",
                transform: "translateX(-8px)",
              },
              [bp.fromDesktop]: {
                padding: "0 20px",
                transform: "translateX(-20px)",
              },
            }}
          >
            <strong
              css={{
                [bp.fromTablet]: { display: "block", height: 30 },
              }}
            >
              {singleList.title}
            </strong>

            <ul css={{ li: { margin: "10px 0", lineHeight: 1.4 } }}>
              {singleList.skills.map((singleSkill, index) => (
                <Skill {...singleSkill} key={"singleSkill-" + index} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
);

SkillsSection.displayName = "SkillsSection";
