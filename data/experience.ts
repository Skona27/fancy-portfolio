import { IExperienceItem } from "../components/Experience/types";
import { Languages } from "../hooks/useLang/types";

interface Experience {
  subtitle: string;
  text: string;
  items: IExperienceItem[];
}

export const experience: Record<Languages, Experience> = {
  pl: {
    subtitle: "Doświadczenie",
    text: "Poniżej znajduje się moje doświadczenie zawodowe.",
    items: [
      {
        duration: "07-2021 - now",
        companyName: "Netguru S.A.",
        positionName: "Node.js Developer",
        description:
          "Projektowanie aplikacji i konsultant dla zewnętrznych Klientów",
        techStack:
          "Node.js, Nest.js, Express, Typescript, AWS, SQL, NoSQL, Docker",
        live: "https://www.netguru.com/",
      },
      {
        duration: "03-2019 - 06-2021",
        companyName: "Orange Polska",
        positionName: "Javascript Developer w Zespole Portal",
        description: "Prace nad nową stroną główną i sklepem Orange Polska",
        techStack: "React, Next.JS, JavaScript, Typescript, HTML, CSS",
        live: "https://orange.pl/",
      },
      {
        duration: "01-2020 - 05-2020",
        companyName: "XD2Sketch",
        positionName: "Frontend Developer",
        description:
          "Prace nad nowym serwisem i konwerterem projektów graficznych",
        techStack: "React, Next.JS, JavaScript, Typescript, NodeJS, HTML, CSS",
        live: "https://xd2sketch.com/",
      },
      {
        duration: "07-2018 - 09.2018",
        companyName: "Orange Polska",
        positionName: "Stażysta w Zespole Dostarczania Rozwiązań dla Biznesu",
        description:
          "Tworzenie aplikacji webowych dla użytku wewnętrznego, administracja serwerami i sieciami.",
        techStack: "PHP, MySQL, HTML, Bootstrap, JavaScript, Linux (CentOS)",
      },
      {
        duration: "01.2018 – 06.2018",
        companyName: "IKSEL Studio Reklamy",
        positionName: "Junior Full-Stack Web Developer",
        description:
          "Tworzenie kompleksowych stron i aplikacji internetowych dla klientów, utrzymanie obecnych serwisów internetowych.",
        techStack: "HTML, CSS, JavaScript, NodeJS, MongoDB",
      },
    ],
  },
  "en-US": {
    items: [
      {
        duration: "07-2021 - now",
        companyName: "Netguru S.A.",
        positionName: "Node.js Developer",
        description:
          "Developing applications and consulting for external Clients",
        techStack:
          "Node.js, Nest.js, Express, Typescript, AWS, SQL, NoSQL, Docker",
        live: "https://www.netguru.com/",
      },
      {
        duration: "03-2019 - 06-2021",
        companyName: "Orange Polska",
        positionName: "Javascript Developer in Team Portal",
        description:
          "Working on the main website and e-commerce for Orange Polska",
        techStack: "React, Next.JS, JavaScript, Typescript, HTML, CSS",
        live: "https://orange.pl/",
      },
      {
        duration: "01-2020 - 05-2020",
        companyName: "XD2Sketch",
        positionName: "Frontend Developer",
        description: "Working on the new platform and design converter",
        techStack: "React, Next.JS, JavaScript, Typescript, NodeJS, HTML, CSS",
        live: "https://xd2sketch.com/",
      },
      {
        duration: "07-2018 - 09.2018",
        companyName: "Orange Polska",
        positionName: "Intern in Business Solutions Team",
        description:
          "Maintaining and developing internal applications and Dev-Ops",
        techStack: "PHP, MySQL, HTML, Bootstrap, JavaScript, Linux (CentOS)",
      },
      {
        duration: "01.2018 – 06.2018",
        companyName: "IKSEL Advertising",
        positionName: "Junior Full-Stack Web Developer",
        description:
          "Developing and maintaining static websites and basic web applications",
        techStack: "HTML, CSS, JavaScript, NodeJS, MongoDB",
      },
    ],
    subtitle: "My experience",
    text: "Below I have listed my work experience",
  },
};
