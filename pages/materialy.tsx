/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import Head from "next/head";

import { useLang } from "../hooks/useLang";
import { resources } from "../data/resources";
import { newsletter } from "../data/newsletter";
import { Resources } from "../components/Resources";
import { Newsletter } from "../components/Newsletter";
import { constants } from "../config/client";

const Materialy = React.memo(() => {
  const lang = useLang();
  const data = resources[lang];
  const form = newsletter[lang];

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang} />
        <meta property="og:title" content={data.title} />
        <meta name="twitter:title" content={data.title} />
        <meta
          name="twitter:image"
          content={`${constants.baseUrl}/static/og/resources.png`}
        />
        <meta
          name="og:image"
          content={`${constants.baseUrl}/static/og/resources.png`}
        />
      </Head>

      <main>
        <h1>{data.heading1}</h1>
        <ul css={{ listStyleType: "none", marginLeft: 0 }}>
          {data.courses.map((course) => (
            <li key={course.title} css={{ margin: "0.75rem 0" }}>
              <div>
                <a
                  target="_blank"
                  href={course.url}
                  css={{ fontSize: "1.25rem" }}
                >
                  {course.title}
                </a>
                <p css={{ marginTop: "0.5rem" }}>{course.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <Resources resourceGroups={data.resources} />

        <section>
          <Newsletter {...form.newsletter} />
        </section>
      </main>
    </>
  );
});

Materialy.displayName = "Materialy";
export default Materialy;
