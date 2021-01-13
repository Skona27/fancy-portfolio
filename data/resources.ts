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
];

export const resources: Record<Languages, ResourceGroup[]> = {
  "en-US": [
    {
      type: "GROUP",
      title: "Awesome articles",
      children: [...universalResources],
    },
  ],
  pl: [
    {
      type: "GROUP",
      title: "Polecane artykuły",
      children: [...universalResources],
    },
  ],
};
