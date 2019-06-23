import {ISkillSection} from "../components/Skills/types";

export const skillsSections: ISkillSection[] = [
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
            emptyStars: 1
          },
          {
            skillName: "CSS",
            description:
              "Responsywny design, Znajomość Flexboxa i CSS Grid'a, SASS, BEM, SVG, animacje. Kompatybilność pomiędzy przeglądarkami, Wsparcie starszych przeglądarek",
            fullStars: 4,
            emptyStars: 1
          },
          {
            skillName: "JavaScript",
            description:
              "Manipulacja elementami DOM, znajomość technik ES6 / 7 i ES Next, AJAX, OOP, wizualizacja danych z D3, znajomość WebGL i Three.JS, SPA, PWA, testowanie z Mocha i Jest",
            fullStars: 4,
            emptyStars: 1
          },
          {
            skillName: "React",
            description:
              "Znajomość CRA, Gatbsy i Next.JS, CSS modules, css-in-js, React Hooks, Component Lifecycle Methods, Context, Portals, zaawansowane techniki React, Typescript",
            fullStars: 3,
            halfStars: 1,
            emptyStars: 1
          }
        ]
      },
      {
        title: "Backend",
        skills: [
          {
            skillName: "NodeJS",
            description:
              "Znajomość Express, Koa i NestJS, komunikacja z bazami SQL i MongoDB, znajomość TypeORM, budowanie REST API i GraphQL API, autoryzacja JWT, testowanie z Jest i Mocha",
            fullStars: 3,
            halfStars: 1,
            emptyStars: 1
          },
          {
            skillName: "PHP",
            description:
              "Programowanie obiektowe, wzorce projektowe, komunikacja z bazami SQL",
            fullStars: 3,
            emptyStars: 2
          },
          {
            skillName: "SQL",
            description:
              "CRUD, Grupowanie danych, sortowanie danych, Relacje pomiędzy danymi",
            fullStars: 3,
            halfStars: 1,
            emptyStars: 1
          },
          { skillName: "MongoDB", fullStars: 2, emptyStars: 3 }
        ]
      }
    ]
  },
  {
    skillList: [
      {
        title: "Inne",
        skills: [
          { skillName: "Typescript", fullStars: 4, emptyStars: 1 },
          { skillName: "GIT", fullStars: 4, emptyStars: 1 },
          { skillName: "Linux", fullStars: 3, emptyStars: 2 }
        ]
      },
      {
        title: "",
        skills: [
          {
            skillName: "UI / UX",
            fullStars: 2,
            halfStars: 1,
            emptyStars: 2,
            description: "Prototypowanie, znajomość programów Adobe XD i Figma"
          },
          { skillName: "Webpack", fullStars: 3, emptyStars: 2 }
        ]
      }
    ]
  }
];
