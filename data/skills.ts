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
                  "Manipulacja elementami DOM, znajomość technik ES6 / 7 i ES Next, AJAX, OOP, wizualizacja danych z D3, znajomość WebGL i Three.JS, SPA, PWA, testowanie z Jest",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "React",
                description:
                  "Znajomość React Hooks, Component Lifecycle Methods, Context, zaawansowane techniki React, React & Typescript. Wielki fan frameworka Next.JS.",
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
                  "Projektowanie REST API i GraphQL API w frameworkach Express i NestJS, komunikacja z bazami SQL i MongoDB, znajomość TypeORM i Prisma, autoryzacja JWT, testowanie z Jest",
                fullStars: 3,
                halfStars: 1,
                emptyStars: 1,
              },
              {
                skillName: "PHP",
                description:
                  "Programowanie obiektowe, wzorce projektowe, komunikacja z bazami SQL",
                fullStars: 3,
                emptyStars: 2,
              },
              {
                skillName: "SQL",
                description:
                  "Operacje CRUD, Grupowanie danych, sortowanie danych, Relacje pomiędzy danymi",
                fullStars: 3,
                halfStars: 0,
                emptyStars: 2,
              },
              { skillName: "MongoDB", fullStars: 2, emptyStars: 3 },
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
                fullStars: 2,
                halfStars: 0,
                emptyStars: 3,
              },
              {
                skillName: "Python",
                fullStars: 2,
                halfStars: 0,
                emptyStars: 3,
              },
              { skillName: "Webpack", fullStars: 3, emptyStars: 2 },
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
                  "DOM manipulations, knowledge of ES6 / 7 and ES Next standards, AJAX, OOP, D3 visualizations, knowledge of WebGL and Three.JS, SPA, PWA, testing with Jest",
                fullStars: 4,
                halfStars: 0,
                emptyStars: 1,
              },
              {
                skillName: "React",
                description:
                  "Knowledge of React Hooks, Component Lifecycle Methods, Context, advanced technics of React, React with Typescript. Big fan of Next.JS framework.",
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
                  "Knowledge of Express, Koa and NestJS, SQL and MongoDB operations, knowledge of TypeORM and Prisma, designing REST API and GraphQL API, JWT auth, testing with Jest",
                fullStars: 3,
                halfStars: 1,
                emptyStars: 1,
              },
              {
                skillName: "PHP",
                description: "OOP, design patterns, SQL database operations",
                fullStars: 3,
                emptyStars: 2,
              },
              {
                skillName: "SQL",
                description:
                  "CRUD operations, grouping data, sorting data, joining data",
                fullStars: 3,
                halfStars: 0,
                emptyStars: 2,
              },
              { skillName: "MongoDB", fullStars: 2, emptyStars: 3 },
            ],
          },
        ],
      },
      {
        skillList: [
          {
            title: "Others",
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
                fullStars: 2,
                halfStars: 0,
                emptyStars: 3,
              },
              {
                skillName: "Python",
                fullStars: 2,
                halfStars: 0,
                emptyStars: 3,
              },
              { skillName: "Webpack", fullStars: 3, emptyStars: 2 },
            ],
          },
        ],
      },
    ],
  },
};
