import { IHeader } from "../components/Header/types";

export const headerData: IHeader = {
  title: "Jakub Skoneczny",
  subtitle: "javascript developer",
  image: {
    url: "https://blog.jskoneczny.pl/static/img/profile-photo.jpg",
    alt: "Moje zdjęcie profilowe"
  },
  elements: [
    {
      href: "/",
      title: "o mnie",
      type: "BUTTON"
    },
    {
      href: "https://jskoneczny.pl/",
      title: "portfolio",
      type: "LINK"
    },
    {
      href: "/blog",
      title: "blog",
      type: "BUTTON"
    },
    {
      href: "/materialy",
      title: "materiały do nauki",
      type: "BUTTON"
    }
  ]
};
