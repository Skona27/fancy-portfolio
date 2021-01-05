import * as React from "react";
import Head from "next/head";

import { useTheme } from "../hooks/Theme";
import { skills } from "../data/skills";
import { Experience } from "../components/Experience";
import { experience } from "../data/experience";
import { Skills } from "../components/Skills";
import { aboutMe } from "../data/about-me";
import { useLang } from "../hooks/useLang";

const Home = React.memo(() => {
  const { colors } = useTheme();
  const lang = useLang();
  const data = aboutMe[lang];

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <main>
        <h1>{data.heading}</h1>

        <p>
          {data.subtitle}
          <i
            css={{
              color: colors.pink,
              marginLeft: 7,
              marginRight: 10,
              display: "inline-block",
            }}
            className="icon icon-heart"
          />
          {data.text}
        </p>

        <Skills {...skills[lang]} />
        <Experience {...experience[lang]} />
      </main>
    </>
  );
});

Home.displayName = "Home";
export default Home;
