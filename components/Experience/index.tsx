import * as React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { IExperienceItem } from "./types";

interface IProps {
  subtitle: string;
  text: string;
  items: IExperienceItem[];
}

export const Experience: React.FC<IProps> = React.memo(
  ({ items, text, subtitle }) => {
    return (
      <section>
        <h2>{subtitle}</h2>
        <p>{text}</p>

        <ul>
          {items.map((experienceItem, index) => (
            <ExperienceItem key={"experience-" + index} {...experienceItem} />
          ))}
        </ul>
      </section>
    );
  }
);

Experience.displayName = "Experience";
