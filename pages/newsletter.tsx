/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import Head from "next/head";

import { useLang } from "../hooks/useLang";
import { newsletter } from "../data/newsletter";
import { Newsletter } from "../components/Newsletter";
import { constants } from "../config/client";

const NewsletterPage = React.memo(() => {
  const lang = useLang();
  const data = newsletter[lang];

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
          content={`${constants.baseUrl}/static/og/newsletter.png`}
        />
        <meta
          name="og:image"
          content={`${constants.baseUrl}/static/og/newsletter.png`}
        />
      </Head>

      <main>
        <Newsletter {...data.newsletter} headingType="h1" />
      </main>
    </>
  );
});

NewsletterPage.displayName = "NewsletterPage";
export default NewsletterPage;
