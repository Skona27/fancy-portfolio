import * as React from "react";
import { NewsletterProps } from "../components/Newsletter";
import { Languages } from "../hooks/useLang/types";

type Newsletter = {
  title: string;
  newsletter: NewsletterProps;
};

export const newsletter: Record<Languages, Newsletter> = {
  pl: {
    title: "Newsletter | Jakub Skoneczny - Javascript Developer",
    newsletter: {
      placeholder: "Wpisz swój email",
      buttonText: "Zapisz się!",
      submitText: "Dziękujemy za zapisanie się do newslettera!",
      heading: "Chcesz być na bieżąco?",
      text: (
        <>
          Zapisz się do <strong>newslettera</strong>, żeby zdobywać darmowe
          materiały edukacyjne oraz mieć dostęp do najświeższych nowinek z
          branży i ciekawych artykułów 😃 Bez spamu! Będziesz mógł się wypisać w
          każdej chwili.
        </>
      ),
    },
  },
  "en-US": {
    title: "Newsletter | Jakub Skoneczny - Javascript Developer",
    newsletter: {
      placeholder: "Enter your email",
      buttonText: "Subscribe!",
      submitText: "Thank you for subscribing to the newsletter!",
      heading: "Do you want to be up to date?",
      text: (
        <>
          Subscribe to the <strong>newsletter</strong> to get free educational
          materials as well as access the latest industry news and the best
          articles 😃 No spam! You will be able to unsubscribe at any time.
        </>
      ),
    },
  },
};
