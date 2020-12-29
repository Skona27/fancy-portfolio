import * as React from "react";
import Head from "next/head";

import { Button } from "../components/Button";
import { useTheme } from "../hooks/Theme";
import { client } from "../api/client";

const Materialy = React.memo(() => {
  const { bp, colors } = useTheme();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <>
      <Head>
        <title>
          Materiały do nauki | Jakub Skoneczny - Javascript Developer
        </title>
      </Head>

      <main>
        <h1>Chcesz być na bieżąco?</h1>

        <p>
          Zapisz się do <strong>newslettera</strong>, żeby zdobywać darmowe
          materiały edukacyjne i mieć dostęp do najświeższych nowinek z branży
          😃 Bez spamu! Będziesz mógł się wypisać w każdej chwili.
        </p>

        <br />

        <form
          onSubmit={event => {
            event.preventDefault();
            client("/api/newsletter", { method: "POST", body: email });
            setSubmitted(true);
            setEmail("");
          }}
          css={{ width: "100%", marginBottom: 20 }}
        >
          <input
            value={email}
            onChange={event => {
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
                marginRight: 30
              },
              "::placeholder": {
                color: colors.secondary
              }
            }}
            type="email"
            placeholder="Wpisz swój email"
          />
          <Button
            css={{
              marginTop: 20,
              marginLeft: "calc(100% - 10rem)",
              [bp.fromTablet]: { marginTop: 0, marginLeft: 0 }
            }}
            active
          >
            Zapisz się!
          </Button>
        </form>

        {submitted && (
          <strong css={{ color: colors.pink }}>
            Dziękujemy za zapisanie się do newslettera!
          </strong>
        )}
      </main>
    </>
  );
});

Materialy.displayName = "Materialy";
export default Materialy;
