import { Languages } from "../hooks/useLang/types";

export interface ResourceGroup {
  type: "GROUP";
  title?: string;
  children: Resource[];
}

export interface LinkResource {
  type: "LINK";
  title: string;
  href: string;
  description?: string;
}

interface HrRuleResource {
  type: "HR";
  title?: string;
}

type Resource = LinkResource | HrRuleResource;

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

const universalResources: Resource[] = [
  /**
   * PART 2
   */
  {
    type: "HR",
    title: "Part #2 - updated 26.01.2021",
  },
  {
    type: "LINK",
    title: "Finding the cause of a memory leak in Jest tests",
    href:
      "https://making.close.com/posts/finding-the-cause-of-a-memory-leak-in-jest",
    description:
      "With increasing test coverage using Jest and React Testing Library, you may start see some “out of memory” errors. In this article, you will find how to solve this and how to find the cause of a memory leak",
  },
  {
    type: "LINK",
    title: "Push Notifications in JavaScript? Yes, you can!",
    href:
      "https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce",
    description:
      "In this tutorial, you will get started with JavaScript Push Notifications with working code samples and easy explanation",
  },
  {
    type: "LINK",
    title: "Let's Bring Spacer GIFs Back!",
    href: "https://www.joshwcomeau.com/react/modern-spacer-gif/",
    description:
      "Learn how to design components, so they only affect their inner layout and not the whole page",
  },
  {
    type: "LINK",
    title: "Multiple NodeJS apps on single server",
    href:
      "https://medium.com/dev-blogs/multiple-nodejs-apps-on-single-server-47b8bba3ec68",
    description:
      "Learn about what is web server and application server and how to deploy multiple NodeJS applications on a single server with Reverse Proxy",
  },
  {
    type: "LINK",
    title: "How to analyze 100 GB of data on your laptop with Python",
    href:
      "https://towardsdatascience.com/how-to-analyse-100s-of-gbs-of-data-on-your-laptop-with-python-f83363dda94",
    description:
      "Learn the best way of approaching that kind of datasets, which are a bit uncomfortable to use",
  },
  {
    type: "LINK",
    title:
      "Why React Context is Not a 'State Management' Tool (and Why It Doesn't Replace Redux)",
    href:
      "https://blog.isquaredsoftware.com/2021/01/context-redux-differences/",
    description:
      "This post will try to clarify what Context and Redux are, how they're meant to be used, how they're different, and when you should use them",
  },
  {
    type: "LINK",
    title: "Introduction to Reactive Programming for Everyone",
    href:
      "https://codersbible.com/introduction-to-reactive-programming-for-everyone/",
    description:
      "RxJava, RxJS... - do you see technologies like these listed in the job requirements and feel a little bit scared? With that article, you will get to know your opponent!",
  },
  {
    type: "LINK",
    title: "How To Set Up a Node.js Application for Production on Ubuntu 16.04",
    href:
      "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04",
    description:
      "This tutorial will cover setting up a production-ready Node.js environment on a single Ubuntu 16.04 server. The server will run a Node.js application managed by PM2 with Nginx Reverse Proxy",
  },
  {
    type: "LINK",
    title: "Fast-Paced Multiplayer (Part I): Client-Server Game Architecture",
    href:
      "https://www.gabrielgambetta.com/client-server-game-architecture.html",
    description:
      "First in a series of articles exploring the techniques and algorithms that make fast-paced multiplayer games possible",
  },
  {
    type: "LINK",
    title: "18 DevTools for productivity 🚀",
    href: "https://dev.to/christopherkade/18-devtools-for-productivity-5ia",
    description:
      "This may sound crazy, but developers are lazy. We need to automate lots of our tasks because repetition can be tiring. Here is a list of some tools I find extremely useful",
  },
  /**
   * PART 1
   */
  {
    type: "HR",
    title: "Part #1 - updated 21.01.2021",
  },
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
