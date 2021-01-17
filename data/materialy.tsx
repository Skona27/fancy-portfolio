import { Languages } from "../hooks/useLang/types";

interface AboutMe {
  title: string;
  heading1: string;
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
