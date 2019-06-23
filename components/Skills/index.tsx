import * as React from "react";
import { SkillsSection } from "./SkillsSection";
import { ISkillSection } from "./types";

interface IProps {
  skillsSections: ISkillSection[];
}

export const Skills: React.FC<IProps> = React.memo(({ skillsSections }) => {
  return (
    <section>
      <h2>Moje umiejętności</h2>
      <p>
        Poniżej znajduje się lista zdobytych przeze mnie umiejętności wraz z
        krótkim opisem prezentującym moje rozeznanie w danej technologii.
      </p>

      {skillsSections.map((section, index) => (
        <SkillsSection {...section} key={"skillSection-" + index} />
      ))}
    </section>
  );
});

Skills.displayName = "Skills";
