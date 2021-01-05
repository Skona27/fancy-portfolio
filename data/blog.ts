import { Languages } from "../hooks/useLang/types";

interface AboutMe {
  title: string;
  heading: string;
}

export const blog: Record<Languages, AboutMe> = {
  pl: {
    title: "Moje wpisy | Jakub Skoneczny - Javascript Developer",
    heading: "Moje wpisy",
  },
  "en-US": {
    title: "My thoughts | Jakub Skoneczny - Javascript Developer",
    heading: "My thoughts",
  },
};
