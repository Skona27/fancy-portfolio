import * as React from "react";
import { client } from "../../api/client";
import { useTheme } from "../../hooks/Theme";
import { Button } from "../Button";

export type NewsletterProps = {
  placeholder: string;
  buttonText: string;
  submitText: string;
  heading: string;
  text: React.ReactNode;
  headingType?: "h1" | "h2";
};

export function Newsletter({
  buttonText,
  placeholder,
  submitText,
  heading,
  text,
  headingType: HeadingType = "h2",
}: NewsletterProps) {
  const { bp, colors } = useTheme();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <>
      <HeadingType>{heading}</HeadingType>
      <p>{text}</p>

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
          placeholder={placeholder}
        />
        <Button
          css={{
            marginTop: 20,
            marginLeft: "calc(100% - 10rem)",
            [bp.fromTablet]: { marginTop: 0, marginLeft: 0 },
          }}
          active
        >
          {buttonText}
        </Button>
      </form>

      {submitted && <strong css={{ color: colors.pink }}>{submitText}</strong>}
    </>
  );
}
