import { Languages } from "../hooks/useLang/types";

export interface ResourceGroup {
  type: "GROUP";
  title?: string;
  children: LinkResource[];
}

export interface LinkResource {
  type: "LINK";
  title: string;
  href: string;
  description?: string;
}

interface ResourcesPage {
  title: string;
  heading1: string;
  courses: Array<{
    title: string;
    url: string;
    description: string;
  }>;
  resources: ResourceGroup[];
}

const universalResources: LinkResource[] = [
  {
    type: "LINK",
    title:
      "Building an augmented reality (AR) application using the WebXR Device API",
    href: "https://codelabs.developers.google.com/codelabs/ar-with-webxr#0",
    description: `Tutorial on building an AR web application. App uses JavaScript to render 3D models that appear as if they exist in the real world.`,
  },
  {
    type: "LINK",
    title: "The Perils of Rehydration",
    href: "https://www.joshwcomeau.com/react/the-perils-of-rehydration/",
    description: `How to avoid rehydration problems with Gatsby and React SSR`,
  },
  {
    type: "LINK",
    title: "Building a game with TypeScript",
    href:
      "https://medium.com/javascript-in-plain-english/gamedev-patterns-and-algorithms-in-action-with-typescript-d29b913858e",
    description:
      "Series of tutorials on how to build a game from scratch with TypeScript and native browser APIs",
  },
  {
    type: "LINK",
    title: "Create Your Own Compiler",
    href: "https://citw.dev/tutorial/create-your-own-compiler",
    description:
      "The Super Tiny Compiler is a simple compiler written in Javascript and we'll write it step by step from scratch",
  },
  {
    type: "LINK",
    title: "Using React + Google Sheets as your CMS",
    href:
      "https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59",
    description:
      "Tutorial on how to serve up any data from a Google Sheet into a real React application",
  },
  {
    type: "LINK",
    href:
      "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API",
    title: "Using the Web Speech API",
    description:
      "The Web Speech API enables you to incorporate voice data into web apps",
  },
  {
    type: "LINK",
    title: "Continuous Deployment for Node.js on the Google Cloud Platform",
    href:
      "https://medium.com/free-code-camp/continuous-deployment-for-node-js-on-google-cloud-platform-751a035a28d5",
    description:
      "Setup your application to deploy to App Engine on GitHub push",
  },
  {
    type: "LINK",
    title: "Dockerizing and autoscaling Node.js on Google Cloud",
    href:
      "https://levelup.gitconnected.com/dockerizing-and-autoscaling-node-js-on-google-cloud-ef8db3b99486",
    description:
      "Learn how to dockerize a Node.js server for hosting in Google Cloud and configuring your VM instances to auto scale proportionally with traffic",
  },
  {
    type: "LINK",
    href:
      "https://medium.com/@louiskengo3/getting-started-with-terraform-and-google-cloud-platform-9c3c45dc5bde",
    title: "Getting Started with Terraform and Google Cloud Platform",
    description:
      "Terraform is an automation tool used to ease the process of setting up infrastructure on which you can deploy applications",
  },
];

export const resources: Record<Languages, ResourcesPage> = {
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
    resources: [
      {
        type: "GROUP",
        title: "Polecane artykuły",
        children: [...universalResources],
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
    resources: [
      {
        type: "GROUP",
        title: "Awesome articles",
        children: [...universalResources],
      },
    ],
  },
};
