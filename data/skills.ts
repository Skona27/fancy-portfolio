import { ISkillSection } from "../components/Skills/types";

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
            halfStars: 1,
            emptyStars: 0,
          },
          {
            skillName: "React",
            description:
              "Znajomość CRA i Next.JS, CSS modules, css-in-js (emotion), React Hooks, Component Lifecycle Methods, Context, zaawansowane techniki React, React & Typescript",
            fullStars: 4,
            halfStars: 1,
            emptyStars: 0,
          },
        ],
      },
      {
        title: "Backend",
        skills: [
          {
            skillName: "NodeJS",
            description:
              "Znajomość Express, Koa i NestJS, komunikacja z bazami SQL i MongoDB, znajomość TypeORM i Prisma, budowanie REST API i GraphQL API, autoryzacja JWT, testowanie z Jest",
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
              "CRUD, Grupowanie danych, sortowanie danych, Relacje pomiędzy danymi",
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
            skillName: "UI / UX",
            fullStars: 2,
            halfStars: 0,
            emptyStars: 2,
            description: "Prototypowanie, znajomość programów Adobe XD i Figma",
          },
          { skillName: "Webpack", fullStars: 3, emptyStars: 2 },
        ],
      },
    ],
  },
];
