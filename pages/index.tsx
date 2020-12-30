import * as React from "react";
import Head from "next/head";

import { useTheme } from "../hooks/Theme";
import { skillsSections } from "../data/skills";
import { Experience } from "../components/Experience";
import { experienceItems } from "../data/experience";
import { Skills } from "../components/Skills";

const Home = React.memo(() => {
  const { colors } = useTheme();
  return (
    <>
      <Head>
        <title>O mnie | Jakub Skoneczny - Javascript Developer</title>
      </Head>

      <main>
        <h1>Kilka słów o mnie</h1>

        <p>
          Cześć! Nazywam się <strong>Jakub Skoneczny</strong> i jestem{" "}
          <em>Javascript Developerem!</em>
          <i
            css={{
              color: colors.pink,
              marginLeft: 7,
              marginRight: 10,
              display: "inline-block",
            }}
            className="icon icon-heart"
          />
          Programowaniem zajmuję się od dawien dawna. Programowanie to moje
          hobby, co sprawia że praca to dla mnie czysta przyjemność. W wolnym
          czasie gram na gitarze, oglądam filmy i czytam ciekawostki o kosmosie
          i gwiazdach. Czasami zdarza mi się zagrać w pokera lub gry planszowe
          ze znajomymi.
        </p>

        <Skills skillsSections={skillsSections} />
        <Experience experienceItems={experienceItems} />
      </main>
    </>
  );
});

Home.displayName = "Home";
export default Home;
