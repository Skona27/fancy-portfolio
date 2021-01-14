import * as React from "react";
import { Languages } from "../hooks/useLang/types";

interface AboutMe {
  title: string;
  heading1: string;
  heading2: string;
  text: React.ReactNode;
  placeholder: string;
  submitButton: string;
  submitSuccess: string;
  courses: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export const materialy: Record<Languages, AboutMe> = {
  pl: {
    title: "Materiały do nauki | Jakub Skoneczny - Javascript Developer",
    heading1: "Moje kursy",
    heading2: "Chcesz być na bieżąco?",
    text: (
      <>
        Zapisz się do <strong>newslettera</strong>, żeby zdobywać darmowe
        materiały edukacyjne oraz mieć dostęp do najświeższych nowinek z branży
        i ciekawych artykułów 😃 Bez spamu! Będziesz mógł się wypisać w każdej
        chwili.
      </>
    ),
    placeholder: "Wpisz swój email",
    submitButton: "Zapisz się!",
    submitSuccess: "Dziękujemy za zapisanie się do newslettera!",
    courses: [
      {
        title: "Introduction to State Machines with XState and React",
        url:
          "https://www.udemy.com/course/introduction-to-state-machines-with-xstate-and-react/",
        description: `Dowiedz się jak tworzyć skomplikowane aplikacje i kompleksowo zarządzać stanem w aplikacjach React z wykorzystaniem maszyn stanowych i XState.`,
      },
    ],
  },
  "en-US": {
    title: "Resources | Jakub Skoneczny - Javascript Developer",
    heading1: "My courses",
    heading2: "Do you want to be up to date?",
    text: (
      <>
        Subscribe to the <strong>newsletter</strong> to get free educational
        materials as well as access the latest industry news and the best
        articles 😃 No spam! You will be able to unsubscribe at any time.
      </>
    ),
    placeholder: "Enter your email",
    submitButton: "Subscribe!",
    submitSuccess: "Thank you for subscribing to the newsletter!",
    courses: [
      {
        title: "Introduction to State Machines with XState and React",
        url:
          "https://www.udemy.com/course/introduction-to-state-machines-with-xstate-and-react/",
        description: `Learn how to build complex web applications and manage state
        with finite State Machines using Javascript and React.`,
      },
    ],
  },
};
