/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import Head from "next/head";

import { useLang } from "../hooks/useLang";
import { newsletter } from "../data/newsletter";
import { Newsletter } from "../components/Newsletter";

const NewsletterPage = React.memo(() => {
  const lang = useLang();
  const data = newsletter[lang];

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="og:image" content="/static/og/newsletter.png" />

        {data.title && <meta property="og:title" content={data.title} />}
        {lang && <meta property="og:locale" content={lang} />}
      </Head>

      <main>
        <Newsletter {...data.newsletter} headingType="h1" />
      </main>
    </>
  );
});

NewsletterPage.displayName = "NewsletterPage";
export default NewsletterPage;
