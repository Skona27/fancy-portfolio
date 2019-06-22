import * as React from "react";
import { SkillBar } from "../components/SkillBar";

const Home = React.memo(() => {
  return (
    <>
      <h1>Kilka słów o mnie</h1>

      <p>
        Cześć! Nazywam się <strong>Jakub Skoneczny</strong> i jestem{" "}
        <em>Javascript Developerem!</em>
        <i
          css={{ color: "#e31b23", marginLeft: 7, marginRight: 10 }}
          className="fas fa-heart"
        />
        Programowaniem zajmuję się od dawien dawna i jest to moje hobby co
        sprawia, że praca to dla mnie czysta przyjemność. W wolnym czasie gram
        na gitarze i czytam ciekawostki o kosmosie i gwiazdach. Czasami zdarza
        mi się zagrać w pokera lub gry planszowe ze znajomymi.
      </p>

      <h2>Moje umiejętności</h2>

      <section css={{ display: "flex" }}>
        <div css={{ flex: 1 }}>
          <strong>Frontend</strong>
          <ul css={{ li: { margin: "8px 0", lineHeight: 1.4, padding: 2 } }}>
            <li>
              <SkillBar
                skill={"HTML5"}
                description="Semantyka, Dostępność, Znajomość standardów WCAG 2.0 i atrybutów ARIA"
                full={4}
                empty={1}
              />
            </li>
            <li>
              <SkillBar
                skill={"CSS"}
                description="Responsywny design, Znajomość Flexboxa i CSS Grid'a, SASS, BEM, SVG, animacje. Kompatybilność pomiędzy przeglądarkami, Wsparcie starszych przeglądarek"
                full={4}
                empty={1}
              />
            </li>
            <li>
              <SkillBar
                skill={"JavaScript"}
                description="Manipulacja elementami DOM, znajomość technik ES6 / 7 i ES Next, AJAX, OOP, wizualizacja danych z D3, znajomość WebGL i Three.JS, SPA, PWA, testowanie z Mocha i Jest"
                full={4}
                empty={1}
              />
            </li>
            <li>
              <SkillBar
                skill={"React"}
                description="Znajomość CRA, Gatbsy i Next.JS, CSS modules, css-in-js, React Hooks, Component Lifecycle Methods, Context, Portals, zaawansowane techniki React, Typescript"
                full={3}
                half={1}
                empty={1}
              />
            </li>
          </ul>
        </div>

        <div css={{ flex: 1 }}>
          <strong>Backend</strong>
          <ul css={{ li: { margin: "8px 0", lineHeight: 1.4, padding: 2 } }}>
            <li>
              <SkillBar
                skill={"NodeJS"}
                description="Znajomość Express, Koa i NestJS, komunikacja z bazami SQL i MongoDB, znajomość TypeORM, budowanie REST API i GraphQL API, autoryzacja JWT, testowanie z Jest i Mocha"
                full={3}
                half={1}
                empty={1}
              />
            </li>
            <li>
              <SkillBar
                skill={"PHP"}
                description="Programowanie obiektowe, wzorce projektowe, komunikacja z bazami SQL"
                full={3}
                empty={2}
              />
            </li>
            <li>
              <SkillBar
                skill={"SQL"}
                description="CRUD, Grupowanie danych, sortowanie danych, Relacje pomiędzy danymi"
                full={3}
                half={1}
                empty={1}
              />
            </li>
            <li>
              <SkillBar skill={"MongoDB"} full={2} empty={3} />
            </li>
          </ul>
        </div>
      </section>

      <section css={{ marginTop: 20 }}>
        <strong>Other</strong>
        <div css={{ display: "flex" }}>
          <ul
            css={{
              flex: 1,
              li: { margin: "8px 0", lineHeight: 1.4, padding: 2 }
            }}
          >
            <li>
              <SkillBar skill={"GIT"} full={4} empty={1} />
            </li>
            <li>
              <SkillBar skill={"Linux"} full={3} empty={2} />
            </li>
            <li>
              <SkillBar skill={"Typescript"} full={4} empty={1} />
            </li>
          </ul>
          <ul
            css={{
              flex: 1,
              li: { margin: "8px 0", lineHeight: 1.4, padding: 2 }
            }}
          >
            <li>
              <SkillBar
                skill={"UI / UX"}
                description="Projektowanie UI, znajomość Adobe XD i Figma"
                full={2}
                half={1}
                empty={2}
              />
            </li>
            <li>
              <SkillBar skill={"Webpack"} full={3} empty={2} />
            </li>
          </ul>
        </div>
      </section>

      <h3>W jaki sposób programuję?</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>

      <pre>
        <span className="selector">code</span>
        <span className="selector">code</span>
        <span className="selector">code</span>
      </pre>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>

      <h2>Doświadczenie</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>
    </>
  );
});

Home.displayName = "Home";
export default Home;
