import { IHeader } from "../components/Header/types";
import { Languages } from "../hooks/useLang/types";
import { constants } from "../config/client";

export const header: Record<Languages, IHeader> = {
  pl: {
    title: "Jakub Skoneczny",
    subtitle: "javascript developer",
    image: {
      url: `${constants.baseUrl}/static/img/profile-photo.jpg`,
      alt: "Moje zdjęcie profilowe",
    },
    elements: [
      {
        href: "/",
        title: "o mnie",
        type: "BUTTON",
      },
      {
        href: "https://jskoneczny.pl/",
        title: "portfolio",
        type: "LINK",
      },
      {
        href: "/blog",
        title: "blog",
        type: "BUTTON",
      },
      {
        href: "/resources",
        title: "materiały do nauki",
        type: "BUTTON",
      },
      {
        href: "/newsletter",
        title: "newsletter",
        type: "BUTTON",
      },
    ],
  },
  "en-US": {
    title: "Jakub Skoneczny",
    subtitle: "javascript developer",
    image: {
      url: `${constants.baseUrl}/static/img/profile-photo.jpg`,
      alt: "My profile photo",
    },
    elements: [
      {
        href: "/",
        title: "about me",
        type: "BUTTON",
      },
      {
        href: "https://jskoneczny.pl/",
        title: "portfolio",
        type: "LINK",
      },
      {
        href: "/blog",
        title: "blog",
        type: "BUTTON",
      },
      {
        href: "/resources",
        title: "resources",
        type: "BUTTON",
      },
      {
        href: "/newsletter",
        title: "newsletter",
        type: "BUTTON",
      },
    ],
  },
};
