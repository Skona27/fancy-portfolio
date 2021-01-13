/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import Head from "next/head";

import { Button } from "../components/Button";
import { useTheme } from "../hooks/Theme";
import { client } from "../api/client";
import { useLang } from "../hooks/useLang";
import { materialy } from "../data/materialy";

const Materialy = React.memo(() => {
  const { bp, colors } = useTheme();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const lang = useLang();
  const data = materialy[lang];

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <main>
        <h1>{data.heading1}</h1>
        <ul css={{ listStyleType: "none", marginLeft: 0 }}>
          {data.courses.map((course) => (
            <li key={course.title}>
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

        <h2>{data.heading2}</h2>

        <p>{data.text}</p>

        <br />

        <form
          onSubmit={(event) => {
            event.preventDefault();
            client("/api/newsletter", { method: "POST", body: email });
            setSubmitted(true);
            setEmail("");
          }}
          css={{ width: "100%", marginBottom: 20 }}
        >
          <input
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            css={{
              width: "100%",
              padding: "10px 15px",
              fontSize: "1rem",
              letterSpacing: 1,
              background: colors.primary,
              color: colors.secondary,
              border: "2px solid",
              borderColor: colors.secondary,
              borderRadius: 2,
              outlineColor: colors.pink,
              [bp.fromTablet]: {
                width: "auto",
                minWidth: 370,
                marginRight: 30,
              },
              "::placeholder": {
                color: colors.secondary,
              },
            }}
            type="email"
            placeholder={data.placeholder}
          />
          <Button
            css={{
              marginTop: 20,
              marginLeft: "calc(100% - 10rem)",
              [bp.fromTablet]: { marginTop: 0, marginLeft: 0 },
            }}
            active
          >
            {data.submitButton}
          </Button>
        </form>

        {submitted && (
          <strong css={{ color: colors.pink }}>{data.submitSuccess}</strong>
        )}
      </main>
    </>
  );
});

Materialy.displayName = "Materialy";
export default Materialy;
