import { Languages } from "../hooks/useLang/types";

interface AboutMe {
  title: string;
  heading: string;
  text1: string;
  text2: string;
}

export const error: Record<Languages, AboutMe> = {
  pl: {
    title: "Coś poszło nie tak | Jakub Skoneczny - Javascript Developer",
    heading: "Uuups! Chyba coś poszło nie tak...",
    text1: `Podana strona nie istnieje, albo wystąpił błąd na serwerze. Spróbuj
      odświeżyć stronę za kilka sekund lub upewnij się, że wpisany przez
      Ciebie adres jest prawidłowy.`,
    text2: "Jeżeli błąd nadal występuje, skontaktuj się ze mną drogą mailową.",
  },
  "en-US": {
    title: "Something went wrong | Jakub Skoneczny - Javascript Developer",
    heading: "Ooops! Something went wrong...",
    text1: `The given page does not exist or there is an error on the server. Give it a try
    refresh the page in a few seconds or make sure typed by
    Your address is correct.`,
    text2: "If the error persists, please contact me by email.",
  },
};
