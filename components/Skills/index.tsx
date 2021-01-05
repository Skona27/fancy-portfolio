import * as React from "react";
import { SkillsSection } from "./SkillsSection";
import { ISkillSection } from "./types";

interface IProps {
  subtitle: string;
  text: string;
  skills: ISkillSection[];
}

export const Skills: React.FC<IProps> = React.memo(
  ({ skills, subtitle, text }) => {
    return (
      <section>
        <h2>{subtitle}</h2>
        <p>{text}</p>

        {skills.map((section, index) => (
          <SkillsSection {...section} key={"skillSection-" + index} />
        ))}
      </section>
    );
  }
);

Skills.displayName = "Skills";
