import React from "react";
import Head from "next/head";
import { useLang } from "../hooks/useLang";
import { error } from "../data/error";

export default function Error() {
  const lang = useLang();
  const data = error[lang];

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <main>
        <h1>{data.heading}</h1>
        <p>{data.text1}</p>
        <p>{data.text2}</p>
      </main>
    </>
  );
}
