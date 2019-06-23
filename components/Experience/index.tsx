import * as React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { IExperienceItem } from "./types";

interface IProps {
  experienceItems: IExperienceItem[];
}

export const Experience: React.FC<IProps> = React.memo(
  ({ experienceItems }) => {
    return (
      <section>
        <h2>Doświadczenie</h2>
        <p>Poniżej znajduje się moje doświadczenie zawodowe.</p>

        <ul>
          {experienceItems.map((experienceItem, index) => (
            <ExperienceItem key={"experience-" + index} {...experienceItem} />
          ))}
        </ul>
      </section>
    );
  }
);

Experience.displayName = "Experience";
