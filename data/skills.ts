import { ISkillSection } from "../components/Skills/types";
import { Languages } from "../hooks/useLang/types";

interface Skills {
  subtitle: string;
  text: string;
  skills: ISkillSection[];
}

export const skills: Record<Languages, Skills> = {
  pl: {
    subtitle: "Moje umiejętności",
    text: `Poniżej znajduje się lista zdobytych przeze mnie umiejętności wraz z
    krótkim opisem prezentującym moje rozeznanie w danej technologii.`,
    skills: [
      {
        skillList: [
          {
            title: "Frontend",
            skills: [
              {
                skillName: "HTML5",
                description:
                  "Semantyka, Dostępność, Znajomość standardów WCAG 2.0 i atrybutów ARIA",
                fullStars: 4,
                emptyStars: 1,
              },
              {
                skillName: "CSS",
                description:
                  "Responsywny design, Znajomość Flexboxa i CSS Grid'a, SASS, BEM, SVG, animacje. Kompatybilność pomiędzy przeglądarkami, Wsparcie starszych przeglądarek",
                fullStars: 4,
                emptyStars: 1,
              },
              {
                skillName: "JavaScript",
                description:
                  "Manipulacja elementami DOM, znajomość technik ES6+, AJAX, OOP, wizualizacja danych z D3, znajomość SPA, PWA, testowanie z Jest",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "React",
                description:
                  "Znajomość frameworka Next.JS, Hooks, Lifecycle Methods, Context, zaawansowane techniki React, React & Typescript.",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
            ],
          },
          {
            title: "Backend",
            skills: [
              {
                skillName: "NodeJS",
                description:
                  "Projektowanie REST API i GraphQL API w frameworkach Express i NestJS, komunikacja z bazami danych, Autoryzacja, Testy jednostkowe, Integracje z 3rd party",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "PHP",
                fullStars: 3,
                emptyStars: 2,
              },
              {
                skillName: "SQL",
                description:
                  "Operacje CRUD, Grupowanie danych, sortowanie danych, Relacje pomiędzy danymi",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "NoSQL",
                fullStars: 3,
                halfStars: 1,
                emptyStars: 1,
                description: "Single Table design pattern, operacje CRUD",
              },
            ],
          },
        ],
      },
      {
        skillList: [
          {
            title: "Inne",
            skills: [
              { skillName: "Typescript", fullStars: 4, emptyStars: 1 },
              { skillName: "GIT", fullStars: 4, emptyStars: 1 },
              { skillName: "Linux", fullStars: 3, emptyStars: 2 },
            ],
          },
          {
            title: "",
            skills: [
              {
                skillName: "AWS",
                fullStars: 3,
                halfStars: 0,
                emptyStars: 2,
              },
              {
                skillName: "Python",
                fullStars: 2,
                halfStars: 0,
                emptyStars: 3,
              },
            ],
          },
        ],
      },
    ],
  },
  "en-US": {
    subtitle: "My skills",
    text: `Below I have listed the skills I have acquired and a short description presenting my understanding of a given technology`,
    skills: [
      {
        skillList: [
          {
            title: "Frontend",
            skills: [
              {
                skillName: "HTML5",
                description: "Semantics, a11y, knowledge of WCAG 2.0 and ARIA",
                fullStars: 4,
                emptyStars: 1,
              },
              {
                skillName: "CSS",
                description:
                  "Responsive design, Flexbox, and CSS Grid, SASS, BEM, SVG, animation. Cross-browser compatibility",
                fullStars: 4,
                emptyStars: 1,
              },
              {
                skillName: "JavaScript",
                description:
                  "DOM manipulations, knowledge of ES6+ standards, AJAX, OOP, D3 visualizations, SPA, PWA, testing with Jest, Typescript",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "React",
                description:
                  "Advanced knowledge of Next.js, Hooks, Lifecycle Methods, Context, React with Typescript, State management. Designing performant components and smooth animations",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
            ],
          },
          {
            title: "Backend",
            skills: [
              {
                skillName: "NodeJS",
                description:
                  "Designing REST and GraphQL APIs, Microservices, DDD, knowledge of Express and NestJS, Database communication, Authorization, Unit testing, 3rd party integrations",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "PHP",
                fullStars: 3,
                emptyStars: 2,
              },
              {
                skillName: "SQL",
                description:
                  "CRUD operations, grouping data, sorting data, joining data, designing performant queries",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "NoSQL",
                fullStars: 3,
                halfStars: 1,
                emptyStars: 1,
                description: "Single Table design pattern, CRUD operations",
              },
            ],
          },
        ],
      },
      {
        skillList: [
          {
            title: "Others",
            skills: [
              {
                skillName: "Typescript",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              { skillName: "GIT", fullStars: 4, emptyStars: 1 },
              { skillName: "Linux", fullStars: 3, emptyStars: 2 },
            ],
          },
          {
            title: "",
            skills: [
              {
                skillName: "AWS",
                fullStars: 3,
                halfStars: 0,
                emptyStars: 2,
              },
              {
                skillName: "Python",
                fullStars: 2,
                halfStars: 0,
                emptyStars: 3,
              },
            ],
          },
        ],
      },
    ],
  },
};
