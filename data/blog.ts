import { Languages } from "../hooks/useLang/types";

interface AboutMe {
  title: string;
  heading: string;
  description?: string;
}

export const blog: Record<Languages, AboutMe> = {
  pl: {
    title: "Moje wpisy | Jakub Skoneczny - Javascript Developer",
    heading: "Moje wpisy",
    description: undefined,
  },
  "en-US": {
    title: "My thoughts | Jakub Skoneczny - Javascript Developer",
    heading: "My thoughts",
    description: "Be up to date with resources, news and the best articles",
  },
};
