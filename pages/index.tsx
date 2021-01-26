import * as React from "react";
import Head from "next/head";

import { useTheme } from "../hooks/Theme";
import { skills } from "../data/skills";
import { Experience } from "../components/Experience";
import { experience } from "../data/experience";
import { Skills } from "../components/Skills";
import { aboutMe } from "../data/about-me";
import { useLang } from "../hooks/useLang";
import { constants } from "../config/client";

const Home = React.memo(() => {
  const { colors } = useTheme();
  const lang = useLang();
  const data = aboutMe[lang];

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={`${data.text}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang} />
        <meta property="og:title" content={data.title} />
        <meta name="twitter:title" content={data.title} />
        <meta
          name="twitter:image"
          content={`${constants.baseUrl}/static/og/index.png`}
        />
        <meta
          name="og:image"
          content={`${constants.baseUrl}/static/og/index.png`}
        />
      </Head>

      <main>
        <h1>{data.heading}</h1>

        <p>
          <span dangerouslySetInnerHTML={{ __html: data.subtitle }} />
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
