import * as React from "react";
import { Languages } from "../hooks/useLang/types";

interface AboutMe {
  title: string;
  heading: string;
  subtitle: React.ReactNode;
  text: string;
}

export const aboutMe: Record<Languages, AboutMe> = {
  pl: {
    title: "O mnie | Jakub Skoneczny - Javascript Developer",
    heading: "Kilka słów o mnie",
    subtitle: (
      <>
        Cześć! Nazywam się <strong>Jakub Skoneczny</strong> i jestem{" "}
        <em>Javascript Developerem!</em>
      </>
    ),
    text: `Programowaniem zajmuję się od dawien dawna. Programowanie to moje
    hobby, co sprawia że praca to dla mnie czysta przyjemność. W wolnym
    czasie gram na gitarze, oglądam filmy i czytam ciekawostki o kosmosie
    i gwiazdach. Czasami zdarza mi się zagrać w pokera lub gry planszowe
    ze znajomymi.`,
  },
  "en-US": {
    title: "About me | Jakub Skoneczny - Javascript Developer",
    heading: "About me in a few words",
    subtitle: (
      <>
        Hi! My name is <strong>Jakub Skoneczny</strong> and I am a{" "}
        <em>Javascript Developer!</em>
      </>
    ),
    text: `
    I have been programming for a long time. Programming is my hobby, which makes my work a pleasure.
    I play guitar, watch movies, and read interesting facts about space and stars in my spare.
    Sometimes I play poker or board games with friends.`,
  },
};
