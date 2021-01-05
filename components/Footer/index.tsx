import * as React from "react";
import { useRouter } from "next/router";
import { useTheme } from "../../hooks/Theme";
import { useLang } from "../../hooks/useLang";
import { ButtonItem } from "../Header/Components/NavigationItem/ButtonItem";

export function Footer() {
  const { colors, bp } = useTheme();
  const lang = useLang();
  const { asPath } = useRouter();

  return (
    <footer
      css={{
        transition: ".1s all ease-in",
        padding: "1.5rem 2rem",
        display: "flex",
        background: colors.primary,
        [bp.fromDesktop]: {
          position: "fixed",
          bottom: 0,
          right: 0,
        },
      }}
    >
      <div css={{ marginLeft: "auto" }}>
        <ButtonItem active={lang === "pl"} href={asPath} locale="pl">
          PL
        </ButtonItem>
        <span css={{ padding: "0 0.5rem", color: colors.secondary }}>/</span>
        <ButtonItem active={lang === "en-US"} href={asPath} locale="en-US">
          ENG
        </ButtonItem>
      </div>
    </footer>
  );
}
